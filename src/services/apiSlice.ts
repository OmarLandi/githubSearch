import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import endpoints from './endpoints.json';
import templateString from 'utils/templateString';

interface ApiState {
  totalCount: number;
  searchValue: string;
  limit: number;
  list: any[];
  currentPage: number;
  pagination: number;
}

const initialState: ApiState = {
  totalCount: 0,
  searchValue: '',
  limit: 50,
  list: [],
  currentPage: 1,
  pagination: 0
}

const findResults = createAsyncThunk('findResults',async (data: {indicator: string, name?: string, page?: number, limit?: number}, thunkAPI) => {
  const state: any = thunkAPI.getState();
  data.limit = initialState.limit;

  if (!data.page) {
    data.page = initialState.currentPage;
  };

  if (!data.name) {
    data.name = state.users.searchValue;
  }

  const response = await axios.get(templateString(endpoints.searchApi, data))
  return {
    data: response.data,
    name: data.name
  }
})

export const apiSlice = createSlice({
  name: 'apiSearch',
  initialState,
  reducers: {
    clearSearch: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(findResults.fulfilled, (state, action) => {
      if (action.payload) {
        state.list.push(action.payload.data.items);
        state.totalCount = action.payload.data.total_count;
        state.pagination = Math.ceil(action.payload.data.total_count / initialState.limit);
        state.searchValue = action.payload.name || '';
      }
    })
  },
})

// Action creators are generated for each case reducer function
export { findResults };
export const { clearSearch } = apiSlice.actions;
export default apiSlice.reducer;