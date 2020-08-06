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
      <View styles={[styles.bingkai]}>
        <View styles={styles.statis}></View>
        <View
          styles={[
            styles.progressBar,
            { width: this.props.value / this.props.max + "%" },
          ]}
        ></View>
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
