import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import favoriteReducer from "./slices/favoriteSlice";
import { persistStore, persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);






