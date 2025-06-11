import React, { useState, useEffect } from 'react';
import styles from './RoadmapList.module.css';

interface Roadmap {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  parentId?: string;
}

const RoadmapList: React.FC = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch('/api/admin/roadmaps');
        if (!response.ok) throw new Error('Failed to fetch roadmaps');
        const data = await response.json();
        setRoadmaps(data);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <div className={styles.roadmapList}>
      <h2>Roadmap Management</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roadmaps.map((roadmap: Roadmap) => (
            <tr key={roadmap.id}>
              <td>{roadmap.title}</td>
              <td>{roadmap.description || 'No description'}</td>
              <td>{new Date(roadmap.createdAt).toLocaleDateString()}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoadmapList;