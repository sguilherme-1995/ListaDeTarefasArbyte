import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, Alert } from "react-native"
import arbyte from './../../assets/arbyte.png'
import cadastrarUsuario from './../API/Cadastrar'


export default TelaCadastro = ({ navigation }) => {
    const [nomeUsu, setNomeUsu] = useState('')
    const [emailUsu, setEmailUsu] = useState('')

    const botaoLogin = (nome, email) => {
        if(nome == '' && email == ''){
            Alert.alert('Insira dados válidos!')
        }else{
            cadastrarUsuario(nome, email)
            .then(res => {
                navigation.navigate('TelaLogin')
            })
            .catch(err => console.log(err))
        }
            //     cadastrarUsuario(nomeUsu, emailUsu),  
        // console.log(nomeUsu, emailUsu)
    }

    return (
        <View style={styles.container}>
            <Image source={arbyte} style={styles.image} />
            <TextInput style={styles.input} placeholder='Digite seu nome' value={nomeUsu} onChangeText={(text) => { setNomeUsu(text) }} />
            <TextInput style={styles.input} keyboardType={'email-address'} placeholder='Digite seu e-mail' value={emailUsu} onChangeText={(text) => { setEmailUsu(text) }} />
            <View style={styles.buttons}>
                <Button color='#1631be' onPress={() => botaoLogin(nomeUsu, emailUsu)} title="Cadastrar" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edcf4a'
    },

    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
        textAlign: 'center'

    },

    image: {
        width: 250, height: 60, marginBottom: 50

    },
    buttons: {

        width: "90%",
        margin: 20

    }
})