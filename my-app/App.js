import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.menu}> 
         Barbecue Calculator
      </Text>
      <Image source={logo} style={{ width: 310, height: 200 }} /> 

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
	  padding: 0,
	  border: 0, 
    flex: 1,
    alignItems: 'center',
  },
  menu :{
    backgroundColor: '#778899',
    color: '#000000', 
    fontSize: 40, 
  }
});