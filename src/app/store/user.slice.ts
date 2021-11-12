import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: ''
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state: UserState, action:PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { setUserName } = slice.actions;

export default slice.reducer;
