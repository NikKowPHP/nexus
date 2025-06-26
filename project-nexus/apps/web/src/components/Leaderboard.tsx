import React, { useEffect, useState } from 'react';
import styles from './Leaderboard.module.css';

interface LeaderboardEntry {
  id: string;
  name: string;
  xp: number;
  level: number;
  streak: number;
}

interface LeaderboardFilters {
  timePeriod: 'weekly' | 'monthly' | 'all-time';
  minLevel: number;
  maxLevel: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  filters: LeaderboardFilters;
  onFiltersChange: (filters: LeaderboardFilters) => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ filters, onFiltersChange }) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          timePeriod: filters.timePeriod,
          minLevel: filters.minLevel.toString(),
          maxLevel: filters.maxLevel.toString()
        });
        
        const response = await fetch(`/api/leaderboard?${params}`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        setEntries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, [filters]);
  return (
    <div className={styles.leaderboard}>
      <h2>Leaderboard</h2>
      
      {error && (
        <div className={styles.error}>
          Error loading leaderboard: {error}
        </div>
      )}

      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label>Time Period:</label>
              <select
                value={filters.timePeriod}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  timePeriod: e.target.value as 'weekly' | 'monthly' | 'all-time'
                })}
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="all-time">All Time</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label>Level Range:</label>
              <input
                type="number"
                value={filters.minLevel}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  minLevel: parseInt(e.target.value)
                })}
                min="1"
                className={styles.levelInput}
              />
              <span>to</span>
              <input
                type="number"
                value={filters.maxLevel}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  maxLevel: parseInt(e.target.value)
                })}
                min="1"
                className={styles.levelInput}
              />
            </div>
          </div>

          {entries.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>XP</th>
                  <th>Level</th>
                  <th>Streak</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={entry.id}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.xp}</td>
                    <td>{entry.level}</td>
                    <td>{entry.streak} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No leaderboard data available</div>
          )}
        </>
      )}
    </div>
  );
};

export default Leaderboard;