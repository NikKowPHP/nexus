import { AIService } from '@/services/aiFeedbackService';

const PDF_MIME_TYPE = 'application/pdf' as const;
const WORD_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' as const;

describe('AIService', () => {
  describe('generateFeedback', () => {
    it('should generate feedback for text content', async () => {
      const content = { text: 'Sample assessment answer' };
      const result = await AIService.generateFeedback(content);
      
      expect(result).toHaveProperty('feedback');
      expect(result.feedback).toContain('Sample assessment answer');
      expect(result).toHaveProperty('score');
      expect(result.score).toBeGreaterThanOrEqual(0);
      expect(result.score).toBeLessThanOrEqual(100);
      expect(result).toHaveProperty('strengths');
      expect(result).toHaveProperty('areasForImprovement');
    });

    it('should handle PDF file content', async () => {
      const content = { 
        file: {
          buffer: Buffer.from('PDF content'),
          type: PDF_MIME_TYPE
        }
      };
      const result = await AIService.generateFeedback(content);
      
      expect(result.feedback).toContain('PDF');
    });

    it('should handle Word document content', async () => {
      const content = { 
        file: {
          buffer: Buffer.from('Word content'),
          type: WORD_MIME_TYPE
        }
      };
      const result = await AIService.generateFeedback(content);
      
      expect(result.feedback).toContain('Word document');
    });
  });

  describe('evaluateScore', () => {
    it('should return a score between 0 and 100', async () => {
      const feedback = 'This is a good assessment with proper examples.';
      const score = await AIService.evaluateScore(feedback);
      
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });

    it('should increase score for positive keywords', async () => {
      const positiveFeedback = 'Excellent work with correct answers.';
      const score = await AIService.evaluateScore(positiveFeedback);
      
      expect(score).toBeGreaterThan(50);
    });

    it('should decrease score for negative keywords', async () => {
      const negativeFeedback = 'Poor understanding needs improvement.';
      const score = await AIService.evaluateScore(negativeFeedback);
      
      expect(score).toBeLessThan(50);
    });
  });
});