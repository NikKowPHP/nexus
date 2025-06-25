// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Create feedback presentation component
import React from 'react';

interface FeedbackViewerProps {
  feedback: string;
  score: number;
}

const FeedbackViewer: React.FC<FeedbackViewerProps> = ({ feedback, score }) => {
  return (
    <div className="feedback-container">
      <div className="score-section">
        <h3>Your Score: {Math.round(score)}/100</h3>
        <div className="score-bar">
          <div 
            className="score-progress" 
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>
      
      <div className="feedback-content">
        <h3>Detailed Feedback:</h3>
        <div className="feedback-text">
          {feedback.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackViewer;
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END