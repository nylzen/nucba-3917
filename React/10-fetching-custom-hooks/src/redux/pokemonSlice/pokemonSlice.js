// 1. Estado inicial
// 2. Slice
// 3. Exportar actions y el reducer

import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../../data/initialPokemon";

const initialState = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {
    isFetching: (state) => {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    },
    success: (state, action) => {
      return {
        ...state,
        error: false,
        isLoading: false,
        data: action.payload,
      };
    },
    isError: (state) => {
      return {
        ...state,
        error: "Pokemon no encontrado, busca bien",
        isLoading: false,
        data: null,
      };
    },
  },
});

export const { isError, isFetching, success } = pokemonSlice.actions;

export default pokemonSlice.reducer;
