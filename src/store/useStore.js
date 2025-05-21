import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import createUserSlice from './userSlice';
import createNapSlice from './napSlice';

const useStore = create(
  devtools(
    immer((set, get) => ({
      ...createUserSlice(set, get),
      ...createNapSlice(set, get),
    })),
  ),
);

export default useStore;
