import { configureStore, Reducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { IInitialStateGoods, goodsReducer } from "../features/goods/goods";
import { basketReducer, IInitialStateBasket } from "../features/basket/basket";

interface IReducer {
  goodsReducer: Reducer<IInitialStateGoods>;
  basketReducer: Reducer<IInitialStateBasket>;
}

const reducer: IReducer = {
  goodsReducer: goodsReducer,
  basketReducer: basketReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;
