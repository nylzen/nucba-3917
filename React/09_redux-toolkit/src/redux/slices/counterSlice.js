import { createSlice } from "@reduxjs/toolkit";

// Crear nuestro initialState
// Crear nuestro slice con sus logicas
// Exportar esas actions
// Exportar el reducer

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    increment_5: (state) => {
      return { ...state, count: state.count + 5 };
    },
    multiply: (state) => {
      return { ...state, count: state.count * 2 };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    decrement_5: (state) => {
      return { ...state, count: state.count - 5 };
    },
    divide: (state) => {
      return { ...state, count: state.count / 2 };
    },
    reset: () => {
      // console.log(action.payload)

      return initialState;
    },
  },
});

export const {
  increment,
  increment_5,
  multiply,
  decrement,
  decrement_5,
  divide,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
