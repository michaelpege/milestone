import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Biodata } from "./components/Biodata";
import { FoodEaten } from "./components/Food";

class App extends React.Component {
  render() {
    let data = {
      nama: "Alwan",
      umur: 19,
    };
    return (
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <Biodata data={data} />
        <FoodEaten />
      </SafeAreaView>
    );
  }
}
export default App;
