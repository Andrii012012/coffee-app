import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  liked: {
    width: "100%",
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.dark,
    padding: 10,
  },
  infoCoffee: {
    flex: 1,
    marginRight: 15,
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
  bodyRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 20,
    marginRight: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 25,
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "700",
  },
});
