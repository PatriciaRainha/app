import React , { useState } from 'react';
import { StyleSheet, Text , View } from 'react-native';
import { CheckBox , Button } from 'react-native-elements';
import logo from './assets/logo.png'; 

export default function App() {
 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);


  
  return (
    <View style={styles.container}>
      <Text style={styles.menu}> 
         Barbecue Calculator
      </Text>
      <Text style={styles.info}> 
         Quantos adultos e crianças?
      </Text>
      <Text style={styles.info}> 
         Quais carnes serão servidas?
      </Text>
      <CheckBox
        center
        title="Carne Suína"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />

      <CheckBox
        center
        title="Carne Bovina"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      <CheckBox
        center
        title="Linguiça/Salsicha"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />

      <CheckBox
        center
        title="Coxinha da asa"
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />
    
      <Text style={styles.info}> 
         Acompanhamentos?
      </Text>
      <CheckBox
        center
        title="Arroz"
        checked={check5}
        onPress={() => setCheck5(!check5)}
      />

      <CheckBox
        center
        title="Maionese"
        checked={check6}
        onPress={() => setCheck6(!check6)}
      />
      <CheckBox
        center
        title="Pão de Alho"
        checked={check7}
        onPress={() => setCheck7(!check7)}
      />
      <Text style={styles.info}> 
         Quais bebidas serão servidas?
      </Text>
      <CheckBox
        center
        title="Refrigerante"
        checked={check8}
        onPress={() => setCheck8(!check8)}
      />

      <CheckBox
        center
        title="Suco"
        checked={check9}
        onPress={() => setCheck9(!check9)}
      />
      <CheckBox
        center
        title="Cerveja"
        checked={check10}
        onPress={() => setCheck10(!check10)}
      />
      <Button
                title="Calcular"
                buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                containerStyle={{
                  height: 90,
                  width: 250,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
    </View>
  );
  };
const styles = StyleSheet.create({
  container: {
    margin: 0,
	  padding: 0,
	  border: 0, 
    flex: 1,
    alignItems: 'center',
  },
  
  menu :{
    paddingBottom:20,
    color: '#FF0000', 
    fontSize: 50, 
  },
  info :{
  fontSize :25,
  fontWeight: 'bold',

  }
});