import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  basket: {
    flex: 1,
    width: "100%",
    paddingBottom: 15,
  },
  list: {},
  item: {
    borderColor: colors.dark,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 25,
  },
  bodyInfo: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  size: {
    fontSize: 20,
    fontWeight: "900",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.dark,
    marginRight: 15,
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: colors.brick,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: colors.white,
  },
  sum: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 15,
    textAlign: "center",
  },
  message: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "700",
  },
  wrapper: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
