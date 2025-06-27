import { useState, useEffect } from 'react';
import { Roadmap } from '@/types/roadmap';
import { ContentService } from '@/services/contentService';

export const ContentModeration = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const loadRoadmaps = async () => {
      const data = ContentService.getAllRoadmaps();
      setRoadmaps(data);
    };
    loadRoadmaps();
  }, []);

  const handleSave = (updatedRoadmap: Roadmap) => {
    if (isCreating) {
      setRoadmaps(prev => [...prev, updatedRoadmap]);
    } else {
      setRoadmaps(prev => 
        prev.map(r => r.id === updatedRoadmap.id ? updatedRoadmap : r)
      );
    }
    setSelectedRoadmap(null);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleDelete = (roadmapId: string) => {
    if (confirm('Are you sure you want to delete this roadmap?')) {
      setRoadmaps(prev => prev.filter(r => r.id !== roadmapId));
    }
  };

  return (
    <div className="content-moderation">
      <div className="header">
        <h1>Manage Flagship Content</h1>
        <button 
          onClick={() => {
            setSelectedRoadmap({
              id: '',
              title: '',
              description: '',
              nodes: []
            });
            setIsCreating(true);
            setIsEditing(true);
          }}
        >
          Create New Roadmap
        </button>
      </div>

      <div className="roadmap-list">
        {roadmaps.map(roadmap => (
          <div key={roadmap.id} className="roadmap-item">
            <h3>{roadmap.title}</h3>
            <p>{roadmap.description}</p>
            <div className="actions">
              <button onClick={() => {
                setSelectedRoadmap(roadmap);
                setIsEditing(true);
              }}>
                Edit
              </button>
              <button 
                onClick={() => handleDelete(roadmap.id)}
                className="danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && selectedRoadmap && (
        <div className="edit-modal">
          <div className="modal-content">
            <h2>{isCreating ? 'Create' : 'Edit'} Roadmap</h2>
            <label>
              Title:
              <input
                type="text"
                value={selectedRoadmap.title}
                onChange={e => setSelectedRoadmap({
                  ...selectedRoadmap,
                  title: e.target.value
                })}
              />
            </label>
            <label>
              Description:
              <textarea
                value={selectedRoadmap.description}
                onChange={e => setSelectedRoadmap({
                  ...selectedRoadmap,
                  description: e.target.value
                })}
              />
            </label>
            <div className="modal-actions">
              <button onClick={() => handleSave(selectedRoadmap)}>
                Save
              </button>
              <button onClick={() => {
                setSelectedRoadmap(null);
                setIsEditing(false);
                setIsCreating(false);
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};