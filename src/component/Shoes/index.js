import React from 'react';
import { View,Text,TouchableOpacity,Image,StyleSheet } from 'react-native';

export default function Shoes(props) {
    function filterDesc(desc){
        if(desc.length <27){
            return desc
        }
        return`${desc.substring(0,25)}...`;

    }
 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
    <Image
    source={props.img}
    style={styles.ShoesImg}
    />
    <Text style={styles.ShoesText}>{filterDesc(props.children)}</Text>
    <View opacity={0.4}>
        <Text style={styles.ShoesText}>{props.cost}</Text>
    </View>
    
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    container:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    ShoesImg:{
        width:175,
        height:175,

    },
    ShoesText:{
        fontSize:18
    }
})