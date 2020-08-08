import React from "react";
import { StyleSheet, Text, View,ScrollView} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../assets/style";

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
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.deleteRow= this.deleteRow.bind(this);
  }
  state = {
    database: food,
    selected: [],
  };
  addRow(name) {
    let selected = this.state.selected;
    if (!selected.includes(name)) {
      selected.push(name);
    }
    this.setState({ selected });
  }
  deleteRow(name) {
    let selected = this.state.selected;
    if (selected.includes(name)) {
      selected = selected.filter((row) => row != name);
    }
    this.setState({ selected });
  }
  render() {
    let { selected, database } = this.state;
    let notSelected = database.filter((row) => !selected.includes(row));
    return (
     <View style={styles.container}>
        <Text>{"\n"}</Text>
        <ScrollView>
        <Text style={{ fontWeight: 'bold', fontSize : 20, marginLeft: 50}}>Food Consumed</Text>
        <Text>{"\n"}</Text>
          <View>
            <View style={styles.containerIn}> 
              <FoodRow  selected={true}/>
            </View>
          </View>
          </ScrollView>
      </View> 
    );
  }
}

class FoodRecomendation extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{"\n"}</Text>
          <Text style={{ fontWeight: 'bold', fontSize : 20, marginLeft: 50}}>Recommendations</Text>
          <Text>{"\n"}</Text>
          <View>
            <View style={styles.containerIn}> 
              <FoodRow selected={false}/>
            </View>
          </View>
        </ScrollView>
    </View> 
    );
  }
}

class FoodRow extends React.Component {
  render() {
    let whitebar = this.props.selected ? (
      <View style={styles.whiterow}>
        <MaterialCommunityIcons style ={{flex:1,marginLeft:20,paddingRight:20}}
          name='pencil'
          color = {color.white}
          size={20}
        />
        <MaterialCommunityIcons style ={{flex:2}}
          name='close'
          color = {color.white}
          size={20}
        />
      </View>)  : (
        <View style={styles.whiterow}>
        <MaterialCommunityIcons style ={{flex:1,marginLeft:20,paddingRight:20}}
          name='information'
          color = {color.white}
          size={20}
        />
        <MaterialCommunityIcons style ={{flex:2}}
          name='plus'
          color = {color.white}
          size={20}
        />
      </View>
      )
    return(
    <View style={styles.row}>
      <View style={styles.feature}>
        <Text style={{fontWeight: 'bold'}}>Chicken Breast</Text>
      </View>
      {whitebar}
    </View>

    )
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "white",
    flexDirection : "column"
  },
  containerIn:{
    width : 300, 
    height : 400,
    borderRadius:8,
    marginLeft:50,
    marginRight :50, 
    backgroundColor : 'powderblue',
  },
  row: {
     flexDirection:"row",
      width : 250, 
      height : 50,
      borderRadius:8, 
      marginLeft:25,
      marginRight :25, 
      marginTop : 20,
      backgroundColor : 'steelblue',
  },
  feature: {
    flex:5,
    marginTop:12,
    marginLeft:10,
  },
  whiterow : {
    flex:3,
    height:50,
    width:"100%",
    backgroundColor:'white',
    borderRadius:8,alignSelf : 'flex-end',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
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






