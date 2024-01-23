import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL ='https://65addcf51dfbae409a737e1c.mockapi.io/adverts/';

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (page, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: 12,
      });
      const { data } = await axios.get(`adverts?${params}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
