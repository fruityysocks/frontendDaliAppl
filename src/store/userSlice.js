import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../services/projectAPI';

const createUserSlice = (set) => ({
  userSlice: {
    all: [],
    selected: null,
    userPosts: [],

    fetchUsers: async () => {
      const data = await getUsers();
      console.log(data);
      set(
        (draft) => {
          draft.userSlice.all = data;
          console.log(draft.userSlice.all);
        },
        false,
        'users/fetchUsers',
      );
    },

    fetchUserById: async (id) => {
      const data = await getUser(id);
      set(
        (draft) => {
          draft.userSlice.selected = data;
        },

        false,
        'users/fetchUserById',
      );
    },

    createUser: async (user) => {
      const newUser = await createUser(user);
      set(
        (draft) => {
          draft.userSlice.all.push(newUser);
        },

        false,
        'users/fetchUserById/create',
      );
    },

    updateUser: async (user) => {
      const updated = await updateUser(user);
      set(
        (draft) => {
          const index = draft.userSlice.all.findIndex(
            (u) => u._id === updated._id,
          );
          if (index !== -1) draft.userSlice.all[index] = updated;
          if (draft.userSlice.selected?._id === updated._id) draft.userSlice.selected = updated;
        },

        false,
        'users/fetchUserById/update',
      );
    },

    deleteUser: async (id) => {
      await deleteUser({ id });
      set(
        (draft) => {
          draft.userSlice.all = draft.userSlice.all.filter((u) => u._id !== id);
        },
        false,
        'users/fetchUserById/delete',
      );
    },
  },
});

export default createUserSlice;
