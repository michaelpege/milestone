import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { stylesGlobal, color } from "../assets/style";

class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.hitungProgress = this.hitungProgress.bind(this);
  }

  componentDidMount() {
    console.log("Mounted..");
    console.log(this.state.akg);
  }

  state = {
    progress: {
      cal: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      protein: 0,
    },
    akg: this.props.akg,
    dataMakanan: this.props.dataMakanan,
  };
  // --> dataMakanan [{id:..,qty:..}]
  // --> {cal, carbs, fat, fiber, protein}
  hitungProgress(dataMakanan) {
    let result = { cal: 0, carbs: 0, fat: 0, fiber: 0, protein: 0 };
    let akg = this.props.akg;
    if (dataMakanan.length) {
      dataMakanan.map((data) => {
        result.cal += data.cal * data.qty;
        result.carbs += data.carbs * data.qty;
        result.fat += data.fat * data.qty;
        result.fiber += data.fiber * data.qty;
        result.protein += data.protein * data.qty;
      });
    }
    result.cal = result.cal.toFixed(2);
    result.carbs = result.carbs.toFixed(2);
    result.fat = result.fat.toFixed(2);
    result.fiber = result.fiber.toFixed(2);
    result.protein = result.protein.toFixed(2);
    // console.log("Setelah di map");
    // console.log(result);
    // console.log("Ini AKG");
    // console.log(akg);
    // result.cal = parseInt((result.cal / akg.cal) * 100);
    // result.carbs = parseInt((result.carbs / akg.carbs) * 100);
    // result.fat = parseInt((result.fat / akg.fat) * 100);
    // result.fiber = parseInt((result.fiber / akg.fiber) * 100);
    // result.protein = parseInt((result.protein / akg.protein) * 100);
    // console.log("Setelah dihitung");
    // console.log(result);
    return result;
  }

  formatPercentage(gizi, akg) {
    let res = parseInt((gizi / akg) * 100);
    return res + "%";
  }

  render() {
    let progress = this.hitungProgress(this.props.dataMakanan);
    let akg = this.props.akg;
    return (
      <View style={{ width: "100%", minHeight: 200 }}>
        <Text style={stylesGlobal.textHead}>Statistic</Text>
        <ProgressBar
          values={this.formatPercentage(progress.cal, akg.cal)}
          title={"Calories"}
          current={progress.cal}
          akg={akg.cal}
        />
        <ProgressBar
          values={this.formatPercentage(progress.carbs, akg.carbs)}
          title={"Carbohidrate"}
          current={progress.carbs}
          akg={akg.carbs}
        />
        <ProgressBar
          values={this.formatPercentage(progress.fat, akg.fat)}
          title={"Fat"}
          current={progress.fat}
          akg={akg.fat}
        />
        <ProgressBar
          values={this.formatPercentage(progress.protein, akg.protein)}
          title={"Protein"}
          current={progress.protein}
          akg={akg.protein}
        />
      </View>
    );
  }
}

class ProgressBar extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 25,
          marginVertical: 5,
        }}
      >
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", color: color.p_teal, height: 20 }}>
            {this.props.title}
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{ fontSize: 10, color: color.f_dark }}
            >{`${this.props.current}/${this.props.akg}grams`}</Text>
          </View>
          <View style={styles.bingkai}>
            <View style={styles.statis}></View>
            <View
              style={[styles.progressBar, { width: this.props.values }]}
            ></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bingkai: {
    width: "100%",
    height: 10,
    backgroundColor: "#f7f7f7",
    marginBottom: 5,
    position: "relative",
    borderRadius: 8,
  },
  statis: {
    width: "100%",
    height: 10,
    backgroundColor: color.f_light,
    position: "absolute",
    zIndex: 1,
    borderRadius: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: color.p_teal,
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
  },
});

export { Statistic, ProgressBar };
