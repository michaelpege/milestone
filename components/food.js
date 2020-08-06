import React from "react";
import { StyleSheet, Text, View,ScrollView} from "react-native";


class FoodEaten extends React.Component {
  render() {
    return (
      
      <ScrollView>
      <Text style={{ fontWeight: 'bold', fontSize : 20, marginLeft: 50}}>Food Consumed</Text>
      <Text>{"\n"}</Text>
      <View>
        <View style={{ width : 300, height : 400,borderRadius:8,marginLeft:50,marginRight :50, backgroundColor : 'powderblue'}}> 
          <View style={{ flexDirection:"row",width : 250, height : 50,borderRadius:8, marginLeft:25,marginRight :25, marginTop : 20,backgroundColor : 'steelblue'}}>
            <View style={{flex:5,marginTop:12,marginLeft:10}}>
              <Text style={{fontWeight: 'bold'}}>Chicken Breast</Text>
            </View>
            <View style={{flex:3,height:50,width:100,backgroundColor:'white',borderRadius:8,alignSelf : 'flex-end'}}>

            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

class FoodRecomendation extends React.Component {
  render() {
    
    return (
      <View>
        <Text>Ini bagian makanan yang direkomendasikan</Text>
      </View>
    );
  }
}

export { FoodEaten, FoodRecomendation };

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
  },

});




