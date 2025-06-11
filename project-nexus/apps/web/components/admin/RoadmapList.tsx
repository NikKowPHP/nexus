import React from 'react';
import styles from './RoadmapList.module.css';

const RoadmapList: React.FC = () => {
  return (
    <div className={styles.roadmapList}>
      <h2>Roadmap Management</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Roadmap data will be listed here */}
        </tbody>
      </table>
    </div>
  );
};

export default RoadmapList;