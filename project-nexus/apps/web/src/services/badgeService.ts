import { supabase } from '../lib/supabaseClient';

interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  criteria: string;
}

interface UserBadge {
  userId: string;
  badgeId: string;
  awardedAt: string;
}

interface UserBadgeJoin {
  badges: Badge[];
}

export const BadgeService = {
  async awardBadge(userId: string, badgeId: string): Promise<UserBadge> {
    const { data, error } = await supabase
      .from('user_badges')
      .insert({
        user_id: userId,
        badge_id: badgeId,
        awarded_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as UserBadge;
  },

  async getUserBadges(userId: string): Promise<Badge[]> {
    const { data, error } = await supabase
      .from('user_badges')
      .select('badges(*)')
      .eq('user_id', userId);

    if (error) throw new Error(error.message);
    return data?.flatMap((entry: UserBadgeJoin) => entry.badges) || [];
  },

  async getAllBadges(): Promise<Badge[]> {
    const { data, error } = await supabase
      .from('badges')
      .select('*');

    if (error) throw new Error(error.message);
    return data || [];
  },

  async hasBadge(userId: string, badgeId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('user_badges')
      .select('*')
      .eq('user_id', userId)
      .eq('badge_id', badgeId)
      .single();

    return !!data && !error;
  }
};