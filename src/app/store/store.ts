import { configureStore } from '@reduxjs/toolkit';

export interface RootStore {
}

export default configureStore<RootStore>({
  reducer: {
  },
});
