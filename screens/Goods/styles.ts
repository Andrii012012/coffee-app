import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  goods: {
    width: "100%",
    flex: 1,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
  nameCoffee: {
    fontSize: 28,
    fontWeight: "700",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  infoGoods: {},
  imageCoffee: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
  },
  bodyIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: "#e5e5e5",
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    borderRadius: 6,
  },
  additive: {
    flex: 1,
    fontSize: 18,
  },
  bodyRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  textRating: {
    fontSize: 24,
    fontWeight: "700",
  },
  iconStar: {
    marginRight: 5,
  },
  bodyLine: {
    width: "100%",
    height: 1,
    alignItems: "center",
    marginBottom: 15,
  },
  line: {
    width: "90%",
    height: "100%",
    backgroundColor: colors.gray,
  },
  titleDescription: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    color: colors.gray,
    marginBottom: 15,
  },
  bodySizeCoffe: {},
  textSize: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: "700",
  },
  wrapperSizeCoffee: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 40,
  },
  sizeCoffee: {
    borderRadius: 12,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  symbolSize: {
    fontWeight: "500",
    fontSize: 18,
  },
  bodyOrder: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 16,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  textPrice: {
    fontSize: 22,
    marginBottom: 10,
    color: colors.gray,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.brick,
  },
  btn: {
    paddingTop: 15,
    paddingBottom: 15,
    width: 230,
    backgroundColor: colors.brick,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "700",
  },
  infoPrice: {
    flex: 1,
  },
  specialText: {
    color: colors.brick,
    fontSize: 20,
    fontWeight: "500",
  },
});
