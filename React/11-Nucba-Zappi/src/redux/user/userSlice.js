import { createSlice } from "@reduxjs/toolkit";

// initialState
const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};
// slice

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    toggleMenuHidden: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
  },
});

// export actions
export const { setCurrentUser, toggleMenuHidden } = userSlice.actions;

// export reducer
export default userSlice.reducer
