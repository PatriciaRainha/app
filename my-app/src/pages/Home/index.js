import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

export default function Home() {

    const [number, onChangeNumber] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
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
            <ScrollView>
                <Text style={styles.title}>
                    Barbecue Calculator
                </Text>
                <Text style={styles.info}>
                    Quantos adultos?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=""
                    keyboardType="numeric"
                />
                <Text style={styles.info}>
                    Quantas crianças?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    placeholder=""
                    keyboardType="numeric"
                />
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
                    titleStyle={{ color: '#000000', fontWeight: "bold", fontSize: 25 }}
                />

            </ScrollView >
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#eaeaea",
    },
    title: {
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    info: {
        textAlign: 'center',
        flex: 1,
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
    }
});