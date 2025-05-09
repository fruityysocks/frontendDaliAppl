import React from 'react';
import { Link } from 'react-router';
// import useStore from './store/index';

export default function ProjectCard({ project }) {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   projectID = project.id;
  //   try {
  //     await deletePost(projectID);
  //     setForm({
  //       title: '',
  //       content: '',
  //       coverUrl: '',
  //       tags: '',
  //     });
  //   } catch (err) {
  //     console.error('Submit error:', err);
  //   }
  // };
  return (
    <Link to={`/posts/${project.id}`}>
      <h3>x</h3>
      {project.coverUrl && <img src={project.coverUrl} alt={project.title} />}
      <div>
        <h3>{project.title}</h3>
        <div>
          {Array.isArray(project.tags)
            && project.tags.map((tag, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={i}>
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
}
