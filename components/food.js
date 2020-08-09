import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { dimension, color, stylesGlobal } from "../assets/style";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.editRow = this.editRow.bind(this);
  }
  state = {
    foodEaten: this.props.foodEaten,
    database: this.props.foodDB,
    selected: [],
  };
  addRow(data) {
    let { selected } = this.state;
    if (!selected.filter((row) => row.id == data.id).length) {
      selected.push({ ...data, qty: 0 });
    }
    this.setState({ selected });
  }
  deleteRow(data) {
    let { selected } = this.state;
    if (selected.filter((row) => row.id == data.id).length) {
      selected = selected.filter((row) => row.id !== data.id);
    }
    this.setState({ selected });
  }
  editRow(id, qty) {
    let selected = this.state.selected;
    let target = selected.filter((row) => row.id == id);
    if (target.length) {
      target = target[0];
      target.qty = qty;
      selected = selected.map((row) => (row.id == id ? target : row));
      this.setState({ selected });
    }
  }
  render() {
    let selectedID = this.state.selected.map((row) => row.id);
    let notSelected = this.state.database.filter(
      (row) => !selectedID.includes(row.id)
    );
    return (
      <View style={{ marginTop: 20 }}>
        <FoodEaten
          setModalVisible={this.props.setModalVisible}
          data={this.state.selected}
          editRow={this.editRow}
          deleteRow={this.deleteRow}
        />
        <View style={{ marginVertical: 5 }}></View>
        <FoodRecomendation
          setModalVisible={this.props.setModalVisible}
          data={notSelected}
          addRow={this.addRow}
        />
      </View>
    );
  }
}

class FoodEaten extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={stylesGlobal.textHead}>Food Consumed</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.containerIn}>
              <FlatList
                data={data}
                keyExtractor={(row) => row.id}
                renderItem={(row) => (
                  <FoodRow
                    selected={true}
                    setModalVisible={this.props.setModalVisible}
                    editRow={this.props.editRow}
                    deleteRow={this.props.deleteRow}
                    data={row}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class FoodRecomendation extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={stylesGlobal.textHead}>Recommendations</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.containerIn}>
              <FlatList
                data={data}
                keyExtractor={(row) => row.id}
                renderItem={(row) => (
                  <FoodRow
                    selected={false}
                    setModalVisible={this.props.setModalVisible}
                    addRow={this.props.addRow}
                    data={row}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class FoodRow extends React.Component {
  render() {
    let data = this.props.data.item;
    if (this.props.selected) {
      return (
        <View style={styles.row}>
          <View style={styles.feature}>
            <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
          </View>
          <View style={styles.whiterow}>
            <TouchableHighlight
              onPress={() => this.props.setModalVisible(true, "Food", data)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name='pencil'
                color={color.white}
                size={20}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.deleteRow(data)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name='close'
                color={color.white}
                size={20}
              />
            </TouchableHighlight>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.row}>
          <View style={styles.feature}>
            <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
          </View>
          <View style={styles.whiterow}>
            <TouchableHighlight
              onPress={() => this.props.setModalVisible(true, "FoodInfo", data)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name='information'
                color={color.white}
                size={20}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.addRow(data)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name='plus'
                color={color.white}
                size={20}
              />
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
}

class FoodModal extends React.Component {
  render() {
    return (
      <View style={styles.modalbox}>
        <Text style={stylesGlobal.modalTitleText}>Edit Your Meal</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.txt}>Name :</Text>
        <Text style={styles.txt}>Qty :</Text>
        <Text style={styles.txt}>Details :</Text>
        <Text style={styles.txt2}>Carbohydrate</Text>
        <Text style={styles.txt2}>Protein</Text>
        <Text style={styles.txt2}>Glucose</Text>
        <Text style={styles.txt2}>Fat</Text>
        <TouchableHighlight onPress={() => this.props.setModalVisible(false)}>
          <View style={styles.savebox}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Save Changes
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class FoodInfo extends React.Component {
  render() {
    return (
      <View style={styles.modalbox}>
        <Text style={stylesGlobal.modalTitleText}>Meal Info</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.txt}>Name :</Text>
        <Text style={styles.txt}>Qty :</Text>
        <Text style={styles.txt2}>Carbohydrate</Text>
        <Text style={styles.txt2}>Protein</Text>
        <Text style={styles.txt2}>Glucose</Text>
        <Text style={styles.txt2}>Fat</Text>
        <View style={styles.savebox}>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}
          >
            Ok, Cool!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  containerIn: {
    width: "100%",
    height: 400,
    borderRadius: 8,
    marginLeft: 50,
    marginRight: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color.p_teal,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: color.p_lightBlue,
  },
  feature: {
    flex: 5,
    marginTop: 12,
    marginLeft: 10,
  },
  whiterow: {
    flex: 3,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  foodRow: {
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
  foodName: {
    flex: 3,
  },
  modalbox: {
    paddingTop: "10%",
    backgroundColor: "white",
    width: 300,
    height: 400,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 7,
  },
  txt: {
    alignSelf: "flex-start",
    marginLeft: "8%",
    paddingTop: "5%",
    fontWeight: "bold",
    fontSize: 15,
  },
  txt2: {
    alignSelf: "flex-start",
    marginLeft: "8%",
    paddingTop: "3%",
    color: color.p_teal,
    fontSize: 12,
  },
  savebox: {
    width: "50%",
    height: "10%",
    backgroundColor: color.p_teal,
    marginTop: "6%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 7,
  },
});

export { Food, FoodEaten, FoodRecomendation, FoodModal, FoodInfo };
