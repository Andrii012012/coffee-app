import { NavigationProp, ParamListBase } from "@react-navigation/native";

export interface IRoutes extends ParamListBase {
  Main: { hangleChange: () => void };
  Shop: undefined;
  Goods: {id: number};
  Liked: undefined;
  Basket: undefined;
}

export type TNavigationProp = NavigationProp<IRoutes>;
