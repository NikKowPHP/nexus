// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Assessment submission form component
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AssessmentSubmission() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          user_id: (await supabase.auth.getUser()).data.user?.id 
        });

      if (submissionError) throw submissionError;
      
      // Reset form
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
      </button>
    </form>
  );
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END