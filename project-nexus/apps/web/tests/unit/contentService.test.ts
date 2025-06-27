import { ContentService } from '@/services/contentService';
import { flagshipRoadmaps } from '@/data/roadmaps/flagship';

describe('ContentService', () => {
  const testRoadmap = flagshipRoadmaps[0];

  describe('getAllRoadmaps', () => {
    it('should return all roadmaps', () => {
      const result = ContentService.getAllRoadmaps();
      expect(result).toEqual(flagshipRoadmaps);
    });

    it('should return a new array, not the original reference', () => {
      const result = ContentService.getAllRoadmaps();
      expect(result).not.toBe(flagshipRoadmaps);
    });
  });

  describe('getRoadmapById', () => {
    it('should return the correct roadmap by ID', () => {
      const result = ContentService.getRoadmapById(testRoadmap.id);
      expect(result).toEqual(testRoadmap);
    });

    it('should return undefined for non-existent ID', () => {
      const result = ContentService.getRoadmapById('non-existent-id');
      expect(result).toBeUndefined();
    });

    it('should handle empty string ID', () => {
      const result = ContentService.getRoadmapById('');
      expect(result).toBeUndefined();
    });
  });
});