import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { charactersSlice } from "./slices/characters";
import { watchList } from "./slices/watchList";
import { episodesSlice } from "./slices/episodes";
import { locationsSlice } from "./slices/locations";

const reducer = combineReducers({
  characters: charactersSlice.reducer,
  watchList: watchList.reducer,
  episodes: episodesSlice.reducer,
  locations: locationsSlice.reducer,
});

export const store = configureStore({ reducer, devTools: true });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
