import React, { useState } from 'react';
import useStore from './store/index';

export default function AddProject() {
  const createPost = useStore((s) => s.projectSlice.createPost);
  const [form, setForm] = useState({
    title: '',
    content: '',
    coverUrl: '',
    tags: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      ...form,
    };
    try {
      await createPost(newProject);
      setForm({
        title: '',
        content: '',
        coverUrl: '',
        tags: '',
      });
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div className="addProject">
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmit} className="addProjectForm">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="coverUrl"
          value={form.coverUrl}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          rows="4"
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
        />
        <button type="submit" className="submit">Add Project</button>
      </form>
    </div>
  );
}
