import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";
import { LOCATIONS_URL } from "../../common/urls";
import { newURL } from "../../helpers/newUrl";
import { LocationFiltersType, LocationSchema } from "../../types/locations";
import { EpisodesActionsType } from "./episodes";

export interface LocationsState {
  locations: LocationSchema[];
  isLoading: boolean;
  error: null | string;
  count: number;
  currentURL: null | string;
  currentPage: number;
  filtersState: LocationFiltersType;
}

const initialState: LocationsState = {
  locations: [],
  isLoading: false,
  error: null,
  count: 0,
  currentURL: LOCATIONS_URL,
  currentPage: 1,
  filtersState: {},
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    changeCurrentURL: (
      state: LocationsState,
      action: PayloadAction<string>
    ) => {
      state.currentURL = action.payload;
    },
    setCurrentPage: (state: LocationsState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.currentURL = newURL(
        "location",
        state.currentPage,
        state.filtersState
      );
    },
    setFilters: (
      state: LocationsState,
      action: PayloadAction<LocationFiltersType>
    ) => {
      state.filtersState = action.payload;
      state.currentURL = newURL("location", 1, state.filtersState);
    },
    resetFilters: (state: LocationsState) => {
      state.filtersState = {};
      state.currentPage = 1;
      state.currentURL = newURL("location", 1, state.filtersState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.locations = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.locations = action.payload.data;
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

export const { setFilters, resetFilters } = locationsSlice.actions;
type LocationsActionsType = typeof locationsSlice.actions;
export type UnionLocationsNEpisodesType =
  | LocationsActionsType
  | EpisodesActionsType;
