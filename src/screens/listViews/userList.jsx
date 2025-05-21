import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';
import UserCard from '../../components/userCard/userCard';
import './listStyle.scss';

export default function UserList() {
  const users = useStore((state) => state.userSlice.all);
  const fetchUsers = useStore((state) => state.userSlice.fetchUsers);
  const [searchTerm, setSearchTerm] = useState('all');
  const [filterTag, setFilterTag] = useState('all');
  const filteredUsers = filterTag === 'all'
    ? users
    : users.filter((user) => user.name.toLowerCase().includes(filterTag));

  useEffect(() => {
    if (searchTerm === '') {
      setFilterTag('all');
    } else {
      setFilterTag(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const reversedUsers = [...filteredUsers].reverse();

  return (
    <div className="users">
      <input
        className="filter"
        type="text"
        placeholder={searchTerm === 'all' ? 'Search for users' : ''}
        value={searchTerm === 'all' ? '' : searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="userList">
        {reversedUsers.length === 0 ? (
          <p>loading...</p>
        ) : (reversedUsers.map((user) => (
          <Link to={`${user.id}`} key={user.id}>
            <UserCard user={user} />
          </Link>
        )))}
      </div>
    </div>
  );
}
