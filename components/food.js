import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

export { FoodEaten, FoodRecomendation };
