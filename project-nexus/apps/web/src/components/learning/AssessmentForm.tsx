import { useState } from 'react';
import { AIService } from '@/services/aiFeedbackService';
import { FeedbackViewer } from './FeedbackViewer';

interface Question {
  id: string;
  text: string;
}

interface AssessmentFormProps {
  nodeId: string;
  questions: Question[];
  onSuccess?: (feedback: string, score: number) => void;
}

async function submitAssessment(data: {
  nodeId: string;
  answers: Array<{ questionId: string; answer: string }>;
}) {
  // First get AI feedback
  const assessmentContent = {
    text: data.answers.map(a => a.answer).join('\n\n')
  };
  
  const { feedback, score } = await AIService.generateFeedback(assessmentContent);

  // Then submit to API
  const response = await fetch('/api/assessments/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      feedback,
      score
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit assessment');
  }

  return { feedback, score };
}

export const AssessmentForm = ({ nodeId, questions, onSuccess }: AssessmentFormProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const validateForm = () => {
    for (const question of questions) {
      if (!answers[question.id]?.trim()) {
        setError(`Please answer ${question.text}`);
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    setFeedback(null);
    setScore(null);

    try {
      const { feedback: aiFeedback, score: aiScore } = await submitAssessment({
        nodeId,
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId,
          answer
        }))
      });
      
      setAnswers({});
      setSuccess(true);
      setFeedback(aiFeedback);
      setScore(aiScore);
      onSuccess?.(aiFeedback, aiScore);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit assessment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="assessment-form">
      <h3>Assessment for Node {nodeId}</h3>
      
      {questions.map(question => (
        <div key={question.id} className="form-group">
          <label htmlFor={question.id}>{question.text}</label>
          <textarea
            id={question.id}
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
      ))}

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Assessment submitted successfully!</div>}
      
      {feedback && score && (
        <FeedbackViewer
          feedback={feedback}
          score={score}
          strengths={['Core concept understanding', 'Structure']}
          areasForImprovement={['Detail in examples', 'Technical terminology']}
        />
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
      </button>
    </form>
  );
};