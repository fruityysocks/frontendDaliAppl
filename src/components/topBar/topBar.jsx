import React from 'react';
import { NavLink } from 'react-router-dom';
import daliLogo from '../../../assets/daliLogo.svg';
import './topBar.scss';

export default function TopBar({ openNewPostModal }) {
  return (
    <div className="topBar">
      <nav className="topBarNav">
        <NavLink to="/" className="logo">
          <img src={daliLogo} alt="DALI logo" />
        </NavLink>
      </nav>
    </div>
  );
}
