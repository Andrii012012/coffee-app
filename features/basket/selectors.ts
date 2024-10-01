import { createSelector } from "reselect";
import { RootState } from "../../store/store";

export const basket = (state: RootState) => state.basketReducer;

export const filterSumMoney = createSelector([basket], (basket) => {
  return basket.goods.reduce((sum: any, item) => {
    if (item.selected) {
      return Math.ceil((sum += item.price) * 100) / 100;
    } else {
      return sum;
    }
  }, 0);
});
