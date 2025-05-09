import React from 'react';
import { Link } from 'react-router';
import useStore from './store/index';

export default function ProjectCard({ project }) {
  const deletePost = useStore((s) => s.projectSlice.deletePost);

  const handleClick = async (e) => {
    e.preventDefault();
    const { id } = project;
    try {
      await deletePost(id);
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const tags = typeof project.tags === 'string'
    ? project.tags.split(',').map((t) => t.trim())
    : project.tags || [];

  return (
    <Link to={`/posts/${project.id}`} className="projectCard">
      {project.coverUrl && <img src={project.coverUrl} alt={project.title} />}
      <div className="projectCardContent">
        <h3>{project.title}</h3>
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
      <button type="button" onClick={handleClick} className="deleteButton">
        delete
      </button>
    </Link>
  );
}
