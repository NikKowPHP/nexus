// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Assessment submission form component
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function AssessmentSubmission({ assessmentId }: { assessmentId: string }) {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  useEffect(() => {
    const fetchAttempts = async () => {
      const { data, error } = await supabase
        .from('assessments')
        .select('attempts')
        .eq('id', assessmentId)
        .single();

      if (!error && data) {
        setAttempts(data.attempts || 0);
      }
    };

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

      const { error: submissionError } = await supabase
        .from('assessments')
        .insert({ 
          content,
          file_url: fileUrl,
          user_id: (await supabase.auth.getUser()).data.user?.id,
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

      <div className="text-sm text-gray-600">
        Attempt {attempts + 1} of {maxAttempts}
      </div>

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
    </form>
  );
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END