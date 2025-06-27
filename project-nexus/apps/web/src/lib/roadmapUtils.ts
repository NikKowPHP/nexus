import { RoadmapNode } from '@/types/roadmap';

export const generateInitialPositions = (nodes: RoadmapNode[], width: number, height: number): RoadmapNode[] => {
  const radius = Math.min(width, height) / 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const angleStep = (2 * Math.PI) / nodes.length;

  return nodes.map((node, index) => ({
    ...node,
    position: {
      x: centerX + radius * Math.cos(angleStep * index),
      y: centerY + radius * Math.sin(angleStep * index)
    }
  }));
};

export const validateRoadmap = (nodes: RoadmapNode[]): { isValid: boolean, errors: string[] } => {
  const errors: string[] = [];
  const nodeIds = new Set(nodes.map(n => n.id));

  // Check for duplicate IDs
  if (nodeIds.size !== nodes.length) {
    errors.push('Duplicate node IDs found');
  }

  // Check for invalid dependencies
  nodes.forEach(node => {
    node.dependencies.forEach(depId => {
      if (!nodeIds.has(depId)) {
        errors.push(`Node ${node.id} has invalid dependency: ${depId}`);
      }
    });
  });

  // Check for circular dependencies
  // (Implementation would require a more complex graph traversal)

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const getNodeById = (nodes: RoadmapNode[], id: string): RoadmapNode | undefined => {
  return nodes.find(node => node.id === id);
};

export const getCompletedNodes = (nodes: RoadmapNode[]): RoadmapNode[] => {
  return nodes.filter(node => node.completed);
};