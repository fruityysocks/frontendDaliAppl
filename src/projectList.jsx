import React, { useEffect, useState } from 'react';
import useStore from './store/index';
import ProjectCard from './projectCard';

export default function ProjectList() {
  const projects = useStore((s) => s.projectSlice.all);
  const fetchPosts = useStore((s) => s.projectSlice.fetchPosts);
  const [filterTag, setFilterTag] = useState('all');
  const [searchTerm, setSearchTerm] = useState('all');

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    setFilterTag(searchTerm);
  }, [searchTerm]);

  const filteredProjects = filterTag === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filterTag));

  return (
    <div className="projectList">
      <div className="projectListHeader">
        <h1>Projects</h1>
        <input
          className="filter"
          type="text"
          placeholder={searchTerm === 'all' ? 'Search by title or tag' : ''}
          value={searchTerm === 'all' ? '' : searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="projectListItem">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
