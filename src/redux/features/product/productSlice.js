import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApis } from "../../../apis/product";
import { message } from "antd";

const initialState = {
  products: [],
  isLoading: false,
};

export const fetchAllProductAct = createAsyncThunk(
  "product/fetchAllProductAct",
  async (payload, thunkApi) => {
    try {
      const data = await ProductApis.getAllProduct();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductAct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProductAct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllProductAct.rejected, (state, action) => {
      message.error("Had error");
    });
  },
});

export const productReducer = productSlice.reducer;
