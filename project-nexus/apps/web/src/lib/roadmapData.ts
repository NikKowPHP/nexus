export interface RoadmapData {
  id: string;
  title: string;
  // Additional fields will be added as needed
}

export async function fetchRoadmapData(roadmapId: string): Promise<RoadmapData> {
  try {
    const response = await fetch(`/api/roadmaps/${roadmapId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch roadmap data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching roadmap data:', error);
    throw error;
  }
}