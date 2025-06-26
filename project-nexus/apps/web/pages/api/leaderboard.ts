import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../src/lib/supabaseClient';

interface LeaderboardEntry {
  id: string;
  name: string;
  xp: number;
  level: number;
  streak: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { timePeriod, minLevel, maxLevel } = req.query;

  try {
    // Base query
    let query = supabase
      .from('users')
      .select('id, name, xp, level, streak')
      .order('xp', { ascending: false });

    // Add time period filter
    if (timePeriod === 'weekly') {
      query = query.gt('last_active', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
    } else if (timePeriod === 'monthly') {
      query = query.gt('last_active', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());
    }

    // Add level filters
    if (minLevel) {
      query = query.gte('level', minLevel);
    }
    if (maxLevel) {
      query = query.lte('level', maxLevel);
    }

    const { data, error } = await query;

    if (error) throw error;

    res.status(200).json(data as LeaderboardEntry[]);
  } catch (error) {
    console.error('Leaderboard API error:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard data' });
  }
}