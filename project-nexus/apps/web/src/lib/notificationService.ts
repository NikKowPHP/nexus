// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Notification service implementation
import { supabase } from './supabase';

export async function sendFeedbackNotification(email: string, assessmentId: string) {
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_email: email,
      type: 'assessment_feedback',
      message: `Your assessment feedback is ready!`,
      metadata: { assessmentId },
      status: 'pending'
    });

  if (error) {
    console.error('Failed to create notification:', error);
    throw error;
  }
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END