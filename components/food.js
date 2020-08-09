import React from "react";
import { StyleSheet, Text, View,ScrollView, TouchableHighlight} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { dimension, color, stylesGlobal } from "../assets/style";

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
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.deleteRow= this.deleteRow.bind(this);
  }
  state = {
    foodEaten: this.props.foodEaten,
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
  render()
  {
    return(
      <View>
        <FoodEaten setModalVisible={this.props.setModalVisible }/>
        <FoodRecomendation setModalVisible={this.props.setModalVisible } />
      </View>
    )
  }
  
}

class FoodEaten extends React.Component {
 
  state = {
    database: food,
    selected: [],
  };
  
  render() {
    let { selected, database } = this.state;
    let notSelected = database.filter((row) => !selected.includes(row));
    return (
     <View style={styles.container}>
        <Text>{"\n"}</Text>
        <ScrollView>
        <Text style={{ fontWeight: 'bold', fontSize : 20, marginLeft: 50}}>Food Consumed</Text>
        <Text>{"\n"}</Text>
          <View style={{justifyContent: "center", alignItems : "center"}}>
            <View style={styles.containerIn}> 
              <FoodRow  selected={true} setModalVisible={this.props.setModalVisible }/>
            </View>
          </View>
          </ScrollView>
      </View> 
    );
  }
}

class FoodRecomendation extends React.Component {
  state = {
    database: food,
    selected: [],
  };
  render() {
    let { selected, database } = this.state;
    let notSelected = database.filter((row) => !selected.includes(row));
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{"\n"}</Text>
          <Text style={{ fontWeight: 'bold', fontSize : 20, marginLeft: 50}}>Recommendations</Text>
          <Text>{"\n"}</Text>
          <View>
            <View style={styles.containerIn}> 
              <FoodRow selected={false} setModalVisible={this.props.setModalVisible } />
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
        <TouchableHighlight  onPress = {()=>this.props.setModalVisible(true,'Food')}>
          <MaterialCommunityIcons style ={{flex:1,marginLeft:20,paddingRight:20}}
            name='pencil'
            color = {color.white}
            size={20}
          />
        </TouchableHighlight>
          <MaterialCommunityIcons style ={{flex:2}}
            name='close'
            color = {color.white}
            size={20}
          />
      </View>)  : (
        <View style={styles.whiterow}>
        <TouchableHighlight  onPress = {()=>this.props.setModalVisible(true,'FoodInfo')}>
        <MaterialCommunityIcons style ={{flex:1,marginLeft:20,paddingRight:20}}
          name='information'
          color = {color.white}
          size={20}
        />
        </TouchableHighlight>
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

class FoodModal extends React.Component {
  
  render()
  {
    return(
      <View style={styles.modalbox}>
        <Text style={stylesGlobal.modalTitleText}>Edit Your Meal</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.txt}>Name :</Text>
        <Text style={styles.txt}>Qty :</Text>
        <Text style={styles.txt}>Details :</Text>
        <Text style={styles.txt2}>Carbohydrate</Text>
        <Text style={styles.txt2}>Protein</Text>
        <Text style={styles.txt2}>Glucose</Text>
        <Text style={styles.txt2}>Fat</Text>
        <View style={styles.savebox}>
          <Text style={{alignSelf:"center",fontWeight:"bold",color:"white"}}>Save Changes</Text>
        </View>
      </View>
    )
  }
}

class FoodInfo extends React.Component {
  
  render()
  {
    return(
      <View style={styles.modalbox}>
        <Text style={stylesGlobal.modalTitleText}>Meal Info</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.txt}>Name :</Text>
        <Text style={styles.txt}>Qty :</Text>
        <Text style={styles.txt2}>Carbohydrate</Text>
        <Text style={styles.txt2}>Protein</Text>
        <Text style={styles.txt2}>Glucose</Text>
        <Text style={styles.txt2}>Fat</Text>
        <View style={styles.savebox}>
          <Text style={{alignSelf:"center",fontWeight:"bold",color:"white"}}>Ok, Cool!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "grey",
    flexDirection : "column"
  },
  containerIn:{
    width : 300, 
    height : 400,
    borderRadius:8,
    marginLeft:50,
    marginRight :50, 
    backgroundColor : color.p_teal,
  },
  row: {
     flexDirection:"row",
      width : 250, 
      height : 50,
      borderRadius:8, 
      marginLeft:25,
      marginRight :25, 
      marginTop : 20,
      backgroundColor : color.p_lightBlue,
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
  modalbox: {
    paddingTop : '10%',
    backgroundColor : 'white',
    width : 300,
    height : 400,
    alignItems : "center",
    justifyContent:"flex-start",
    borderRadius : 7,
  },
  txt : {
    alignSelf: "flex-start",
    marginLeft:"8%",
    paddingTop:"5%",
    fontWeight:'bold',
    fontSize :15,
  },
  txt2 : {
    alignSelf: "flex-start",
    marginLeft:"8%",
    paddingTop :"3%",
    color : color.p_teal,
    fontSize : 12,
  },
  savebox : {
    width : "50%",
    height : "10%",
    backgroundColor : color.p_teal,
    marginTop : "6%",
    justifyContent : "center",
    alignSelf : "center",
    borderRadius : 7,
  }
});

export { Food,FoodEaten, FoodRecomendation,FoodModal,FoodInfo };






