import React, { useState, useEffect } from 'react';
import styles from './UserList.module.css';
import { StreakService } from '@/services/streakService';
import { supabase } from '@/lib/supabase';

interface User {
  id: string;
  email: string;
  role: string;
}

const UserList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [streaks, setStreaks] = useState<Record<string, {current: number; longest: number}>>({});

  useEffect(() => {
    const fetchUsersAndStreaks = async () => {
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('id, email, role');

      if (usersError) {
        console.error('Error fetching users:', usersError);
        return;
      }

      if (usersData) {
        setUsers(usersData);
        
        // Fetch streaks for each user
        const streaksData: Record<string, {current: number; longest: number}> = {};
        for (const user of usersData) {
          try {
            const streak = await StreakService.getStreak(user.id);
            streaksData[user.id] = {
              current: streak.currentStreak,
              longest: streak.longestStreak
            };
          } catch (error) {
            console.error(`Error fetching streak for user ${user.id}:`, error);
            streaksData[user.id] = { current: 0, longest: 0 };
          }
        }
        setStreaks(streaksData);
      }
    };

    fetchUsersAndStreaks();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.userList}>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Current Streak</th>
            <th>Longest Streak</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            const userStreak = streaks[user.id] || { current: 0, longest: 0 };
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td> {/* Assuming email is used as name */}
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{userStreak.current} days</td>
                <td>{userStreak.longest} days</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;