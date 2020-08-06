import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";
import { dimension, color } from "../assets/style";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";

class Biodata extends React.Component {
  constructor(props) {
    super(props);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    bio: {
      gender: "Male",
      birthDate: "01/01/2000",
      weight: "57",
      height: "170",
      bmi: "20.1",
      allergies: ["Nuts", "Seafood"],
    },
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    console.log("Masuk");
  }

  render() {
    let bio = this.state.bio;
    return (
      <View style={styles.centeredView}>
        <Text>Your Data : </Text>
        <View style={styles.biodataContainer}>
          <View style={styles.bioRow}>
            <BioItem title='Gender' content={bio.gender} />
            <BioItem title='Birthdate' content={bio.birthDate} flex={2} />
          </View>
          <View style={styles.bioRow}>
            <BioItem title='Body Weight' content={bio.weight} />
            <BioItem title='Body Height' content={bio.height} />
            <BioItem title='BMI' content={bio.bmi} />
          </View>
          <View style={styles.bioRow}>
            <Text
              style={[
                styles.bioTitle,
                {
                  width: "100%",
                  alignSelf: "flex-start",
                },
              ]}
            >
              Allergies
            </Text>
          </View>
          <View style={[styles.bioRow, { padding: 10 }]}>
            <View style={styles.innerBox}></View>
          </View>
          <View>
            <TouchableHighlight
              style={[styles.buttonMin, { position: "absolute", right: 0 }]}
              onPress={() => this.setModalVisible(true)}
            >
              <Text style={styles.textStyle}>{`Edit`}</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Modal isVisible={this.state.modalVisible}>
          <BiodataModal
            setModalVisible={this.setModalVisible}
            bio={bio}
            visible={this.state.modalVisible}
          />
        </Modal>
      </View>
    );
  }
}

class BiodataModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let bio = this.props.bio;
    return (
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
            onPress={() => this.props.setModalVisible(!this.props.visible)}
          >
            <Text style={styles.textStyle}>{`Close`}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class BioItem extends React.Component {
  render() {
    return (
      <View style={[styles.bioItem, { flex: this.props.flex || 1 }]}>
        <Text style={styles.bioTitle}>{this.props.title}</Text>
        <Text style={styles.bioContent}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  biodataContainer: {
    width: "100%",
    minHeight: dimension.height / 3,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: color.p_teal,
    borderRadius: 16,
  },
  bioRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  bioItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    margin: 5,
  },
  bioTitle: {
    fontSize: 12,
    color: color.f_light,
    fontWeight: 400,
  },
  bioContent: {
    fontSize: 24,
    color: color.f_light,
    fontWeight: 600,
  },
  buttonMin: {
    backgroundColor: color.p_teal,
    borderColor: color.p_white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: dimension.width / 5,
    height: 30,
  },
  innerBox: {
    width: "100%",
    height: 200,
    backgroundColor: color.p_lightBlue,
    borderRadius: 8,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export { Biodata };
