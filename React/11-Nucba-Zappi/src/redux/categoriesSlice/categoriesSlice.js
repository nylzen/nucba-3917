// 1. estado inicial
// 2. slice (name, initialState, reducers)
// 3 . export actions y el reducer

import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
  categories: categories,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => state,
  }
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
