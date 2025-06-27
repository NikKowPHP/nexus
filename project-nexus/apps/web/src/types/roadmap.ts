import { SimulationNodeDatum } from 'd3';

export interface RoadmapNode extends SimulationNodeDatum {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dependencies: string[];
}

export interface RoadmapLink {
  source: string;
  target: string;
}

export type SimulationNode = RoadmapNode & SimulationNodeDatum;
export type SimulationLink = d3.SimulationLinkDatum<SimulationNode>;