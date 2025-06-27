import { supabase } from '../lib/supabaseClient';

interface Streak {
  userId: string;
  lastActivityDate: string;
  currentStreak: number;
  longestStreak: number;
}

export const StreakService = {
  async recordActivity(userId: string): Promise<Streak> {
    const { data: existing, error: fetchError } = await supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', userId)
      .single();

    const today = new Date().toISOString().split('T')[0];
    let updatedStreak = 1;

    if (!fetchError && existing) {
      const lastDate = new Date(existing.last_activity_date);
      const currentDate = new Date(today);
      const dayDiff = Math.floor(
        (currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
      );

      updatedStreak = dayDiff === 1 ? existing.current_streak + 1 : 1;
    }

    const { data, error } = await supabase
      .from('user_streaks')
      .upsert({
        user_id: userId,
        last_activity_date: today,
        current_streak: updatedStreak,
        longest_streak: Math.max(
          updatedStreak,
          existing?.longest_streak || 0
        )
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    return {
      userId: data.user_id,
      lastActivityDate: data.last_activity_date,
      currentStreak: data.current_streak,
      longestStreak: data.longest_streak
    };
  },

  async getStreak(userId: string): Promise<Streak> {
    const { data, error } = await supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw new Error(error.message);
    return {
      userId: data.user_id,
      lastActivityDate: data.last_activity_date,
      currentStreak: data.current_streak,
      longestStreak: data.longest_streak
    };
  },

  calculateStreakBonus(streakLength: number): number {
    if (streakLength >= 7) return 50;
    if (streakLength >= 3) return 20;
    return 0;
  }
};