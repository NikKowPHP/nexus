import { mock, when, instance, verify, anything } from 'ts-mockito';
import { supabase } from '@/lib/supabaseClient';
import { XpService } from '@/services/xpService';
import { PostgrestError } from '@supabase/supabase-js';

describe('XpService', () => {
  const mockSupabase = mock(supabase);
  const userId = 'test-user-123';
  
  beforeEach(() => {
    // Reset mocks before each test
    mockSupabase.from = jest.fn().mockReturnThis();
  });

  describe('awardXp', () => {
    it('should award XP successfully', async () => {
      const mockData = { total_xp: 150 };
      when(mockSupabase.from('user_xp').upsert(anything(), anything()).select(anything()))
        .thenResolve({ data: [mockData], error: null });

      const result = await XpService.awardXp({
        userId,
        amount: 50,
        source: 'node_completion'
      });

      expect(result).toBe(150);
    });

    it('should throw error when XP award fails', async () => {
      const mockError: PostgrestError = { message: 'DB error', details: '', hint: '', code: '500' };
      when(mockSupabase.from('user_xp').upsert(anything(), anything()).select(anything()))
        .thenResolve({ data: null, error: mockError });

      await expect(XpService.awardXp({
        userId,
        amount: 50,
        source: 'node_completion'
      })).rejects.toThrow('DB error');
    });
  });

  describe('getUserXp', () => {
    it('should return XP for existing user', async () => {
      const mockData = { total_xp: 200 };
      when(mockSupabase.from('user_xp').select(anything()).eq(anything(), anything()).single())
        .thenResolve({ data: mockData, error: null });

      const result = await XpService.getUserXp(userId);
      expect(result).toBe(200);
    });

    it('should return 0 for new user', async () => {
      when(mockSupabase.from('user_xp').select(anything()).eq(anything(), anything()).single())
        .thenResolve({ data: null, error: { message: 'Not found', details: '', hint: '', code: '404' } });

      const result = await XpService.getUserXp(userId);
      expect(result).toBe(0);
    });
  });

  describe('calculateLevel', () => {
    it('should calculate correct levels', () => {
      expect(XpService.calculateLevel(0)).toBe(0);
      expect(XpService.calculateLevel(99)).toBe(0);
      expect(XpService.calculateLevel(100)).toBe(1);
      expect(XpService.calculateLevel(400)).toBe(2);
      expect(XpService.calculateLevel(900)).toBe(3);
    });
  });
});