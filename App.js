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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";

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
    return (
      <SafeAreaView>
        <Biodata data={data} />
        <FoodEaten />
        <Text>{`Your log : ${this.state.text}`}</Text>
        <Modal
          isVisible={this.state.modalActive}
          onBackdropPress={() => this.toggleModal(false)}
        >
          <Text>YEY MODALNYA KEBUKA!</Text>
          <Button
            onPress={() => this.toggleModal(false)}
            title={"Tutup Modal"}
          />
        </Modal>
        <Button onPress={() => this.toggleModal(true)} title={"Buka Modal"} />
        <TouchableHighlight onPress={() => this.pushText()}>
          <MaterialCommunityIcons name='camera' color={"#000000"} size={26} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
export default App;
