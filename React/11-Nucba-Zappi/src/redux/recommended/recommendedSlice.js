import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/Products";
import { pickRandoms } from "../../utils/pickRandom";

const INITIAL_STATE = {
  // recommended: Array(4)
  //   .fill(0)
  //   .reduce((acc) => {
  //     const IDs = acc.map((value) => value.id);
  //     let newRecommended;
  //     do {
  //       newRecommended = {
  //         ...products[Math.floor(Math.random() * products.length)],
  //       };
  //     } while (IDs.includes(newRecommended.id));

  //     return [...acc, newRecommended];
  //   }, []),
  recommended: pickRandoms(products, 4),
};


export const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: state => state
  }
})

export const { randomRecommended } = recommendedSlice.actions

export default recommendedSlice.reducer
