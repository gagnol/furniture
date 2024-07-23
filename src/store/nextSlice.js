import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: [],
  colorPiked:"",
  
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
    
      if (existingProduct) {
        // Check if the increase is allowed based on countInStock
        if (existingProduct.quantity < existingProduct.countInStock) {
          existingProduct.quantity++;
        } else {
          // Optionally, you can show a message or dispatch an action to handle the case
          toast.error('Cannot increase quantity, out of stock', { duration: 4000, position: "top-center", });
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    resetFavorite: (state) => {
      state.favoriteData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addCountry: (state, action) => {
      state.countryData = action.payload;
    },
    selectedColor: (state, action) => {
      state.colorPiked = action.payload;
    },
    selectedSize: (state, action) => {
      state.sizePiked = action.payload;
    },
    resetPickedValues: (state) => {
      state.colorPiked = "";
      state.sizePiked = "";
    },
  },
});

export const {
  addCart,
  addFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  resetFavorite,
  addUser,
  removeUser,
  setAllProducts,
  addCountry,
 selectedColor,
 selectedSize,
 resetPickedValues
} = nextSlice.actions;

export default nextSlice.reducer;
