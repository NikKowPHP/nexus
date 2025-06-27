interface AssessmentContent {
  text?: string;
  file?: {
    buffer: Buffer;
    type: 'application/pdf' | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  };
}

interface FeedbackResponse {
  feedback: string;
  score: number;
  areasForImprovement: string[];
  strengths: string[];
}

export const AIService = {
  async generateFeedback(content: AssessmentContent): Promise<FeedbackResponse> {
    // Placeholder for actual AI API integration
    // In real implementation, this would call an external AI service
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate sample feedback based on actual content
    let contentSample = '';
    if (content.text) {
      contentSample = content.text.substring(0, 100) + (content.text.length > 100 ? '...' : '');
    } else if (content.file) {
      contentSample = `Submitted ${content.file.type === 'application/pdf' ? 'PDF' : 'Word document'}`;
    }
    
    const sampleFeedback = `This feedback is based on your assessment content: "${contentSample}"
      You demonstrated good understanding of the core concepts.
      Consider providing more detailed examples in future submissions.`;

    return {
      feedback: sampleFeedback,
      score: content.text ? Math.min(Math.floor(content.text.length / 2), 85) : 70,
      areasForImprovement: ['Detail in examples', 'Technical terminology'],
      strengths: ['Core concept understanding', 'Structure']
    };
  },

  async evaluateScore(feedback: string): Promise<number> {
    // Placeholder for actual scoring logic
    // In real implementation, this would use more sophisticated analysis
    
    let score = 50; // Base score
    
    // Simple scoring based on feedback length and keywords
    score += Math.min(feedback.length / 10, 30);
    
    const positiveKeywords = ['excellent', 'good', 'proper', 'correct'];
    const negativeKeywords = ['poor', 'incorrect', 'needs improvement'];
    
    positiveKeywords.forEach(word => {
      if (feedback.toLowerCase().includes(word)) score += 5;
    });
    
    negativeKeywords.forEach(word => {
      if (feedback.toLowerCase().includes(word)) score -= 5;
    });
    
    return Math.min(Math.max(score, 0), 100);
  }
};