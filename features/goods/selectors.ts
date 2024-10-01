import { createSelector } from "reselect";
import { IGoods } from "./type";
import { IInitialStateGoods } from "./goods";
import { RootState } from "../../store/store";

export const goods = (state: RootState): IInitialStateGoods =>
  state.goodsReducer;

export const filterGoods = createSelector(
  [goods],
  (goods: IInitialStateGoods): IGoods[] => {
    return goods.goods.filter((item: IGoods) => {
      console.log(item.title, goods.filters.typeCoffee, goods.filters.seach);
      if (
        item.text
          .toLocaleLowerCase()
          .includes(goods.filters.seach.toLocaleLowerCase())
      ) {
        if (
          goods.filters.typeCoffee === "All coffee" ||
          item.title.includes(goods.filters.typeCoffee)
        ) {
          return item;
        }
      }
    });
  }
);

export const filterLiked = createSelector(
  [goods],
  (goods: IInitialStateGoods) => {
    return goods.goods.filter((item) => !!item.liked && item);
  }
);
