// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Assessment submission form component
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function AssessmentSubmission({ assessmentId }: { assessmentId: string }) {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [attemptHistory, setAttemptHistory] = useState<Array<{
    score: number;
    feedback: string;
    created_at: string;
  }>>([]);
  const maxAttempts = 3;

  // ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Progress tracking implementation
  useEffect(() => {
    const fetchAttemptData = async () => {
      const { data, error } = await supabase
        .from('assessments')
        .select('attempts, score, ai_feedback, created_at')
        .eq('id', assessmentId)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setAttempts(data[0].attempts || 0);
        setAttemptHistory(data
          .filter(attempt => attempt.score !== null)
          .map(attempt => ({
            score: attempt.score,
            feedback: attempt.ai_feedback,
            created_at: attempt.created_at
          }))
        );
      }
    };

    fetchAttemptData();

    fetchAttempts();
  }, [assessmentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (attempts >= maxAttempts) {
      setError('Maximum attempts reached');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      let fileUrl = '';
      if (file) {
        const { data, error: uploadError } = await supabase.storage
          .from('assessments')
          .upload(`${Date.now()}-${file.name}`, file);

        if (uploadError) throw uploadError;
        fileUrl = data.path;
      }

      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error('User not authenticated');

      // Update streak first
      await updateStreak(user.id);

      const { error: submissionError } = await supabase
        .from('assessments')
        .insert({
          content,
          file_url: fileUrl,
          user_id: user.id,
          attempts: attempts + 1
        })
        .eq('id', assessmentId);

      if (submissionError) throw submissionError;
      
      // Reset form
      setContent('');
      setAttempts(prev => prev + 1);
      setContent('');
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="content" className="block text-sm font-medium">
          Your Response
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2"
          rows={4}
          required
        />
      </div>

      <div>
        <label htmlFor="file" className="block text-sm font-medium">
          Upload File (Optional)
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-6">
        <div className="text-sm text-gray-600">
          Attempt {attempts + 1} of {maxAttempts}
        </div>

        {attemptHistory.length > 0 && (
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Previous Attempts</h3>
            {attemptHistory.map((attempt, idx) => (
              <div key={idx} className="mb-4 p-3 bg-gray-50 rounded">
                <div className="flex justify-between text-sm">
                  <span>Attempt {idx + 1}</span>
                  <span className="font-medium">
                    Score: {attempt.score}%
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {attempt.feedback}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Knowledge gap analysis */}
        {attemptHistory.length > 0 && (
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Knowledge Gaps</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {attemptHistory
                .filter(attempt => attempt.score < 70)
                .map((attempt, idx) => (
                  <li key={idx} className="mb-2">
                    Low score ({attempt.score}%) indicates areas needing improvement
                  </li>
                ))}
            </ul>
          </div>
        )}
        {/* ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END */}

        {attempts >= maxAttempts ? (
          <div className="text-red-500">
            Maximum attempts reached. You cannot submit again.
          </div>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || attempts >= maxAttempts}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
          </button>
        )}
      </div>
    </form>
  );
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END