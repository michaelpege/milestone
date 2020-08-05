import React, {Component} from "react";
import { StyleSheet, Text, View, Modal, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";

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
	/*
	render(){
		return(

		);
	}
	*/
}

class Biodata extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		bio : {
			gender : "",
			birthDate : "",
			weight : "",
			height : "",
			bmi : "",
			allergies : [],
		},
		modalVisible : false
	};
	setModalVisible = (visible) => {
		this.setState({modalVisible : visible});
	}
	render() {
		let bio = this.state.bio
		const {modalVisible} = this.state.modalVisible;
		return (
			<View style={styles.centeredView}>
				<Text>
					{`Gender : ${bio.gender}\n
					Birthdate : ${bio.birthDate}\n
					Weight : ${bio.weight}\n
					Height : ${bio.height}\n
					BMI : ${bio.bmi}\n
					Allergies : ${bio.allergies}`}
				</Text>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>
								{`Gender : ${bio.gender}\n
								Birthdate : ${bio.birthDate}\n
								Weight : ${bio.weight}\n
								Height : ${bio.height}\n
								BMI : ${bio.bmi}\n
								Allergies : ${bio.allergies}`}
							</Text>
							<TouchableHighlight
								style={styles.openButton}
								onPress{...()=>{
									this.setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>{`Close`}</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
				<TouchableHighlight
					style={styles.openButton}
					onPress{...()=>{
						this.setModalVisible(true);
					}}
				>
					<Text style={styles.textStyle}>{`Edit`}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export { Biodata };
