import { useState } from 'react';
import { Zoom } from '@visx/zoom';
import { RoadmapData } from '../lib/roadmapData';
import { NodeContent } from '../lib/nodeData';
import { fetchNodeContent } from '../lib/nodeData';
import NodeDetail from './NodeDetail';

export default function Roadmap({ data }: { data: RoadmapData }) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [selectedNodeData, setSelectedNodeData] = useState<NodeContent | null>(null);

  const handleNodeClick = async (nodeId: string) => {
    try {
      const content = await fetchNodeContent(nodeId);
      setSelectedNodeId(nodeId);
      setSelectedNodeData(content);
    } catch (error) {
      console.error('Error fetching node content:', error);
    }
  };
  return (
    <Zoom
      width={800}
      height={600}
      scaleXMin={0.5}
      scaleXMax={2}
      scaleYMin={0.5}
      scaleYMax={2}
    >
      {(zoom) => (
        <div
          style={{
            width: '100%',
            height: '600px',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseDown={zoom.dragStart}
          onMouseMove={zoom.dragMove}
          onMouseUp={zoom.dragEnd}
          onMouseLeave={zoom.dragEnd}
          onTouchStart={zoom.dragStart}
          onTouchMove={zoom.dragMove}
          onTouchEnd={zoom.dragEnd}
        >
          <div
            style={{
              transform: `matrix(
                ${zoom.transformMatrix.scaleX},
                ${zoom.transformMatrix.skewY},
                ${zoom.transformMatrix.skewX},
                ${zoom.transformMatrix.scaleY},
                ${zoom.transformMatrix.translateX},
                ${zoom.transformMatrix.translateY}
              )`,
              transformOrigin: '0 0',
            }}
          >
            <h1>{data.title}</h1>
            <p>Roadmap Component - Under Construction</p>
          </div>
        </div>
      )}
    </Zoom>
  );
}