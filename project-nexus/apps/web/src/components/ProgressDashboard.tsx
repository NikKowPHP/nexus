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
  const [xp, setXp] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [levelProgress, setLevelProgress] = useState<number>(0);
  const [nextLevelXp, setNextLevelXp] = useState<number>(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Fetch user progress from the backend
        const response = await fetch(`/api/progress?userId=${userId}`);
        const data = await response.json();

        // Update progress, streak, XP and level data
        setProgress(data.progressPercentage);
        setStreak(data.streak);
        setXp(data.xp);
        setLevel(data.level);
        setLevelProgress(data.levelProgress);
        setNextLevelXp(data.nextLevelXp);
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
      <div className={styles['level-info']}>
        <h3>Level {level}</h3>
        <div className={styles['progress-bar']}>
          <div
            className={styles['progress-fill']}
            style={{ width: `${levelProgress}%` }}
          ></div>
          <span className={styles['progress-text']}>
            {xp} / {nextLevelXp} XP
          </span>
        </div>
      </div>
      <div className={styles['xp-info']}>
        <h3>Total Experience</h3>
        <p>{xp} XP</p>
      </div>
      <div className={styles['streak-info']}>
        <h3>Current Streak</h3>
        <p>
          {streak} day{streak !== 1 ? 's' : ''}
          {streak > 0 && streak % 7 === 0 && (
            <span className={styles['milestone-badge']}> 🔥 Milestone!</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProgressDashboard;