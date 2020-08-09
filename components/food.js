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
  render() {
    let selectedID = this.props.selected.map((row) => row.id);
    let notSelected = this.props.foodDB.filter(
      (row) => !selectedID.includes(row.id)
    );
    return (
      <View style={{ marginTop: 20 }}>
        <FoodEaten
          setModalVisible={this.props.setModalVisible}
          data={this.props.selected}
          editRow={this.props.editRow}
          deleteRow={this.props.deleteRow}
        />
        <View style={{ marginVertical: 5 }}></View>
        <FoodRecomendation
          setModalVisible={this.props.setModalVisible}
          data={notSelected}
          addRow={this.props.addRow}
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
            <Text
              style={[
                stylesGlobal.textHead,
                { position: "absolute", right: 10 },
              ]}
            >{`x${data.qty}`}</Text>
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
    let { data } = this.props;
    let qtyComponent = this.props.info ? (
      ""
    ) : (
      <View style={styles.modalRow}>
        <Text style={styles.txt}>Qty :</Text>
        <View style={{ flex: 1, alignSelf: "flex-end" }}>
          <TouchableHighlight
            onPress={() => this.props.editRow(data.id, data.qty - 1)}
            style={{ flex: 1 }}
          >
            <Text style={{ color: color.p_teal }}>-</Text>
          </TouchableHighlight>
          <Text style={{ flex: 1 }}>{data.qty}</Text>
          <TouchableHighlight
            onPress={() => this.props.editRow(data.id, data.qty + 1)}
            style={{ flex: 1 }}
          >
            <Text style={{ color: color.p_teal }}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
    return (
      <View style={styles.modalbox}>
        <Text style={stylesGlobal.modalTitleText}>Meal Info</Text>
        <View style={styles.modalRow}>
          <Text style={styles.txt}>Name :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>{data.name}</Text>
        </View>
        {qtyComponent}
        <View style={styles.modalRow}>
          <Text style={styles.txt}>Details :</Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.txt2}>Calories :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>
            {data.cal + "kal"}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.txt2}>Carbohydrate :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>
            {data.carbs + "g"}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.txt2}>Protein :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>
            {data.protein + "g"}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.txt2}>Fat :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>
            {data.fat + "g"}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.txt2}>Fiber :</Text>
          <Text style={{ flex: 1, alignSelf: "flex-end" }}>
            {data.fiber + "g"}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.savebox}
          onPress={() => this.props.setModalVisible(false)}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Ok, Cool!
          </Text>
        </TouchableHighlight>
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
  modalRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
    width: "100%",
    minHeight: 400,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 8,
    paddingHorizontal: 50,
  },
  txt: {
    alignSelf: "flex-start",
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    flex: 1,
    justifyContent: "flex-end",
  },
  txt2: {
    alignSelf: "flex-start",
    marginTop: 5,
    color: color.p_teal,
    fontSize: 12,
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
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

export { Food, FoodEaten, FoodRecomendation, FoodModal };
