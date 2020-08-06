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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { styles, dimension, color };
