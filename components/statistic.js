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
    this.cariProperti = this.cariProperti.bind(this);
    this.hitungProgress = this.hitungProgress.bind(this);
  }

  state = {
    progress: {
      cal: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      protein: 0,
    },
    akg: akg,
  };
  // --> dataMakanan [{id:..,qty:..}]
  // --> {cal, carbs, fat, fiber, protein}
  hitungProgress(dataMakanan) {
    let result = { cal: 0, carbs: 0, fat: 0, fiber: 0, protein: 0 };
    dataMakanan.map((row) => {
      let data = this.cariProperti(row);
      result.cal += data.cal;
      result.carbs += data.carbs;
      result.fat += data.fat;
      result.fiber += data.fiber;
      result.protein += data.protein;
    });
    this.setState({ progress: result });
  }

  cariProperti(dataMakanan, database) {
    let target = database.filter((row) => row.id == dataMakanan.id)[0];
    let result = {
      cal: target.cal * dataMakanan.qty,
      carbs: target.carbs * dataMakanan.qty,
      fat: target.fat * dataMakanan.qty,
      fiber: target.fiber * dataMakanan.qty,
      protein: target.protein * dataMakanan.qty,
    };
    return result;
  }

  render() {
    let panjang = this.state.progressCalories / this.state.caloriesNeeded + "%";
    let data = [a, b, c, d, e, f];
    let component = data.map((row) => <Text>{row}</Text>);
    return <View>{component}</View>;
  }
}

class ProgressBar extends React.Component {
  render() {
    return (
      <View>
        <Text> TEST 1</Text>
        <ProgressBar values={"10%"} />
        <ProgressBar values={"75%"} />
        <ProgressBar values={"40%"} />
        <ProgressBar values={"100%"} />
        <ProgressBar values={"20%"} />
      </View>
    );
  }
}

class ProgressBar extends React.Component {
  render() {
    return (
      <View style={styles.bingkai}>
        <View style={styles.statis}></View>
        <View style={[styles.progressBar, { width: this.props.values }]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bingkai: {
    width: "100%",
    height: 50,
    backgroundColor: "#f7f7f7",
    marginBottom: 5,
    position: "relative",
  },
  statis: {
    width: "100%",
    height: 50,
    backgroundColor: "#EBEBEB",
    position: "absolute",
    zIndex: 1,
  },
  progressBar: {
    width: "40%",
    height: 50,
    backgroundColor: "#0a916b",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export { Statistic, ProgressBar };
