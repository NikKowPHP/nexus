import { flagshipRoadmaps } from '@/data/roadmaps/flagship';
import { Roadmap } from '@/types/roadmap';

export const ContentService = {
  getRoadmapById(id: string): Roadmap | undefined {
    return flagshipRoadmaps.find(roadmap => roadmap.id === id);
  },

  getAllRoadmaps(): Roadmap[] {
    return [...flagshipRoadmaps];
  }
};