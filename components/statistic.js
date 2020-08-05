import React from "react";
import { StyleSheet, Text, View } from "react-native";

const akg = {
  cal: 1000,
  carbs: 2000,
  fat: 500,
  fiber: 20,
  protein: 500,
};

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

const foodEaten = [
  {
    id: "1",
    qty: 2,
  },
];

class Statistic extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    progressCalories: 500,
    caloriesNeeded: akg.cal,
  };
  // --> dataMakanan [{id:..,qty:..}]
  // --> {cal, carbs, fat, fiber, protein}
  hitungProgress(dataMakanan, dataAKG) {
    //ngitung Asupan - AKG
  }

  // --> dataMakanan {id,qty}
  // --> {cal,carbs,fat,fiber,protein}
  cariProperti(dataMakanan, database) {
    //
  }

  render() {
    let panjang = this.state.progressCalories / this.state.caloriesNeeded + "%";
    return (
      <View style={[styles.progressRow, styles.progressRowActive]}>
        <View style={{ width: panjang }}></View>
        <Text>Ini bagian statistik user hari ini</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressRow: {
    width: "100%",
    height: 50,
  },
  progressRowActive: {
    backgroundColor: "red",
  },
});

export { Statistic };
