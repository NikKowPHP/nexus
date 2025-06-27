import { supabase } from '../lib/supabaseClient';
import { RoadmapNode } from '@/types/roadmap';

export const RoadmapService = {
  async fetchRoadmap(roadmapId: string): Promise<RoadmapNode[]> {
    const { data, error } = await supabase
      .from('roadmaps')
      .select('*')
      .eq('id', roadmapId)
      .single();

    if (error) throw new Error(error.message);
    return data?.nodes || [];
  },

  async fetchAllRoadmaps(): Promise<RoadmapNode[][]> {
    const { data, error } = await supabase
      .from('roadmaps')
      .select('nodes');

    if (error) throw new Error(error.message);
    return data?.map(r => r.nodes) || [];
  },

  async saveRoadmap(roadmapId: string, nodes: RoadmapNode[]): Promise<void> {
    const { error } = await supabase
      .from('roadmaps')
      .upsert({
        id: roadmapId,
        nodes,
        updated_at: new Date().toISOString()
      });

    if (error) throw new Error(error.message);
  }
};