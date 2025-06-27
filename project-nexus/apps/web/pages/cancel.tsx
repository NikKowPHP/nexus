import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    // You might want to log the cancellation or perform other actions here
    console.log('Payment was cancelled');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-100 p-6 rounded-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-700 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-red-700 mb-4">
          Your payment was not completed. You have not been charged.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}