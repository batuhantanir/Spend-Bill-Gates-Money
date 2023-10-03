import { createSlice } from "@reduxjs/toolkit";

import products from "../items/product";

export const billGatesSlice = createSlice({
  name: "billGates",
  initialState: {
    items: products,
    money: 100000000000,
    card: { cardItem: [], cardTotal: 0 },
  },
  reducers: {
    buyItem: (state, action) => {
      if (state.card.cardItem.find((item) => item.id === action.payload.id)) {
        if (state.card.cardItem.find((item) => item.id === action.payload.id)) {
          state.card.cardItem.find((item) => item.id === action.payload.id)
            .quantity++;
          state.card.cardTotal += action.payload.price;
          state.money -= action.payload.price;
        }
      } else {
        state.card.cardItem = [
          ...state.card.cardItem,
          { ...action.payload, quantity: 1 },
        ];
        state.card.cardTotal += action.payload.price;
        state.money -= action.payload.price;
      }
    },
    sellItem: (state, action) => {
      if (
        state.card.cardItem.find((item) => item.id === action.payload.id) &&
        state.card.cardItem.find((item) => item.id === action.payload.id)
          .quantity > 1
      ) {
        state.card.cardItem.find((item) => item.id === action.payload.id)
          .quantity--;
        state.card.cardTotal -= action.payload.price;
        state.money += action.payload.price;
      } else {
        state.card.cardItem = state.card.cardItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.card.cardTotal -= action.payload.price;
        state.money += action.payload.price;
      }
    },
  },
  extraReducers: {},
});

export const moneySelector = (state) => state.billGates.money;
export const cardTotalSelector = (state) => state.billGates.card.cardTotal;
export const cardItemSelector = (state) => state.billGates.card.cardItem;
export const productsSelector = (state) => state.billGates.items;

export const { buyItem, sellItem } = billGatesSlice.actions;

export default billGatesSlice.reducer;
