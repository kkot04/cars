import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";

const initialState = {
  items: [],
  isLoading: false,
  favoriteList: [],
  isLoadMore: true,
  firstLoad: true,
  clickCardId: "",

  select: "",
  filters: {},
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteList.push(payload);
      
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteList = state.favoriteList.filter(
        (car) => car.id !== payload
      );
    },
    isFirstLoad: (state, { payload }) => {
      state.firstLoad = payload;
    },
   
    changeClickCardId: (state, { payload }) => {
      state.clickCardId = payload;
    },
    changeSelectFilter: (state, { payload }) => {
      if (payload.length < 12) {
        state.isLoadMore = false;
        state.select = payload;
      } else {
        state.select = payload;
      }
    },
    changeFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length < 12) {
          state.items = [...state.items, ...payload];
          state.isLoadMore = false;
        } else {
          state.items = [...state.items, ...payload];
        }
      })
      .addCase(fetchCarsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  addFavorite,
  deleteFavorite,
  isFirstLoad,
  changeClickCardId,
  changeSelectFilter,
  changeFilters,
} = carsSlice.actions;

export default carsSlice.reducer;