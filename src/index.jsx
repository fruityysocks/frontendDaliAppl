import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';
import NavBar from './navBar';
import ProjectList from './projectList';
import AddProject from './addProject';
import ProjectDetail from './projectDetail';

function Home(props) {
  return (
    <div>
      <ProjectList />
    </div>
  );
}

function NewProject(props) {
  return (
    <div>
      <AddProject />
    </div>
  );
}

function Detail(props) {
  return (
    <div>
      <h1>Your Project</h1>
      <ProjectDetail />
    </div>
  );
}

function FallBack(props) {
  return <div> URL not found </div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<NewProject />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
