import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Biodata, BiodataModal } from "./components/biodata";
import { FoodModal, Food } from "./components/food";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import { color, stylesGlobal } from "./assets/style";
import { foodDatabase } from "./assets/foodData";

const allergiesDB = ["Nuts", "Dairy", "Seafood", "Eggs", "Wheat"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.addFoodRow = this.addFoodRow.bind(this);
    this.editFoodRow = this.editFoodRow.bind(this);
    this.deleteFoodRow = this.deleteFoodRow.bind(this);
  }

  state = {
    modalActive: false,
    modalComponent: "Biodata",
    modalVisible: false,
    modalData: {},
    datePickerVisible: false,
    dateObj: new Date(),
    dateVisual: "",
    bio: {
      gender: "Male",
      birthDate: "01/01/2000",
      birthDateObj: new Date(),
      weight: "57",
      height: "170",
      bmi: "20.1",
      allergies: ["Nuts", "Seafood"],
    },
    akg: {
      carbs: 0,
      cal: 0,
      fat: 0,
      fiber: 0,
      protein: 0,
    },
    selected: [],
  };

  componentDidMount() {
    let date = this.formatDate(new Date());
    this.setState({ dateObj: date.dateObj, dateVisual: date.dateVisual });
  }

  formatDate(today) {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    //creating dateObj on 00:00:00
    let y = today.getFullYear();
    let m = today.getMonth();
    let d = today.getDate();
    let dateObj = new Date(y, m, d);

    //Creating date in format : Sun, 09 August 2020
    let dateVisual = `${day[today.getDay()]}, ${today.getDate()} ${
      month[today.getMonth()]
    } ${today.getFullYear()}`;

    return { dateObj, dateVisual };
  }

  setModalVisible(visible, type, data) {
    let target =
      type == "" || type == undefined ? this.state.modalComponent : type;
    let modalData =
      data == "" || data == undefined ? this.state.modalData : data;
    this.setState({ modalVisible: visible, modalComponent: target, modalData });
    console.log(visible, type);
  }

  updateBio(modalBio) {
    this.setState({ bio: modalBio });
    //    this.setState({modalVisible: visible});
    this.setModalVisible(!this.state.modalVisible);
  }

  toggleDatePicker() {
    let datePickerVisible = !this.state.datePickerVisible;
    this.setState({ datePickerVisible });
  }

  changeDate(event, date) {
    date = this.formatDate(date);
    this.setState({
      dateVisual: date.dateVisual,
      datePickerVisible: false,
      dateObj: date.dateObj,
    });
  }

  getModalComponent() {
    let modalComponent;
    switch (this.state.modalComponent) {
      case "Biodata":
        modalComponent = (
          <BiodataModal
            setModalVisible={this.setModalVisible}
            bio={this.state.bio}
            visible={this.state.modalVisible}
            updateBio={this.updateBio}
            allergiesDB={allergiesDB}
          />
        );
        break;
      case "Food":
        modalComponent = (
          <FoodModal
            setModalVisible={this.setModalVisible}
            visible={this.state.modalVisible}
            data={this.state.modalData}
            info={false}
            editRow={this.editFoodRow}
          />
        );
        break;
      case "FoodInfo":
        modalComponent = (
          <FoodModal
            setModalVisible={this.setModalVisible}
            visible={this.state.modalVisible}
            data={this.state.modalData}
            info={true}
          />
        );
    }
    return modalComponent;
  }

  addFoodRow(data) {
    let { selected } = this.state;
    if (!selected.filter((row) => row.id == data.id).length) {
      selected.push({ ...data, qty: 1 });
    }
    this.setState({ selected });
  }

  deleteFoodRow(data) {
    let { selected } = this.state;
    if (selected.filter((row) => row.id == data.id).length) {
      selected = selected.filter((row) => row.id !== data.id);
    }
    this.setState({ selected });
  }

  editFoodRow(id, qty) {
    let selected = this.state.selected;
    let target = selected.filter((row) => row.id == id);
    if (target.length) {
      if (qty <= 1) {
        qty = 1;
      }
      target = target[0];
      target.qty = qty;
      selected = selected.map((row) => (row.id == id ? target : row));
      this.setState({ selected });
    }
    this.setModalVisible(false);
  }

  render() {
    let modalComponent = this.getModalComponent();
    return (
      <SafeAreaView
        style={{
          width: "100%",
          minHeight: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}
      >
        <View style={stylesGlobal.container}>
          <ScrollView>
            <AppTitle />
            <View
              style={{
                width: "100%",
                height: 30,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={stylesGlobal.textHead}>See Data For :</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text style={stylesGlobal.textHead}>
                  {this.state.dateVisual}
                </Text>
                <TouchableHighlight onPress={() => this.toggleDatePicker()}>
                  <MaterialCommunityIcons
                    name='calendar'
                    color={color.p_teal}
                    size={30}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <Biodata
              bio={this.state.bio}
              setModalVisible={this.setModalVisible}
              formatDate={this.formatDate}
            />
            <Food
              setModalVisible={this.setModalVisible}
              foodDB={foodDatabase}
              selected={this.state.selected}
              addRow={this.addFoodRow}
              editRow={this.editFoodRow}
              deleteRow={this.deleteFoodRow}
            />
            <View style={{ marginVertical: 20 }}></View>
            <Modal
              isVisible={this.state.modalVisible}
              onBackdropPress={() => this.setModalVisible(false, "")}
              style={{
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 20,
              }}
              propagateSwipe={true}
            >
              {modalComponent}
            </Modal>
            {this.state.datePickerVisible && (
              <DateTimePicker
                testID='dateTimePicker'
                value={this.state.dateObj}
                mode={"date"}
                is24Hour={true}
                display='default'
                onChange={this.changeDate}
              />
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

class AppTitle extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", height: 50, marginVertical: 20 }}>
        <Text
          style={{
            height: 40,
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Nama Aplikasi
        </Text>
        <View
          style={{
            width: "75%",
            height: 5,
            backgroundColor: color.p_teal,
            borderRadius: 8,
          }}
        ></View>
      </View>
    );
  }
}

export default App;
