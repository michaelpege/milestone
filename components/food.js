import React from "react";
import { StyleSheet, Text, View,ScrollView} from "react-native";


const food = [
  {
    id: "1",
    name: "Chicken Breast",
    portion: 100,
    restriction: [],
    tags: ["protein", "cal"],
    cal: 239,
    carbs: 0,
    fat: 14,
    fiber: 0,
    protein: 27,
  },
  {
    id: "2",
    name: "Chicken Breast",
    portion: 100,
    restriction: [],
    tags: ["protein", "cal"],
    cal: 239,
    carbs: 0,
    fat: 14,
    fiber: 0,
    protein: 27,
  },
];

class Food extends React.Component {
  state = {
    foodEaten: this.props.foodEaten,
  };
}

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

class FoodRow extends React.Component {
  render() {
    let qty = this.props.qty ? <Text>{"x" + this.props.qty}</Text> : "";
    return (
      <View style={styles.foodRow}>
        <View style={styles.foodName}>{qty}</View>
        <View styles={styles.foodOptions}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foodRow: {
    flexDirection: "row",
    width: "100%",
    height: 30,
  },
  foodName: {
    flex: 3,
  },
});

export { FoodEaten, FoodRecomendation };




