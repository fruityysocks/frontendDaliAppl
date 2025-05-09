// store.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import {
  getProjects,
  postProject,
  updateProject,
  deleteProject,
  getProject,
} from '../services/projectAPI';

const useStore = create(devtools(immer((set) => ({
  projectSlice: {
    all: [],
    selected: null,

    fetchPosts: async () => {
      const data = await getProjects();
      set((draft) => {
        draft.projectSlice.all = data;
      }, false, 'posts/fetch');
    },

    fetchPostById: async (id) => {
      const data = await getProject({ id });
      set((draft) => {
        draft.projectSlice.selected = data;
      }, false, 'posts/fetchById');
    },

    createPost: async (newPost) => {
      const created = await postProject(newPost);
      set((draft) => {
        draft.projectSlice.all.push(created);
      }, false, 'posts/create');
    },

    updatePost: async (updatedPost) => {
      const updated = await updateProject(updatedPost);
      set((draft) => {
        const index = draft.projectSlice.all.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          draft.projectSlice.all[index] = updated;
        }
        if (draft.projectSlice.selected?.id === updated.id) {
          draft.projectSlice.selected = updated;
        }
      }, false, 'posts/update');
    },

    deletePost: async (id) => {
      await deleteProject({ id });
      set((draft) => {
        draft.postSlice.all = draft.postSlice.all.filter((p) => p.id !== id);
      }, false, 'posts/delete');
    },
  },
}))));

export default useStore;
