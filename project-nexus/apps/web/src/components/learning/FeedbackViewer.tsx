interface FeedbackViewerProps {
  feedback: string;
  score: number;
  strengths?: string[];
  areasForImprovement?: string[];
}

export const FeedbackViewer = ({ 
  feedback, 
  score,
  strengths = [],
  areasForImprovement = []
}: FeedbackViewerProps) => {
  const scoreColor = score >= 80 ? 'text-green-600' : 
                    score >= 50 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="feedback-viewer p-4 bg-gray-50 rounded-lg mt-4">
      <div className="score-section mb-4">
        <h3 className="text-lg font-semibold">Your Assessment Score</h3>
        <div className={`text-3xl font-bold ${scoreColor}`}>
          {score}%
        </div>
      </div>

      <div className="feedback-section mb-4">
        <h3 className="text-lg font-semibold mb-2">Detailed Feedback</h3>
        <p className="whitespace-pre-wrap text-gray-700">{feedback}</p>
      </div>

      {strengths.length > 0 && (
        <div className="strengths-section mb-4">
          <h3 className="text-lg font-semibold mb-2">Strengths</h3>
          <ul className="list-disc list-inside">
            {strengths.map((strength, index) => (
              <li key={index} className="text-green-700">{strength}</li>
            ))}
          </ul>
        </div>
      )}

      {areasForImprovement.length > 0 && (
        <div className="improvement-section">
          <h3 className="text-lg font-semibold mb-2">Areas for Improvement</h3>
          <ul className="list-disc list-inside">
            {areasForImprovement.map((area, index) => (
              <li key={index} className="text-red-700">{area}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};