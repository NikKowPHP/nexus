export interface NodeContent {
  id: string;
  title: string;
  content: string;
  // Additional fields will be added as needed
}

export async function fetchNodeContent(nodeId: string): Promise<NodeContent> {
  try {
    const response = await fetch(`/api/nodes/${nodeId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch node content');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching node content:', error);
    throw error;
  }
}