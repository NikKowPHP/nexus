import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();
  const { session_id } = router.query;

  useEffect(() => {
    if (session_id) {
      // Optionally, you could verify the session with your backend here
    }
  }, [session_id]);

  return (
    <div className="success-page">
      <h1>Payment Successful!</h1>
      <p>Thank you for your subscription. Your account has been upgraded.</p>
    </div>
  );
};

export default SuccessPage;