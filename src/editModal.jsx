import React, { useState } from 'react';
import useStore from './store/index';

export default function EditModal({ project, onClose, onSave }) {
  const updatePost = useStore((s) => s.projectSlice.updatePost);

  const [formData, setFormData] = useState({
    id: project.id,
    title: project.title || '',
    content: project.content || '',
    tags: typeof project.tags === 'string' ? project.tags : (project.tags || []).join(', '),
    coverUrl: project.coverUrl || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost({
        ...formData,
      });
      onClose();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div className="editModal">
      <div className="editModalBackground">
        <form onSubmit={handleSubmit}>
          <h2>Edit Project</h2>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
          />
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
          />
          <input
            name="coverUrl"
            value={formData.coverUrl}
            onChange={handleChange}
            placeholder="Cover Image URL"
          />
          <div>
            <button type="submit" className="submit" onClick={handleSubmit}>Save</button>
            <button onClick={onClose} className="deleteButton" type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
