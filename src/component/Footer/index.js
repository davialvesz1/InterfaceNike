import React from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
    <Text style={styles.title}>VOCE TAMBEM PODE GOSTAR</Text>
    <View style={styles.View}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={styles.margin}>
            <Shoes img={require('../../Assets/NikeAirmax.png')} cost='149.90'>Nike Shock</Shoes>

           </View>
           <View style={styles.margin}>
            <Shoes img={require('../../Assets/outrotenis.png')} cost='149.90'>Nike Jordan Brasil</Shoes>

           </View>
           <View style={styles.margin}>
            <Shoes img={require('../../Assets/Blue.png')} cost='575.00'>Nike Blue</Shoes>

           </View>


        </ScrollView>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    View:{flexDirection:'row'},
    margin:{marginHorizontal:10},
    title:{
        fontFamily:'Anton_400Regular',
        fontSize:24,
        paddingHorizontal:'2%',
        marginVertical:'2%'
    }


})