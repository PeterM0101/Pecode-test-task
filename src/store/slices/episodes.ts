import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";
import { EpisodeSchema } from "../../types/episodes";
import { EPISODES_URL } from "../../common/urls";
import { newURL } from "../../helpers/newUrl";

export interface EpisodesState {
  episodes: EpisodeSchema[];
  isLoading: boolean;
  error: null | string;
  count: number;
  currentURL: null | string;
  currentPage: number;
  filterByName: { [key: string]: string };
}

const initialState: EpisodesState = {
  episodes: [],
  isLoading: false,
  error: null,
  count: 0,
  currentURL: EPISODES_URL,
  currentPage: 1,
  filterByName: {},
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    changeCurrentURL: (state: EpisodesState, action: PayloadAction<string>) => {
      state.currentURL = action.payload;
    },
    setCurrentPage: (state: EpisodesState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.currentURL = newURL(
        "episode",
        state.currentPage,
        state.filterByName
      );
    },
    setFilter: (state: EpisodesState, action: PayloadAction<string>) => {
      state.filterByName = { name: action.payload };
      state.currentPage = 1;
      state.currentURL = newURL("episode", 1, state.filterByName);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.episodes = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.episodes = action.payload.data;
        state.count = action.payload.count;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload || "";
        state.isLoading = false;
        state.count = 0;
      });
  },
});

export type EpisodesActionsType = typeof episodesSlice.actions;
