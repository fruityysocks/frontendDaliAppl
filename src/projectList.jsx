import React, { useEffect } from 'react';
import useStore from './store/index';
import ProjectCard from './projectCard';

export default function ProjectList() {
  const projects = useStore((s) => s.projectSlice.all);
  const fetchPosts = useStore((s) => s.projectSlice.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="projectList">
      <h1>All Projects</h1>
      <div className="projectListItem">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
