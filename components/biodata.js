import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Biodata extends React.Component {
  render() {
    let { nama, umur } = this.props.data;
    return (
      <View>
        <Text>{`Hello ${nama}`}</Text>
        <Text>{"Umurku :  " + umur}</Text>
      </View>
    );
  }
}

export { Biodata };
