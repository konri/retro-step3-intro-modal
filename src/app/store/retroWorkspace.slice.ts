import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RetroComment {
  text: string;
  name: string;
}

export interface RetroColumn {
  id: number;
  title: string;
  comments: Array<RetroComment>;
  color: string;
}

export type RetroWorkspaceSliceState = Array<RetroColumn>;

const firstColumnInitial: RetroColumn = {
  id: Date.now(),
  title: 'PLUS',
  comments: [],
  color: '#8bc34a'
}

const initialState: RetroWorkspaceSliceState = [firstColumnInitial]

export const slice = createSlice({
  name: 'RetroWorkspaceSlice',
  initialState,
  reducers: {
    addNewColumn: (state: RetroWorkspaceSliceState) => {
      state.push({
        id: Date.now(),
        title: 'Please input title...',
        comments: [],
        color: '#ffeb3b'
      })
    },
    addComment: (state: RetroWorkspaceSliceState, action: PayloadAction<{ id: number, comment:RetroComment }>) => {
      const { id, comment } = action.payload;
      const index = state.findIndex((column: RetroColumn) => column.id === id);
      state[index].comments.push(comment)
    },
    setColumnTitle: (state: RetroWorkspaceSliceState, action: PayloadAction<{ id: number, title: string }>) => {
      const { id, title } = action.payload;
      const index = state.findIndex((column: RetroColumn) => column.id === id);
      state[index].title = title;
    },
    setColumnColor: (state: RetroWorkspaceSliceState, action: PayloadAction<{ id: number, color: string }>) => {
      const { id, color } = action.payload;
      const index = state.findIndex((column: RetroColumn) => column.id === id);
      state[index].color = color;
    }
  }
})

export const { addNewColumn, addComment, setColumnTitle, setColumnColor } = slice.actions;

export default slice.reducer;
