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
      <View>
        <Text> TEST 1</Text>
        <ProgressBar values={'10%'}/>
        <ProgressBar values={'75%'}/>
        <ProgressBar values={'40%'}/>
        <ProgressBar values={'100%'}/>
        <ProgressBar values={'20%'}/>
      </View>
    );
  }
}

class ProgressBar extends React.Component {
  render() {
    return(
      <View style={styles.bingkai}>
        <View style={styles.statis}></View>
        <View 
          style={[styles.progressBar, {width : this.props.values}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bingkai: {
    width: "100%",
    height: 50,
    backgroundColor: "#f7f7f7",
    marginBottom : 5,
    position : 'relative',
  },
  statis: {
    width: "100%",
    height: 50,
    backgroundColor: "#EBEBEB",
    position :'absolute',
    zIndex : 1
  },
  progressBar: {
    width: "40%",
    height: 50,
    backgroundColor: "#0a916b",
    zIndex : 2,
    position : "absolute",
    top : 0,
    left: 0
  },
})

export { Statistic, ProgressBar };
