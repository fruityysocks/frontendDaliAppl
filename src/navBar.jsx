import React from 'react';
import { NavLink } from 'react-router';

function NavBar(props) {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li><NavLink to="/">All Projects</NavLink></li>
          <li><NavLink to="/posts/new">Create New Project</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
