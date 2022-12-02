import React from 'react';
import { View,Text,StyleSheet,Dimensions, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Ball(props) {
 return (
   <TouchableOpacity
    style = {[styles.container,{backgroundColor:props.color}]}>
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width*0.050,
        borderRadius:Dimensions.get('window').width *0.050/2,
        height:Dimensions.get('window').width*0.050,
        marginHorizontal:'2.5%',
        elevation:5,
    }
    
    

})