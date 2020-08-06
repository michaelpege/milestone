import React from "react";
import { StyleSheet, Text, View } from "react-native";

const food = [
  {
    id: "1",
    name: "Chicken Breast",
    portion: 100,
    restriction: [],
    tags: ["protein", "cal"],
    cal: 239,
    carbs: 0,
    fat: 14,
    fiber: 0,
    protein: 27,
  },
  {
    id: "2",
    name: "Chicken Breast",
    portion: 100,
    restriction: [],
    tags: ["protein", "cal"],
    cal: 239,
    carbs: 0,
    fat: 14,
    fiber: 0,
    protein: 27,
  },
];

class Food extends React.Component {
  state = {
    foodEaten: this.props.foodEaten,
  };
}

class FoodEaten extends React.Component {
  render() {
    return (
      <View>
        <Text>Ini bagian makanan yang telah dimakan hari ini</Text>
      </View>
    );
  }
}

class FoodRecomendation extends React.Component {
  render() {
    return (
      <View>
        <Text>Ini bagian makanan yang direkomendasikan</Text>
      </View>
    );
  }
}

class FoodRow extends React.Component {
  render() {
    let qty = this.props.qty ? <Text>{"x" + this.props.qty}</Text> : "";
    return (
      <View style={styles.foodRow}>
        <View style={styles.foodName}>{qty}</View>
        <View styles={styles.foodOptions}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foodRow: {
    flexDirection: "row",
    width: "100%",
    height: 30,
  },
  foodName: {
    flex: 3,
  },
});

export { FoodEaten, FoodRecomendation };
