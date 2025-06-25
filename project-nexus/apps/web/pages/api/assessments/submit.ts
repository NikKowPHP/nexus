import type { NextApiRequest, NextApiResponse } from 'next';
import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import { supabase } from '@/lib/supabase';

// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: AI feedback generator
async function generateAIFeedback(content: string): Promise<{
  feedback: string;
  score: number;
}> {
  // Placeholder for actual AI API integration
  // In real implementation, this would call an external AI service
  // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Scoring system implementation
  function calculateScore(feedback: string): number {
    let score = 50; // Base score
    
    // Score increases with feedback length
    score += Math.min(feedback.length / 10, 30);
    
    // Adjust score based on positive/negative keywords
    const positiveKeywords = ['excellent', 'good', 'proper', 'correct'];
    const negativeKeywords = ['poor', 'incorrect', 'needs improvement'];
    
    positiveKeywords.forEach(word => {
      if (feedback.toLowerCase().includes(word)) score += 5;
    });
    
    negativeKeywords.forEach(word => {
      if (feedback.toLowerCase().includes(word)) score -= 5;
    });
    
    // Ensure score stays within 0-100 bounds
    return Math.min(Math.max(score, 0), 100);
  }

  const feedback = `Sample feedback for: ${content.substring(0, 50)}...`;
  return {
    feedback,
    score: calculateScore(feedback)
  };
  // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      let textContent = '';

      if (req.body.file) {
        const fileBuffer = Buffer.from(req.body.file, 'base64');
        const fileType = req.body.fileType;

        if (fileType === 'application/pdf') {
          const pdfData = await pdfParse(fileBuffer);
          textContent = pdfData.text;
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          const result = await mammoth.extractRawText({ buffer: fileBuffer });
          textContent = result.value;
        } else {
          return res.status(400).json({ error: 'Unsupported file type' });
        }
      } else if (req.body.text) {
        textContent = req.body.text;
      } else {
        return res.status(400).json({ error: 'No content provided' });
      }

      // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: AI feedback generation
      const aiResponse = await generateAIFeedback(textContent);
      
      // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Response evaluation logic
      function evaluateAIResponse(response: { feedback: string; score: number }) {
        if (response.feedback.length < 50) {
          throw new Error('Feedback is too short');
        }
        
        if (response.score < 0 || response.score > 100) {
          throw new Error('Invalid score value');
        }
        
        if (response.feedback.includes('Sample feedback')) {
          throw new Error('Placeholder feedback detected');
        }
        
        return true;
      }
      
      evaluateAIResponse(aiResponse);
      
      const { error: dbError } = await supabase
        .from('assessments')
        .update({
          ai_feedback: aiResponse.feedback,
          score: aiResponse.score,
          status: 'processed'
        })
        .eq('id', req.body.assessmentId);

      if (dbError) throw dbError;

      res.status(200).json({
        message: 'Assessment processed',
        feedback: aiResponse.feedback,
        score: aiResponse.score
      });
      // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END
    } catch (error) {
      console.error('Error processing assessment:', error);
      res.status(500).json({ error: 'Failed to process assessment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}