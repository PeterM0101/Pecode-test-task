import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk<
  { data: any; count: number },
  string,
  { rejectValue: string }
>("fetchData", async function (url: string, { rejectWithValue }) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        return rejectWithValue("List is empty");
      } else {
        return rejectWithValue("Server Error");
      }
    }
    const data = await response.json();
    return { data: data.results, count: data.info.count };
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
