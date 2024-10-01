import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "./type";
import { TTypeCoffee } from "../../constants/typesCoffee";
import { TypeStatus } from "../types";

export interface IInitialStateGoods {
  status: TypeStatus;
  error: null | string;
  goods: IGoods[];
  filters: {
    seach: string;
    typeCoffee: TTypeCoffee;
  };
}

const initialState: IInitialStateGoods = {
  status: "idel",
  error: null,
  filters: {
    seach: "",
    typeCoffee: "All coffee",
  },
  goods: [
    {
      id: "0",
      rating: 4.8,
      price: 4.53,
      title: "Caffè macchiato",
      text: "Deep Foam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqXh704CUAWzBbr66bvLsB6lPEALdiwJKYQ&s",
      liked: false,
    },
    {
      id: "1",
      rating: 3.8,
      price: 3.53,
      title: "Flat white",
      text: "Expresso",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqXh704CUAWzBbr66bvLsB6lPEALdiwJKYQ&s",
      liked: false,
    },
    {
      id: "2",
      rating: 4.8,
      price: 4.53,
      title: "Caffè macchiato",
      text: "Deep Foam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqXh704CUAWzBbr66bvLsB6lPEALdiwJKYQ&s",
      liked: false,
    },
    {
      id: "3",
      rating: 3.8,
      price: 3.53,
      title: "Flat white",
      text: "Expresso",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqXh704CUAWzBbr66bvLsB6lPEALdiwJKYQ&s",
      liked: false,
    },
  ],
};

export const sliceGoods = createSlice({
  name: "goods",
  initialState,
  reducers: {
    changeSeach(state: IInitialStateGoods, action: PayloadAction<string>) {
      state.filters.seach = action.payload;
    },
    changeTypeCoffee(
      state: IInitialStateGoods,
      action: PayloadAction<TTypeCoffee>
    ) {
      state.filters.typeCoffee = action.payload;
    },
    changeLiked(
      state: IInitialStateGoods,
      action: PayloadAction<{ isLiked: boolean; index: number }>
    ) {
      state.goods[action.payload.index] = {
        ...state.goods[action.payload.index],
        liked: action.payload.isLiked,
      };
    },
  },
});

export const goodsReducer = sliceGoods.reducer;
export const { changeSeach, changeTypeCoffee, changeLiked } =
  sliceGoods.actions;
