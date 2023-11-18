// redux/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  stringValue: string;
}

const initialState: AppState = {
  stringValue: 'Hola, Redux!',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStringValue: (state, action: PayloadAction<string>) => {
      state.stringValue = action.payload;
    },
  },
});

export const { setStringValue } = appSlice.actions; // Corregir la exportación aquí
export default appSlice.reducer;
