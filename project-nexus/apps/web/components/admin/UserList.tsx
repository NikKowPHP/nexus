import React, { useState } from 'react';
import styles from './UserList.module.css';

const UserList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Users will be listed here */}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;