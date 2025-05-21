import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import './userCard.scss';

export default function UserCard(notuser) {
  const userId = notuser.user.id;
  const user = useStore((state) => state.userSlice.all.find((u) => u.id === userId));

  const { fetchUserById } = useStore((state) => state.userSlice);

  useEffect(() => {
    if (!user) {
      fetchUserById(userId);
    }
  }, [userId, user, fetchUserById]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="userCard">
      <div className="userPicture">
        <img
          src={user.profilePic}
          alt={`${user.name}'s profile`}
          className="picture"
          onError={(e) => {
            e.target.onError = null;
            e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
          }}
        />
      </div>
      <div className="userInfo">
        <h3>{user.name}</h3>
        <p>{user.year}</p>
        <p>{user.home}</p>
        {user.quote && <p>{user.quote}</p>}
      </div>

    </div>
  );
}
