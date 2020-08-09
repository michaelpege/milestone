import { StyleSheet, Dimensions } from "react-native";

const dimension = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const color = {
  p_lightBlue: "#C0EAE8",
  p_teal: "#20A7A0",
  p_white: "#F1F1F1",
  p_red: "#F26060",
  f_dark: "#343434",
  f_gray: "#AAAAAA",
  f_light: "#EBEBEB",
};

const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  textHead: {
    fontSize: 18,
    color: color.f_dark,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: color.f_dark,
    fontWeight: "800",
  },
  modalTitle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    marginBottom: 30,
  },
  modalClose: {
    position: "absolute",
    right: 0,
  },
  modalTitleText: {
    fontSize: 24,
    color: color.p_teal,
    fontWeight: "bold",
  },
});

export { stylesGlobal, dimension, color };
