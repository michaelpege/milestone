import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { Biodata } from "./components/Biodata";
import { FoodEaten } from "./components/Food";
import { Statistic } from "./components/statistic";
import { FoodRecomendation} from "./components/Food";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import { ProgressBar } from "./components/statistic";

/*
class AddBill extends React.Component{
	constructor(props) {
		super(props);
		this.changeDate = this.changeDate.bind(this);
		this.toggleDatePicker = this.toggleDatePicker.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.switchLendeeMode = this.switchLendeeMode.bind(this);
		this.addData = this.addData.bind(this);
		this.toggleSelect = this.toggleSelect.bind(this);
		this.deleteLendee = this.deleteLendee.bind(this);
		this.switchBillFormat = this.switchBillFormat.bind(this);
		this.onModalSubmit = this.onModalSubmit.bind(this);
	}
	state = {
		date : today,
		dateFull : {y,m,d},
		datePicker : false,
		dateObj : dateObj,
		modalActive : false,
		modalSwitch : "Add New Lendee",
		dataNew : [],
		dataExisting : [],
		newSelected : [],
		existingSelected : [],
		lendeeId : [],
		lendee_data : this.props.lendee_data,
		billFormat : "Equal",
	};	
}
*/

class App extends React.Component {
  state = {
    modalActive: false,
    text: "",
  };
  render() {
    return (
      <SafeAreaView>
		<FoodEaten/>
		<FoodRecomendation/>
        <Biodata />
        <Statistic />
      </SafeAreaView>
    );
  }
}

export default App;
