// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Create ProgressBar component with animations
import React, { useEffect, useRef, useState } from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, max }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newWidth = (current / max) * 100;
    setWidth(newWidth);
  }, [current, max]);

  return (
    <div className={styles.progressContainer}>
      <div 
        ref={progressRef}
        className={styles.progressBar}
        style={{ width: `${width}%` }}
      >
        <span className={styles.progressText}>
          {Math.round(width)}%
        </span>
      </div>
    </div>
  );
};
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END

export default ProgressBar;