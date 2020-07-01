import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Image, AsyncStorage, Alert } from "react-native"
import arbyte from './../../assets/arbyte.png'
import loginUsuario from '../API/Logar';

export default TelaLogin = ({route, navigation}) => {
    const [emailUsu, setEmailUsu] = useState('')

    const onPress = () => {
        const email = emailUsu
        if(email === ''){
            Alert.alert('Insira um e-mail valido!')
        }else{
            loginUsuario(email)
            .then(res => {
                AsyncStorage.setItem('@email', JSON.stringify(email))
                const token = res.token
                const nome = res.user.fullName
                const name = res
                AsyncStorage.setItem('token', JSON.stringify(token))
                AsyncStorage.setItem('nome', JSON.stringify(nome))
                AsyncStorage.setItem('user', JSON.stringify(name))
                navigation.push("TelaTarefas",{nome: nome, token: token})
             })
            .catch(()=>{Alert.alert("Insira uma conta existente","Ou crie uma conta em 'CADASTRAR'!")})
            }
    }
    return (
        <View style={styles.container}>
            <Image source={arbyte} style={styles.image} />
            <TextInput style={styles.input} placeholder='Informe seu E-mail' value={emailUsu} onChangeText={(text) => { setEmailUsu(text) }} />
            <View style={styles.buttons}>
                <Button color='#1631be' onPress={() => onPress()} title="Login" />
                <Button color='#1631be' onPress={() => navigation.navigate('TelaCadastro')} title="Cadastro" />
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