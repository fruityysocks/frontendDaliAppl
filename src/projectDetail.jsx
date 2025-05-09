import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useStore from './store/index';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useStore((s) => s.projectSlice.selected);
  const fetchPostById = useStore((s) => s.projectSlice.fetchPostById);

  useEffect(() => {
    fetchPostById(id);
  }, [id]);

  if (!project) return <p>Loading...</p>;

  const tags = typeof project.tags === 'string'
    ? project.tags.split(',').map((t) => t.trim())
    : project.tags || [];

  return (
    <div className="details">
      <img src={project.coverUrl} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.content}</p>
      <div>
        <span> tags: </span>
        {tags.map((tag, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i}>
            {tag}{i < tags.length - 1 ? ', ' : ' '}
          </span>
        ))}
      </div>
    </div>
  );
}
