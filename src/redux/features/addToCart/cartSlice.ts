import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number | string; // Changed to allow string IDs
  thumbnail: string;
  name: string;
  color?: string;
  size?: string;
  quantity: number;
  price: number;
  discountPrice: number;
  shopName: string;
  shippingFee?: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: item.quantity || 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart(state, action: PayloadAction<string | number>) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
