import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class foodEaten extends React.Component{
    render(){
        return(
            <View>
                <Text>Ini bagian makanan yang telah dimakan hari ini</Text>
            </View>
        )
    }
}

class foodRecomendation extends React.Component{
    render(){
        return(
            <View>
                <Text>Ini bagian makanan yang direkomendasikan</Text>
            </View>
        )
    }
}

export {foodEaten, foodRecomendation};