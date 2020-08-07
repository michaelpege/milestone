import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { Biodata, BiodataModal } from "./components/Biodata";
import { FoodEaten } from "./components/Food";
import { Statistic } from "./components/statistic";
import { FoodRecomendation } from "./components/Food";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import { ProgressBar } from "./components/statistic";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  state = {
    modalActive: false,
    text: "",
    modalComponent: "Biodata",
    modalVisible: false,
    bio: {
      gender: "Male",
      birthDate: "01/01/2000",
      weight: "57",
      height: "170",
      bmi: "20.1",
      allergies: ["Nuts", "Seafood"],
    },
  };
  setModalVisible(visible, type) {
    type = type == "" || type == undefined ? this.state.modalComponent : type;
    this.setState({ modalVisible: visible, modalComponent: type });
    console.log("Masuk");
    console.log(visible, type);
  }
  render() {
    let modalComponent = "";
    switch (this.state.modalComponent) {
      case "Biodata":
        modalComponent = (
          <BiodataModal
            setModalVisible={this.setModalVisible}
            bio={this.state.bio}
            visible={this.state.modalVisible}
          />
        );
        break;
    }
    return (
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Biodata bio={this.state.bio} setModalVisible={this.setModalVisible} />
        <Modal
          isVisible={this.state.modalVisible}
          onBackdropPress={() => this.setModalVisible(false)}
        >
          {modalComponent}
        </Modal>
        <Statistic />
      </SafeAreaView>
    );
  }
}

export default App;
