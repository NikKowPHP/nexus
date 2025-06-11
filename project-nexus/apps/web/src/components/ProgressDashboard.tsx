import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './ProgressDashboard.module.css';

interface ProgressDashboardProps {
  userId: string;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ userId }) => {
  const [progress, setProgress] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Fetch user progress from the backend
        const response = await fetch(`/api/progress?userId=${userId}`);
        const data = await response.json();

        // Update progress and streak
        setProgress(data.progressPercentage);
        setStreak(data.streak.currentStreak);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, [userId]);

  return (
    <div className={styles['progress-dashboard']}>
      <h2>Your Progress</h2>
      <div className={styles['progress-circle']}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            rotation: 0.5,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 199, ${progress / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <div className={styles['streak-info']}>
        <h3>Current Streak</h3>
        <p>{streak} days</p>
      </div>
    </div>
  );
};

export default ProgressDashboard;