import { supabase } from '../lib/supabaseClient';

interface XpTransaction {
  userId: string;
  amount: number;
  source: 'node_completion' | 'assessment' | 'streak';
}

export const XpService = {
  async awardXp(transaction: XpTransaction): Promise<number> {
    const { data, error } = await supabase
      .from('user_xp')
      .upsert(
        { 
          user_id: transaction.userId,
          xp: transaction.amount,
          source: transaction.source
        },
        { onConflict: 'user_id' }
      )
      .select('total_xp');

    if (error) throw new Error(error.message);
    return data?.[0]?.total_xp || 0;
  },

  async getUserXp(userId: string): Promise<number> {
    const { data, error } = await supabase
      .from('user_xp')
      .select('total_xp')
      .eq('user_id', userId)
      .single();

    if (error) throw new Error(error.message);
    return data?.total_xp || 0;
  },

  calculateLevel(xp: number): number {
    return Math.floor(Math.sqrt(xp / 100));
  }
};