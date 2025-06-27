import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RoadmapViewer } from '@/components/roadmap/RoadmapViewer';
import { RoadmapNode } from '@/types/roadmap';

const mockNodes: RoadmapNode[] = [
  {
    id: '1',
    title: 'Node 1',
    description: 'Description 1',
    completed: false,
    dependencies: ['2']
  },
  {
    id: '2',
    title: 'Node 2',
    description: 'Description 2',
    completed: true,
    dependencies: []
  }
];

describe('RoadmapViewer', () => {
  it('renders without crashing', () => {
    render(<RoadmapViewer nodes={mockNodes} />);
    expect(screen.getByTestId('roadmap-svg')).toBeInTheDocument();
  });

  it('displays correct number of nodes', () => {
    render(<RoadmapViewer nodes={mockNodes} />);
    const circles = screen.getAllByRole('circle');
    expect(circles.length).toBe(mockNodes.length);
  });

  it('highlights selected node', () => {
    render(<RoadmapViewer nodes={mockNodes} currentNodeId="1" />);
    const selectedNode = screen.getAllByRole('circle')[0];
    expect(selectedNode).toHaveAttribute('stroke', '#FF5722');
  });

  it('calls onNodeClick when node is clicked', () => {
    const mockClick = jest.fn();
    render(<RoadmapViewer nodes={mockNodes} onNodeClick={mockClick} />);
    const node = screen.getAllByRole('circle')[0];
    fireEvent.click(node);
    expect(mockClick).toHaveBeenCalledWith('1');
  });

  it('renders links between nodes', () => {
    render(<RoadmapViewer nodes={mockNodes} />);
    const links = screen.getAllByTestId('roadmap-link');
    expect(links.length).toBe(1); // Only one link from node 1 to node 2
  });
});