import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
    filterCategory: (state, action) => {
      state.categories.filter((category) => category === action.payload);
    },
  },

});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
