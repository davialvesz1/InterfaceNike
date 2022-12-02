import 'react-native-gesture-handler'
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

//import componet shoes
import Shoes from '../../component/Shoes';
//import fonts
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View styles={styles.header}>
        <Image source={require('../../Assets/banner.png')}
          style={styles.Image} />
        <View style={styles.TextContainer}>
          <Text style={styles.text}>TÊNIS </Text>
          <Text style={[styles.text, { color: '#cececf' }]}>•</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name='filter-list'
              size={24}
              color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../Assets/1.png')} cost='R$ 149.90' onClick={() => navigation.navigate('Details')}>Nike AirForce</Shoes>
          <Shoes img={require('../../Assets/2.png')} cost='R$ 250.00' onClick={() => navigation.navigate('Details')}>Nike Airmax</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../Assets/teste1.png')} cost='R$950.00' onClick={() => navigation.navigate('Details')}>Nike Green</Shoes>
          <Shoes img={require('../../Assets/Blue.png')} cost='R$ 575.00' onClick={() => navigation.navigate('Details')}>Nike Blue</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../Assets/outrotenis.png')} cost='R$950.00' onClick={() => navigation.navigate('Details')}>Nike Jordan Brasil</Shoes>
          <Shoes img={require('../../Assets/NikeAirmax.png')} cost='R$ 250.00' onClick={() => navigation.navigate('Details')}>Nike Shock</Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8
  },
  Image: {
    width: "100%"
  },
  TextContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 30,
    marginHorizontal: '1%'

  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  }
})
