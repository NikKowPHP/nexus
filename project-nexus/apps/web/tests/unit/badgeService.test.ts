import { mock, when, anything } from 'ts-mockito';
import { supabase } from '@/lib/supabaseClient';
import { BadgeService } from '@/services/badgeService';
import { PostgrestError } from '@supabase/supabase-js';

describe('BadgeService', () => {
  const mockSupabase = mock(supabase);
  const userId = 'test-user-123';
  const badgeId = 'test-badge-456';

  beforeEach(() => {
    mockSupabase.from = jest.fn().mockReturnThis();
  });

  describe('awardBadge', () => {
    it('should award badge successfully', async () => {
      const mockBadge = { user_id: userId, badge_id: badgeId, awarded_at: new Date().toISOString() };
      when(mockSupabase.from('user_badges').insert(anything()).select().single())
        .thenResolve({ data: mockBadge, error: null });

      const result = await BadgeService.awardBadge(userId, badgeId);
      expect(result.userId).toBe(userId);
      expect(result.badgeId).toBe(badgeId);
    });

    it('should throw error when badge award fails', async () => {
      const mockError: PostgrestError = { 
        message: 'DB error', 
        details: '', 
        hint: '', 
        code: '500',
        name: 'PostgrestError'
      };
      when(mockSupabase.from('user_badges').insert(anything()).select().single())
        .thenResolve({ data: null, error: mockError });

      await expect(BadgeService.awardBadge(userId, badgeId)).rejects.toThrow('DB error');
    });
  });

  describe('getUserBadges', () => {
    it('should return user badges', async () => {
      const mockBadges = [{ badges: { id: badgeId, name: 'Test Badge' } }];
      when(mockSupabase.from('user_badges').select('badges(*)').eq(anything(), anything()))
        .thenResolve({ data: mockBadges, error: null });

      const result = await BadgeService.getUserBadges(userId);
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(badgeId);
    });

    it('should return empty array on error', async () => {
      const mockError: PostgrestError = { 
        message: 'DB error', 
        details: '', 
        hint: '', 
        code: '500',
        name: 'PostgrestError'
      };
      when(mockSupabase.from('user_badges').select('badges(*)').eq(anything(), anything()))
        .thenResolve({ data: null, error: mockError });

      const result = await BadgeService.getUserBadges(userId);
      expect(result.length).toBe(0);
    });
  });

  describe('hasBadge', () => {
    it('should return true if user has badge', async () => {
      when(mockSupabase.from('user_badges').select('*').eq(anything(), anything()).eq(anything(), anything()).single())
        .thenResolve({ data: {}, error: null });

      const result = await BadgeService.hasBadge(userId, badgeId);
      expect(result).toBe(true);
    });

    it('should return false if user does not have badge', async () => {
      const mockError: PostgrestError = { 
        message: 'Not found', 
        details: '', 
        hint: '', 
        code: '404',
        name: 'PostgrestError'
      };
      when(mockSupabase.from('user_badges').select('*').eq(anything(), anything()).eq(anything(), anything()).single())
        .thenResolve({ data: null, error: mockError });

      const result = await BadgeService.hasBadge(userId, badgeId);
      expect(result).toBe(false);
    });
  });
});