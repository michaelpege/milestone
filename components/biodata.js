import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { dimension, color } from "../assets/style";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const bio = {
  gender: "Male",
  birthDate: "01/01/2000",
  weight: "57",
  height: "170",
  bmi: "20.1",
  allergies: ["Nuts", "Seafood"],
};

class Biodata extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bio: this.props.bio,
    modalVisible: false,
  };

  render() {
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
          <View style={[styles.bioRow]}>
            <View style={styles.innerBox}>
              <FlatList
                data={bio.allergies}
                renderItem={({ item }) => (
                  <Text style={{ width: "33%", margin: 10 }}>{item}</Text>
                )}
                numColumns={3}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
          <View>
            <TouchableHighlight
              style={[styles.buttonMin, { position: "absolute", right: 0 }]}
              onPress={() => this.props.setModalVisible(true, "Biodata")}
            >
              <Text style={styles.textStyle}>{`Edit`}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

class BiodataModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    bio: this.props.bio,
  };
  handleChange() {}
  render() {
    let bio = this.props.bio;
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <BioForm title='Gender' content={bio.gender} />
          <BioForm title='Birthdate' content={bio.birthDate} />
          <BioForm title='Body Weight' content={bio.weight} />
          <BioForm title='Body Height' content={bio.height} />
          <BioForm title='BMI' content={bio.bmi} />
          <TouchableHighlight stype={styles.openButton}>
            <Text style={styles.textStyle}>{`Save`}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => this.props.setModalVisible(!this.props.visible)}
          >
            <Text style={styles.textStyle}>{`Close`}</Text>
          </TouchableHighlight>
          <Allergies data={["Nuts", "Dairy", "Seafood", "Eggs", "Wheat"]} />
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

class BioForm extends React.Component {
  render() {
    return (
      <View style={styles.bioForm}>
        <Text style={styles.bioFormTitle}>
          {`${this.props.title}:`}>
          <TextInput
            style={styles.bioFormInput}
            placeholder={this.props.content}
          />
        </Text>
      </View>
    );
  }
}

class Allergies extends React.Component {
  constructor(props) {
    super(props);
    this.addAllergy = this.addAllergy.bind(this);
    this.deleteAllergy = this.deleteAllergy.bind(this);
  }
  state = {
    database: this.props.data,
    selected: [],
  };
  addAllergy(name) {
    let selected = this.state.selected;
    if (!selected.includes(name)) {
      selected.push(name);
    }
    this.setState({ selected });
  }
  deleteAllergy(name) {
    let selected = this.state.selected;
    if (selected.includes(name)) {
      selected = selected.filter((row) => row != name);
    }
    this.setState({ selected });
  }
  render() {
    let { selected, database } = this.state;
    let notSelected = database.filter((row) => !selected.includes(row));
    let selectedAllergies = selected.map((row) => (
      <AllergyRow
        name={row}
        onPress={this.deleteAllergy}
        handlePress={row}
        selected={true}
      />
    ));
    let notSelectedAllergies = notSelected.map((row) => (
      <AllergyRow
        name={row}
        onPress={this.addAllergy}
        handlePress={row}
        selected={false}
      />
    ));
    return (
      <View>
        <Text>Allergies</Text>
        <View style={styles.allergyContainer}>{selectedAllergies}</View>
        <Text>Add Allergies</Text>
        <View style={styles.allergyContainer}>{notSelectedAllergies}</View>
      </View>
    );
  }
}

class AllergyRow extends React.Component {
  render() {
    let icon = this.props.selected ? (
      <MaterialCommunityIcons name='minus' size={24} color={color.p_red} />
    ) : (
      <MaterialCommunityIcons name='plus' size={24} color={color.p_teal} />
    );
    return (
      <View style={styles.allergyRow}>
        <Text style={styles.allergyName}>{this.props.name}</Text>
        <TouchableHighlight
          onPress={() => this.props.onPress(this.props.handlePress)}
        >
          {icon}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allergyContainer: {
    width: "200",
    height: 100,
    borderRadius: 4,
    borderColor: color.p_teal,
  },
  allergyRow: {
    width: "100%",
    backgroundColor: color.p_lightBlue,
    height: 30,
    flexDirection: "row",
  },
  allergyName: {
    flex: 3,
  },
  allergyButton: {
    flex: 1,
    backgroundColor: color.f_gray,
  },
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
    justifyContent: "space-between",
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
  bioFormTitle: {
    flex: 1,
  },
  bioFormInput: {
    flex: 2,
  },
  bioForm: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
});

export { Biodata, BiodataModal };
