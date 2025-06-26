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

export async function sendAchievementNotification(userId: string, badgeName: string) {
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      type: 'achievement_unlocked',
      message: `You unlocked the ${badgeName} badge!`,
      metadata: { badgeName },
      status: 'pending'
    });

  if (error) {
    console.error('Failed to create achievement notification:', error);
    throw error;
  }
  
  // Trigger push notification
  if (typeof window !== 'undefined' && 'Notification' in window) {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('Achievement Unlocked', {
        body: `You unlocked the ${badgeName} badge!`,
        icon: '/icon.png',
        badge: '/badge.png'
      });
    }
  }
}

export async function requestNotificationPermission() {
  if (typeof window !== 'undefined' && 'Notification' in window) {
    return await Notification.requestPermission();
  }
  return 'denied';
}

export async function sendEmailNotification(email: string, subject: string, message: string) {
  const { error } = await supabase
    .from('emails')
    .insert({
      to: email,
      subject,
      body: message,
      status: 'pending'
    });

  if (error) {
    console.error('Failed to queue email:', error);
    throw error;
  }
}
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Email notification system