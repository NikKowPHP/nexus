import React, { useEffect, useState } from 'react';
import styles from './ProgressDashboard.module.css';
import ProgressBar from './ProgressBar';
import Badge from './Badge';
import { BADGE_TYPES, UserProgress } from '../lib/badgeTypes';

interface ProgressDashboardProps {
  userId: string;
}

// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Build ProgressDashboard for overview
const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ userId }) => {
  const [progress, setProgress] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [xp, setXp] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [levelProgress, setLevelProgress] = useState<number>(0);
  const [nextLevelXp, setNextLevelXp] = useState<number>(0);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedNodes: [],
    currentStreak: 0,
    totalXP: 0
  });

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Fetch user progress from the backend
        const response = await fetch(`/api/progress?userId=${userId}`);
        const data = await response.json();

        // Update progress data
        setProgress(data.progressPercentage);
        setStreak(data.streak);
        setXp(data.xp);
        setLevel(data.level);
        setLevelProgress(data.levelProgress);
        setNextLevelXp(data.nextLevelXp);
        setUserProgress({
          completedNodes: data.completedNodes || [],
          currentStreak: data.streak || 0,
          totalXP: data.xp || 0
        });
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, [userId]);

  const unlockedBadges = Object.values(BADGE_TYPES).filter(badge =>
    badge.unlockCondition(userProgress)
  );

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Progress Overview</h2>
      
      <div className={styles.progressSection}>
        <h3>Level {level} Progress</h3>
        <ProgressBar current={xp} max={nextLevelXp} />
        <div className={styles.xpDisplay}>
          <span>{xp} XP</span>
          <span>Next level at {nextLevelXp} XP</span>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h4>Current Streak</h4>
          <p>{streak} day{streak !== 1 ? 's' : ''}</p>
        </div>
        <div className={styles.statItem}>
          <h4>Total XP</h4>
          <p>{xp}</p>
        </div>
      </div>

      {unlockedBadges.length > 0 && (
        <div className={styles.badgesSection}>
          <h3>Unlocked Achievements</h3>
          <div className={styles.badgesGrid}>
            {unlockedBadges.map(badge => (
              <Badge
                key={badge.id}
                badgeType={badge}
                progress={userProgress}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END

export default ProgressDashboard;
  );
};

export default ProgressDashboard;