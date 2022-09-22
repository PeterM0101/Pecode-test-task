import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";
import {
  CharacterSchema,
  FilterOptions,
  SelectedFiltersState,
} from "../../types/characters";
import { newURL } from "../../helpers/newUrl";

export interface CharactersState {
  characters: CharacterSchema[];
  isLoading: boolean;
  error: null | string;
  count: number;
  currentURL: null | string;
  currentPage: number;
  filtersOptions: FilterOptions;
  filtersState: SelectedFiltersState | null;
}

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  error: null,
  count: 0,
  currentURL: null,
  currentPage: 1,
  filtersOptions: {
    genderOptions: [],
    speciesOptions: [],
    statusOptions: [],
  },
  filtersState: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    changeCurrentURL: (
      state: CharactersState,
      action: PayloadAction<string>
    ) => {
      state.currentURL = action.payload;
    },
    setCount: (state: CharactersState, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setCurrentPage: (state: CharactersState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.currentURL = newURL(
        "character",
        state.currentPage,
        state.filtersState
      );
    },
    setIsLoading: (state: CharactersState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state: CharactersState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setFilterOptions: (
      state: CharactersState,
      action: PayloadAction<FilterOptions>
    ) => {
      state.filtersOptions = action.payload;
    },
    setFilters: (
      state: CharactersState,
      action: PayloadAction<SelectedFiltersState>
    ) => {
      state.filtersState = action.payload;
      state.currentPage = 1;
      state.currentURL = newURL(
        "character",
        state.currentPage,
        state.filtersState
      );
    },
    resetFilters: (state: CharactersState) => {
      state.filtersState = null;
      state.currentPage = 1;
      state.currentURL = newURL(
        "character",
        state.currentPage,
        state.filtersState
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.characters = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.characters = action.payload.data;
        state.count = action.payload.count;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload || "";
        state.isLoading = false;
      });
  },
});

export const {
  changeCurrentURL,
  setCount,
  setCurrentPage,
  resetFilters,
  setFilters,
  setFilterOptions,
  setError,
  setIsLoading,
} = charactersSlice.actions;
