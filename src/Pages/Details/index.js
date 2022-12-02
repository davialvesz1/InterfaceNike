import React from 'react';
import { View,Text,Image,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import Ball from '../../component/Ball';
import SizeShoes from '../../component/SizeShoes'
import navigation from '@react-navigation/native'
import Button from '../../component/Button';
import Footer from '../../component/Footer';
export default function Details({}) {

 return (
   <ScrollView styles = {styles.container}>
    <Image source={require('../../Assets/detail.png')}
    style = {styles.image}
    resizeMode='cover'/>

    <View>
      <View>
        <Text style={[styles.title, {fontSize:30} ]}>Nike AirForce</Text>
      </View>
      <View opacity = {0.5}>
        <Text style={[styles.title,{fontSize:25} ]}>R$ 250.00</Text>
      </View>
      <View style={styles.ballContainer}>
        <Ball color = '#ddd'/>
        <Ball color = '#000'/>
        <Ball color = '#fb6e53'/>
      </View>
      <View style = {styles.Size}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeShoes bgcolor='#17181a' color='#fff'>41</SizeShoes>
          <SizeShoes>40</SizeShoes>
          <SizeShoes>39</SizeShoes>
          <SizeShoes>38</SizeShoes>

        </ScrollView>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>Nike AirForce</Text>
        <Text style={styles.textContent}>O Nike Air Force é uma das grandes inovações da marca que se tornaram clássicos nas vitrines. Ele apresenta um cabedal diferente e unidades Nike Air na entressola, para que o amortecimento seja ainda mais eficiente e você tenha o máximo de desempenho em suas atividades e exercícios físicos.</Text>
        <Text style={styles.textList}>
          -Categoria: Amortecimento
        </Text>
        <Text style={styles.textList}>
          -Material: Mash
        </Text>
      </View>
    <Button/>
    <View style={styles.line}/>
    <Footer/>
    </View>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#fff'
  },
  image:{
    width:'100%',
  },

  title:{
    fontFamily:'Anton_400Regular',
    paddingHorizontal:'2%', 
  },
  ballContainer:{
    flexDirection:'row',
    marginVertical:'7%'
  },
  Size:{
    flexDirection:'row',
    width:'100%'
  },
  textContent:{
    fontSize:16,
    lineHeight:25,
    marginVertical:'2%',
    paddingHorizontal:'2%',
  },
  textTitle:{
    fontSize:22,
    marginVertical:'2%',
  },
  textList:{
    fontSize:16,
    lineHeight:25
  },
  line:{
    borderWidth:1,
    borderBottomColor:'#ddd',
    marginVertical:'2%'
  }

})


