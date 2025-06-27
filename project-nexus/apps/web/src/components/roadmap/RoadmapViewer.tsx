import { FC, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { RoadmapNode, RoadmapLink, SimulationNode, SimulationLink } from '@/types/roadmap';
import { getNodeById } from '@/lib/roadmapUtils';

interface RoadmapViewerProps {
  nodes: RoadmapNode[];
  onNodeClick?: (nodeId: string) => void;
  currentNodeId?: string;
}

export const RoadmapViewer: FC<RoadmapViewerProps> = ({ 
  nodes, 
  onNodeClick,
  currentNodeId
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(currentNodeId);
  const [dimensions, setDimensions] = useState({ width: 0, height: 600 });

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      const { width } = entries[0].contentRect;
      setDimensions(prev => ({ ...prev, width }));
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height);

    // Clear previous render
    svg.selectAll('*').remove();

    // Create simulation
    const simulation = d3.forceSimulation<SimulationNode>(nodes as SimulationNode[])
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('link', d3.forceLink<SimulationNode, SimulationLink>()
        .id(d => d.id)
        .links(nodes.flatMap(node => 
          node.dependencies.map(depId => ({
            source: node.id,
            target: depId
          } as RoadmapLink))
        ) as SimulationLink[])
      );

    // Create links
    const links = svg.append('g')
      .selectAll('line')
      .data(nodes.flatMap(node => 
        node.dependencies.map(depId => ({
          source: node.id,
          target: depId
        }))
      ))
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 2)
      .attr('class', 'roadmap-link');

    // Highlight connections for selected node
    if (selectedNodeId) {
      const selectedNode = getNodeById(nodes, selectedNodeId);
      if (selectedNode) {
        links.attr('stroke', (l: any) => {
            const sourceId = (l.source as SimulationNode).id || (l.source as string);
            const targetId = (l.target as SimulationNode).id || (l.target as string);
            return sourceId === selectedNodeId || targetId === selectedNodeId ? '#FF5722' : '#999';
          }).attr('stroke-width', (l: any) => {
            const sourceId = (l.source as SimulationNode).id || (l.source as string);
            const targetId = (l.target as SimulationNode).id || (l.target as string);
            return sourceId === selectedNodeId || targetId === selectedNodeId ? 3 : 2;
          });
      }
    }

    // Create nodes with responsive size
    const nodeSize = dimensions.width < 768 ? 15 : 20;
    const nodeElements = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', nodeSize)
      .attr('fill', d => d.completed ? '#4CAF50' : '#2196F3')
      .attr('stroke', d => d.id === selectedNodeId ? '#FF5722' : 'none')
      .attr('stroke-width', 3)
      .on('click', (event, d) => {
        setSelectedNodeId(d.id);
        onNodeClick?.(d.id);
      });

    // Add labels with responsive font size
    const labelFontSize = dimensions.width < 768 ? '0.8rem' : '1rem';
    const labels = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text(d => d.title)
      .attr('text-anchor', 'middle')
      .attr('dy', -nodeSize - 5)
      .style('pointer-events', 'none')
      .style('font-size', labelFontSize);

    // Update positions on each tick
    simulation.on('tick', () => {
      links
        .attr('x1', d => (d.source as SimulationNode).x || 0)
        .attr('y1', d => (d.source as SimulationNode).y || 0)
        .attr('x2', d => (d.target as SimulationNode).x || 0)
        .attr('y2', d => (d.target as SimulationNode).y || 0);

      nodeElements
        .attr('cx', d => d.x || 0)
        .attr('cy', d => d.y || 0);

      labels
        .attr('x', d => d.x || 0)
        .attr('y', d => d.y || 0);
    });

    // Add zoom capability
    const zoom = d3.zoom()
      .scaleExtent([0.5, 4])
      .on('zoom', (event) => {
        svg.selectAll('g').attr('transform', event.transform);
      });

    svg.call(zoom as unknown as d3.ZoomBehavior<SVGSVGElement, unknown>);

    return () => {
      simulation.stop();
    };
  }, [nodes, onNodeClick, selectedNodeId, dimensions]);

  return (
    <div ref={containerRef} className="roadmap-container">
      <svg ref={svgRef} />
      {selectedNodeId && (
        <div className="node-navigation">
          <button onClick={() => setSelectedNodeId(undefined)}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
};