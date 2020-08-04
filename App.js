import React from "react";
import { Text, View } from "react-native";
import { Biodata } from "./components/biodata";

class App extends React.Component {
  render() {
    let data = {
      nama: "pege",
      umur: 19,
    };
    return (
      <View>
        <Text>YEY!!!!</Text>
        <Biodata data={data} />
      </View>
    );
  }
}
export default App;
