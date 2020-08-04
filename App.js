import React from 'react';
import { Text, View } from 'react-native';
import {Biodata} from './components/biodata';

class App extends React.Component{
  render(){
    let data = {
      nama : "Alwan",
      umur : 19,
    };
    return(
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Biodata data={data}/>
      </View>
    )
  }
}
export default App;
