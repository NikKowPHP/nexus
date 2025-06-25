// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Create Badge Component
import React from 'react';
import styles from './Badge.module.css';
import { BadgeType, UserProgress } from '../lib/badgeTypes';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  text?: string;
  icon?: string;
  variant?: BadgeVariant;
  badgeType?: BadgeType;
  progress?: UserProgress;
}

const Badge: React.FC<BadgeProps> = ({
  text = '',
  icon,
  variant = 'primary',
  badgeType,
  progress
}) => {
  if (badgeType) {
    // ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Implement badge display component
    const isUnlocked = progress ? badgeType.unlockCondition(progress) : false;
    return (
      <div className={`${styles.achievementBadge} ${!isUnlocked ? styles.locked : ''}`}>
        <img
          src={badgeType.imageUrl}
          alt={badgeType.name}
          className={styles.badgeImage}
        />
        <div className={styles.badgeInfo}>
          <h4 className={styles.badgeName}>{badgeType.name}</h4>
          <p className={styles.badgeDescription}>{badgeType.description}</p>
          {!isUnlocked && <span className={styles.lockedLabel}>Locked</span>}
        </div>
      </div>
    );
    // ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END
  }

  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
    </span>
  );
};
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END

export default Badge;