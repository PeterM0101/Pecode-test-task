import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WatchListSchema, ToggleWatchedAction } from "../../types/watchList";

export interface WatchListState {
  episodes: WatchListSchema[];
}

const initialState: WatchListState = {
  episodes: [],
};

export const watchList = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addEpisode(state: WatchListState, action: PayloadAction<WatchListSchema>) {
      state.episodes.push(action.payload);
    },
    toggleWatched: (
      state: WatchListState,
      action: PayloadAction<ToggleWatchedAction>
    ) => {
      state.episodes = state.episodes.map((episode) => {
        if (episode.id === action.payload.id) {
          return { ...episode, watched: action.payload.watched };
        }
        return episode;
      });
    },
    deleteEpisode: (state: WatchListState, action: PayloadAction<string>) => {
      state.episodes = state.episodes.filter(
        (episode) => episode.id !== action.payload
      );
    },
    loadWatchList: (
      state: WatchListState,
      action: PayloadAction<WatchListSchema[]>
    ) => {
      state.episodes = action.payload;
    },
  },
});

export const { addEpisode, toggleWatched, deleteEpisode, loadWatchList } =
  watchList.actions;
