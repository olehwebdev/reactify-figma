import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ReactifyFigmaState {
  imageData: Uint8Array;
}

const initialState = {
  imageData: undefined,
} satisfies ReactifyFigmaState as ReactifyFigmaState;

export const reactifyFigmaSlice = createSlice({
  name: 'reactify',
  initialState,
  reducers: {
    updateSelectedImage(state, action: PayloadAction<Uint8Array>) {
      state.imageData = action.payload
    },
  }
});

export const { updateSelectedImage } = reactifyFigmaSlice.actions;
