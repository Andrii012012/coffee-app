import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.dark,
  },
  wrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 36,
    textAlign: "center",
    lineHeight: 48,
    width: "100%",
    fontWeight: "700",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },
  content: {
    paddingRight: 20,
    paddingLeft: 20,
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  subTitle: {
    color: colors.gray,
    textAlign: "center",
    lineHeight: 24,
    fontSize: 18,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: colors.brick,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 16,
  },
  btnText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
