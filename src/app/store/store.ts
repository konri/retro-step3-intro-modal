import { configureStore } from '@reduxjs/toolkit';
import retroWorkspaceReducer, { RetroWorkspaceSliceState } from './retroWorkspace.slice';
import userReducer, { UserState } from './user.slice';

export interface RootState {
  retroWorkspace: RetroWorkspaceSliceState;
  user: UserState;

}

export default configureStore<RootState>({
  reducer: {
    user: userReducer,
    retroWorkspace: retroWorkspaceReducer,
  },
});
