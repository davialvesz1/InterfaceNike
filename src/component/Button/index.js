import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={Styles.container}>
    <TouchableOpacity style={Styles.BtnContainer}>
        <Text style={Styles.title}>COMPRAR</Text>
    </TouchableOpacity>
   </View>
  );
}

const Styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    BtnContainer:{
        width:'90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius:5,
        marginVertical:'5%',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:17,
        color:'#fff'
    }
})