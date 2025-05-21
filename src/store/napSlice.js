import {
  getNaps, getNap,
  addReply,
} from '../services/projectAPI';

const createNapSlice = (set) => ({
  napSlice: {
    all: [],
    selected: null,

    fetchNaps: async () => {
      const data = await getNaps();
      console.log(data);
      set(
        (draft) => {
          draft.napSlice.all = data;
          console.log(draft.napSlice.all);
        },
        false,
        'naps/fetchNaps',
      );
    },

    fetchNapById: async (id) => {
      const data = await getNap(id);
      set(
        (draft) => {
          draft.napSlice.selected = data;
        },

        false,
        'naps/fetchNapById',
      );
    },

    addReply: async (napId, message) => {
      const data = await addReply(napId, message);
      set(
        (draft) => {
          draft.napSlice.selected = data.updatedNap;
        },

        false,
        'naps/addReply',
      );
    },
  },
});

export default createNapSlice;
