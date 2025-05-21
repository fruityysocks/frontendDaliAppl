import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';
import { FaUsers } from 'react-icons/fa';
import { GiNightSleep } from 'react-icons/gi';
import { TiUserAdd } from 'react-icons/ti';

function NavBar(props) {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink to="/naps">
              <GiNightSleep />
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <FaUsers />
            </NavLink>
          </li>

          <li>
            <NavLink to="/register">
              <TiUserAdd />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
