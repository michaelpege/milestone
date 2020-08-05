import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from "react-native";
import { Biodata } from "./components/Biodata";
import { FoodEaten } from "./components/Food";
import {Statistic} from "./components/statistic";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import {ProgressBar} from "./components/statistic";

class App extends React.Component {
  state = {
    modalActive: false,
    text: "",
  };
  toggleModal(modalActive) {
    this.setState({ modalActive: modalActive });
  }
  pushText() {
    let text = this.state.text;
    text += "cekrek ";
    this.setState({ text });
  }
  render() {
    let data = {
      nama: "Alwan",
      umur: 19,
    };
    return(
      <Statistic />
    );
  }
}
export default App;
