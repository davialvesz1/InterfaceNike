import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SizeShoes(props) {
 return (
   <View style = {[styles.container,{backgroundColor:props.bgcolor || '#fff'}]}>
    <TouchableOpacity>
    <Text style={[styles.text, {color: props.color || '#c9c'}]}>
        {props.children}
    </Text>
    </TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
  container:{
    width:150,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    borderColor:'#e6e6e6',
    marginHorizontal:10

  },
  text:{
    color:'#fff',
    fontSize:18,
    textAlign:'center',
    textAlignVertical:'center',


  }
})