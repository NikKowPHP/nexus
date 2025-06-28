import React, { useState } from 'react';
import styles from './ContentModeration.module.css';

const NodeEditor: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    type: 'lesson',
    roadmapId: '',
    order: 0,
    status: 'DRAFT',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/nodes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save node');
      }
      
      const result = await response.json();
      console.log('Node saved:', result);
      // TODO: Add success notification and form reset
    } catch (error) {
      console.error('Error saving node:', error);
      // TODO: Add error notification
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'order' ? Number(value) : value
    }));
  };

  return (
    <div className={styles.editorContainer}>
      <h2>Node Editor</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="lesson">Lesson</option>
            <option value="quiz">Quiz</option>
            <option value="exercise">Exercise</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="roadmapId">Roadmap ID:</label>
          <input
            type="text"
            id="roadmapId"
            name="roadmapId"
            value={formData.roadmapId}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="order">Order:</label>
          <input
            type="number"
            id="order"
            name="order"
            value={formData.order}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Save Node
        </button>
      </form>
    </div>
  );
};

export default NodeEditor;