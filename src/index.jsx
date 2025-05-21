import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router';
import NavBar from './components/navBar/navBar';
import UserList from './screens/listViews/userList';
import Profile from './screens/profile/profile';
import Register from './screens/register/register';
import LandingPage from './screens/landingPage/landingPage';
import NapsList from './screens/listViews/napsList';
import NapDetail from './screens/detailedViews/napDetailed';
import TopBar from './components/topBar/topBar';
import SwipeWrapper from './components/swipeWrapper';

function FallBack(props) {
  return <div> URL not found </div>;
}

function App(props) {
  const [hasVisited, setHasVisited] = useState(false);
  localStorage.setItem('hasVisited', false);
  const location = useLocation();

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (!visited) {
      localStorage.setItem('hasVisited', 'false');
      setHasVisited(false);
    }
  }, []);

  console.log(hasVisited);
  const hideNavBar = location.pathname === '/' && !hasVisited;

  return (
    <div className="app">
      {!hideNavBar && <TopBar />}
      <div className="notNavBar">
        <Routes>
          {/* {!hasVisited && <Route path="/" element={<LandingPage />} />} */}
          <Route
            path="/"
            element={
      hasVisited ? (<Navigate to="/naps" replace />) : (<LandingPage />)
    }
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/naps" element={<NapsList />} />
          <Route path="/naps/:napId" element={<NapDetail />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
      {!hideNavBar && <NavBar />}
    </div>
  );
}

const root = createRoot(document.getElementById('main'));
console.log(localStorage.getItem('hasVisited'));
root.render(
  <BrowserRouter>
    <SwipeWrapper>
      <App />
    </SwipeWrapper>
  </BrowserRouter>,
);
