import { SubscriptionManagement } from '@/components/subscription/SubscriptionManagement';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="space-y-6">
        {/* Other profile content */}
        <SubscriptionManagement />
      </div>
    </main>
  );
}
