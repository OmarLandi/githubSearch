import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import endpoints from './endpoints.json';
import templateString from 'utils/templateString';

const findUsers = createAsyncThunk('findUsers',async (data: {name: string, page?: number}, thunkAPI) => {
  if (!data.page) {
    data.page = 1;
  };
  console.log(data);
  const response = await axios.get(templateString(endpoints.users, data))
  return response.data
})

interface UsersState {
  total_count: number;
  list: any[];
}

const initialState: UsersState = {
  total_count: 0,
  list: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findUsers.fulfilled, (state, action) => {
      if (action.payload) {
        state.list = action.payload.items;
        state.total_count = action.payload.total_count;
      }
    })
  },
})

// Action creators are generated for each case reducer function
export { findUsers };
export default usersSlice.reducer