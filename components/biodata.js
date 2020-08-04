import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Biodata extends React.Component {
  render() {
    let bio = this.props.data;
    return (
      <View>
        <Text>{`Halo aku ${bio.nama}. Umurku ${bio.umur}`}</Text>
      </View>
    );
  }
}

export { Biodata };
