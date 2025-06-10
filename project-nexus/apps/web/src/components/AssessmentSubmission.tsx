import { useState } from 'react';

export default function AssessmentSubmission() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [assessmentText, setAssessmentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setSubmitError('');
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAssessmentText(event.target.value);
    setSubmitError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      let fileBase64 = '';
      let fileType = '';
      
      if (selectedFile) {
        fileBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
          reader.onerror = error => reject(error);
          reader.readAsDataURL(selectedFile);
        });
        fileType = selectedFile.type;
      }

      const response = await fetch('/api/assessments/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: assessmentText,
          ...(selectedFile && {
            file: fileBase64,
            fileType: fileType
          })
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      await response.json();
      setSubmitSuccess(true);
      setAssessmentText('');
      setSelectedFile(null);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
        />
        <textarea
          placeholder="Enter assessment text"
          value={assessmentText}
          onChange={handleTextChange}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </button>
        {submitError && <div style={{color: 'red'}}>{submitError}</div>}
        {submitSuccess && (
          <div style={{marginTop: '20px'}}>
            <h3>Feedback Analysis</h3>
            <div style={{
              display: 'grid',
              gap: '15px',
              marginTop: '10px'
            }}>
              <div style={{
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#e8f5e9'
              }}>
                <h4 style={{margin: '0 0 10px 0', color: '#2e7d32'}}>Strengths</h4>
                {/* Strengths content will go here */}
              </div>
              <div style={{
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#ffebee'
              }}>
                <h4 style={{margin: '0 0 10px 0', color: '#c62828'}}>Weaknesses</h4>
                {/* Weaknesses content will go here */}
              </div>
              <div style={{
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#e3f2fd'
              }}>
                <h4 style={{margin: '0 0 10px 0', color: '#1565c0'}}>Suggestions</h4>
                {/* Suggestions content will go here */}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}