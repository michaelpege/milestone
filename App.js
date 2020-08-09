import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableHighlight,
} from "react-native";
<<<<<<< HEAD
import { Biodata, BiodataModal } from "./components/biodata";
import { FoodEaten, FoodRecomendation } from "./components/food";
import { Statistic } from "./components/statistic";
=======
import { Biodata, BiodataModal } from "./components/Biodata";
import { FoodEaten,Food } from "./components/Food";
import { Statistic } from "./components/statistic";
import { FoodRecomendation,FoodModal } from "./components/Food";

>>>>>>> d4fb27fe7701f035c909fb72556ea78ebad3fbd2
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import { color } from "./assets/style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.updateBio = this.updateBio.bind(this);
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
      Allergies: ["Nuts", "Seafood"],
    },
  };
  setModalVisible(visible, type) {
    type = type == "" || type == undefined ? this.state.modalComponent : type;
    this.setState({ modalVisible: visible, modalComponent: type });
    console.log("Masuk");
    console.log(visible, type);
  }
  updateBio(modalBio){
    this.setState({bio: modalBio});  
//    this.setState({modalVisible: visible});
    this.setModalVisible(!this.state.modalVisible);
    console.log("masuk");
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
            updateBio={this.updateBio}
          />
        );
        break;
      case "Food" :
        modalComponent = (
          <FoodModal 
            setModalVisible={this.setModalVisible}
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
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}
      >
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={{ width: "100%", height: 50, marginTop: 20 }}>
            <Text style={{ height: 40, fontSize: 30 }}>Nama Applikasi</Text>
            <View
              style={{
                width: "75%",
                height: 10,
                backgroundColor: color.p_teal,
                borderRadius: 8,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              height: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ height: 30, fontSize: 16 }}>Pick Your Data : </Text>
            <TouchableHighlight style={{ position: "absolute", right: 0 }}>
              <MaterialCommunityIcons
                name='calendar'
                color={color.p_teal}
                size={30}
              />
            </TouchableHighlight>
          </View>
          <Biodata
            bio={this.state.bio}
            setModalVisible={this.setModalVisible}
          />
          <View style={{ marginVertical: 20 }}></View>
          <FoodEaten />
          <Statistic />
          <Modal
            isVisible={this.state.modalVisible}
            onBackdropPress={() => this.setModalVisible(false, "")}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "75%",
                height: "75%",
                backgroundColor: color.p_white,
              }}
            >
              <Text>ini adalah isi modal</Text>
              <Button
                onPress={() => this.setModalVisible(false, "")}
                title='Close'
              />
            </View>
          </Modal>

          <Button
            onPress={() => this.setModalVisible(true, "Biodata")}
            title='Open'
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
