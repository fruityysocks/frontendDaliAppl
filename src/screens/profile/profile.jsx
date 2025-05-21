import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useStore from '../../store/useStore';
import './profile.scss';

export default function Profile() {
  const { userId } = useParams();
  console.log(userId);

  const deleteUser = useStore((state) => state.userSlice.deleteUser);
  const fetchUserById = useStore((state) => state.userSlice.fetchUserById);
  // const updateUser = useStore((state) => state.userSlice.updateUser);

  const user = useStore((state) => state.userSlice.selected);
  console.log(userId);
  console.log(user);

  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchUserById(userId);
    }
  }, [userId, user, fetchUserById]);

  if (!user) return <div>Loading...</div>;

  const handleDelete = async (e) => {
    e.preventDefault();
    deleteUser(userId);
  };

  return (
    <div className="profilePage">
      <div className="profileHeader">
        <img
          src={user.profilePic}
          alt={`${user.name}'s profile`}
          className="profilePicture"
          onError={(e) => {
            e.target.onError = null;
            e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
          }}
        />
        <div className="profileName">
          <h2>{user.name}</h2>
          <p>{user.year}</p>
          <p>{user.home}</p>
        </div>
      </div>

      <div className="profileSection">
        <h3>About</h3>
        {user.birthday && (
          <p>
            <span>Birthday:</span> {user.birthday}
          </p>
        )}
        {user.major && (
          <p>
            <span>Major:</span> {user.major}
          </p>
        )}
        {user.minor && (
          <p>
            <span>Minor:</span> {user.minor}
          </p>
        )}
      </div>

      <div className="profileSection">
        <h3>Roles</h3>
        <div className="roles">
          {user.dev && <span>Developer</span>}
          {user.des && <span>Designer</span>}
          {user.pm && <span>Project Manager</span>}
          {user.core && <span>Core Member</span>}
          {user.mentor && <span>Mentor</span>}
        </div>
      </div>

      <div className="profileSection">
        <h3>Favorites</h3>
        {user.quote && (
          <p>
            <span>Quote:</span> {user.quote}
          </p>
        )}
        {user.favoriteThingOne && (
          <p>
            <span>Favorite Thing 1:</span> {user.favoriteThingOne}
          </p>
        )}
        {user.favoriteThingTwo && (
          <p>
            <span>Favorite Thing 2:</span> {user.favoriteThingTwo}
          </p>
        )}
        {user.favoriteThingThree && (
          <p>
            <span>Favorite Thing 3:</span> {user.favoriteThingThree}
          </p>
        )}
        {user.favoriteDartmouthTradition && (
          <p>
            <span>Dartmouth Tradition:</span> {user.favoriteDartmouthTradition}
          </p>
        )}
        {user.funFact && (
          <p>
            <span>Fun Fact:</span> {user.funFact}
          </p>
        )}
      </div>

      <div className="buttonRow">
        <button type="button" onClick={handleDelete} className="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
}
