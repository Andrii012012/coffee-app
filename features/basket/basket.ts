import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeStatus } from "../types";
import { IGoods } from "../goods/type";
import { TSizeCoffee } from "../../interface/sizeCoffee";

export interface IGoodsBasket extends IGoods {
  sizeCoffee: TSizeCoffee;
  selected: Boolean;
}

export interface IInitialStateBasket {
  status: TypeStatus;
  error: null | string;
  goods: IGoodsBasket[];
}

const initialState: IInitialStateBasket = {
  status: "idel",
  error: null,
  goods: [],
};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addGoods(state: IInitialStateBasket, action: PayloadAction<IGoodsBasket>) {
      state.goods.push(action.payload);
    },
    changeSelected(
      state: IInitialStateBasket,
      action: PayloadAction<{ index: number; selected: boolean }>
    ) {
      state.goods[action.payload.index].selected = action.payload.selected;
    },
  },
});

export const basketReducer = basket.reducer;
export const { addGoods, changeSelected } = basket.actions;
