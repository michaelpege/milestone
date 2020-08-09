import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { dimension, color, stylesGlobal } from "../assets/style";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class Biodata extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bio: this.props.bio,
  };

  render() {
    return (
      <View style={styles.centeredView}>
        <Text
          style={[
            stylesGlobal.textHead,
            { alignSelf: "flex-start", marginBottom: 5 },
          ]}
        >
          Your Data :{" "}
        </Text>
        <View style={styles.biodataContainer}>
          <View style={styles.bioRow}>
            <BioItem title='Gender' content={this.state.bio.gender} />
            <BioItem
              title='Birthdate'
              content={this.state.bio.birthDate}
              flex={2}
            />
          </View>
          <View style={styles.bioRow}>
            <BioItem title='Body Weight' content={this.state.bio.weight} />
            <BioItem title='Body Height' content={this.state.bio.height} />
            <BioItem title='BMI' content={this.state.bio.bmi} />
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
                data={this.state.bio.allergies}
                renderItem={({ item }) => (
                  <Text style={{ width: "33%", margin: 10 }}>{item}</Text>
                )}
                numColumns={3}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "flex-end", marginTop: 5 }}>
            <TouchableHighlight
              style={[styles.buttonMin]}
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
    this.formChange = this.formChange.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.toggleAllergy = this.toggleAllergy.bind(this);
  }

  state = {
    bio: this.props.bio,
    test: "",
    datePickerVisible: false,
    dateVisual: this.props.bio.birthDate,
    dateObj: this.props.bio.birthDateObj || new Date(),
  };

  formChange(text, title) {
    let bio = this.state.bio;
    // console.log(text);
    if (title === "Gender") bio.gender = text;
    else if (title === "Body Weight") bio.weight = text;
    else bio.height = text;
    this.setState({ bio });
    // console.log(this.state);
  }

  toggleDatePicker() {
    let datePickerVisible = !this.state.datePickerVisible;
    this.setState({ datePickerVisible });
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

  changeDate(event, date) {
    let bio = this.state.bio;
    date = this.formatDate(date);
    bio.birthDate = date.dateVisual;
    bio.birthDateObj = date.dateObj;
    // console.log("Date changed..");
    // console.log(date);
    // console.log(bio);
    this.setState({
      datePickerVisible: false,
      bio,
    });
  }

  toggleAllergy(name) {
    // console.log("Toggle allergy");
    // console.log(name);
    let bio = this.state.bio;
    let allergyData = bio.allergies;
    if (allergyData.includes(name)) {
      allergyData = allergyData.filter((row) => row != name);
    } else {
      allergyData.push(name);
    }
    bio.allergies = allergyData;
    this.setState({ bio });
  }

  render() {
    let bio = this.state.bio;
    return (
      <ScrollView style={styles.modalView}>
        <View style={stylesGlobal.modalTitle}>
          <Text style={stylesGlobal.modalTitleText}>Your Data</Text>
          <TouchableHighlight
            onPress={() => this.props.setModalVisible(false)}
            style={stylesGlobal.modalClose}
          >
            <MaterialCommunityIcons
              name={"close"}
              size={30}
              color={color.p_red}
            />
          </TouchableHighlight>
        </View>
        {this.state.datePickerVisible && (
          <DateTimePicker
            testID='dateTimePicker'
            value={bio.birthDateObj}
            mode={"date"}
            is24Hour={true}
            display='default'
            onChange={this.changeDate}
          />
        )}
        <BioForm
          title='Gender'
          content={this.state.bio.gender}
          onChange={this.formChange}
          placeholder={"gender"}
        />
        <BioForm
          title='Birthdate'
          content={this.state.bio.birthDate}
          onChange={this.formChange}
          placeholder={"birthdate"}
          toggleDatePicker={this.toggleDatePicker}
        />
        <BioForm
          title='Body Weight'
          content={this.state.bio.weight}
          onChange={this.formChange}
          placeholder={"weight"}
        />
        <BioForm
          title='Body Height'
          content={this.state.bio.height}
          onChange={this.formChange}
          placeholder={"height"}
        />
        <Allergies
          database={this.props.allergiesDB}
          selected={this.state.bio.allergies}
          toggleAllergy={this.toggleAllergy}
        />
        <TouchableHighlight
          style={[styles.openButton, { marginBottom: 50 }]}
          onPress={() => this.props.updateBio(this.state.bio)}
        >
          <Text style={styles.textStyle}>{`Save`}</Text>
        </TouchableHighlight>
      </ScrollView>
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
    if (this.props.title === "Birthdate") {
      return (
        <View style={styles.bioForm}>
          <Text style={styles.bioFormTitle}>{`${this.props.title}:`}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.bioFormInput,
                {
                  flex: 3,
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                },
              ]}
            >
              {this.props.content}
            </Text>
            <TouchableHighlight
              style={{ flex: 1, alignItems: "center" }}
              onPress={() => this.props.toggleDatePicker()}
            >
              <MaterialCommunityIcons
                name='calendar'
                size={32}
                color={color.p_teal}
              />
            </TouchableHighlight>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.bioForm}>
          <Text style={styles.bioFormTitle}>{`${this.props.title}:`}</Text>
          <TextInput
            style={styles.bioFormInput}
            placeholder={this.props.placeholder}
            value={this.props.content}
            onChangeText={(text) => this.props.onChange(text, this.props.title)}
            keyboardType={"number-pad "}
          />
        </View>
      );
    }
  }
}

class Allergies extends React.Component {
  render() {
    let { selected, database } = this.props;
    let notSelected = database.filter((row) => !selected.includes(row));
    // console.log("Ini list allergynya");
    // console.log(selected, notSelected);
    let selectedAllergies = selected.map((row) => (
      <AllergyRow
        name={row}
        onPress={this.props.toggleAllergy}
        handlePress={row}
        selected={true}
        key={row}
      />
    ));
    let notSelectedAllergies = notSelected.map((row) => (
      <AllergyRow
        name={row}
        onPress={this.props.toggleAllergy}
        handlePress={row}
        selected={false}
        key={row}
      />
    ));
    return (
      <View style={{ width: "100%", height: 210 }}>
        <View style={{ height: 100 }}>
          <Text style={{ width: "100%", height: 25 }}>Allergies</Text>
          <View style={styles.allergyContainer}>
            <ScrollView>{selectedAllergies}</ScrollView>
          </View>
        </View>
        <View style={{ height: 100 }}>
          <Text style={{ width: "100%", height: 25 }}>Add Allergies</Text>
          <View style={styles.allergyContainer}>
            <ScrollView>{notSelectedAllergies}</ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

class AllergyRow extends React.Component {
  render() {
    let icon = this.props.selected ? (
      <MaterialCommunityIcons name='minus' size={16} color={color.p_red} />
    ) : (
      <MaterialCommunityIcons name='plus' size={16} color={color.p_teal} />
    );
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress(this.props.handlePress)}
      >
        <View style={styles.allergyRow}>
          <Text style={styles.allergyName}>{this.props.name}</Text>
          <View style={styles.allergyButton}>{icon}</View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  allergyContainer: {
    width: "100%",
    height: 75,
    borderRadius: 4,
    borderColor: color.p_teal,
  },
  allergyRow: {
    width: "100%",
    backgroundColor: color.p_lightBlue,
    height: 35,
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    padding: 0,
    borderRadius: 8,
  },
  allergyName: {
    flex: 3,
    color: color.f_dark,
    paddingHorizontal: 5,
  },
  allergyButton: {
    flex: 1,
    height: "100%",
    backgroundColor: color.f_light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  biodataContainer: {
    width: "100%",
    minHeight: dimension.height / 3,
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: color.p_teal,
    borderRadius: 8,
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
    fontWeight: "400",
  },
  bioContent: {
    fontSize: 24,
    color: color.f_light,
    fontWeight: "600",
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
    width: "100%",
    height: "60%",
    padding: 20,
    paddingHorizontal: 35,
    backgroundColor: color.p_white,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  openButton: {
    backgroundColor: color.p_teal, //#F194FF
    borderRadius: 20,
    height: 50,
    padding: 10,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
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
    color: color.p_teal,
    fontSize: 16,
    fontWeight: "800",
    width: "100%",
    height: 20,
  },
  bioFormInput: {
    backgroundColor: color.f_light,
    color: color.f_dark,
    height: 40,
    width: "100%",
    borderRadius: 8,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  bioForm: {
    height: 60,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
});

export { Biodata, BiodataModal };
