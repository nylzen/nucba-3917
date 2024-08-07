import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categoriesSlice/categoriesSlice";
import productsReducer from "./productsSlice/products.slice";
import recommendedReducer from "./recommended/recommendedSlice";

const reducers = combineReducers({
  // ... recomendados / categorias / productos / carrito / user
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
