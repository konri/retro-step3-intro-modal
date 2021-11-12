import { configureStore } from '@reduxjs/toolkit';
import retroWorkspaceReducer, { RetroWorkspaceSliceState } from './retroWorkspace.slice';

export interface RootState {
  retroWorkspace: RetroWorkspaceSliceState;
}

export default configureStore<RootState>({
  reducer: {
    retroWorkspace: retroWorkspaceReducer,
  },
});
