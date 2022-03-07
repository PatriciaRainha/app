import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

export default function Result() {
    return (
        <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Barbecue Calculator
          </Text>
          <Text style={styles.title2}>
            Resultado: 
          </Text>
          <Button
                    title="Voltar"
                    buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                    containerStyle={{
                        height: 90,
                        width: 250,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: '#000000',  fontWeight: "bold", fontSize:25}}
                />
  
        </ScrollView >
      </View>
  
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: "#eaeaea",
    },
    title :{
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"

    },
    title2 :{
        paddingVertical: 8,
        color: "#20232a",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold"
    
        },
  });
