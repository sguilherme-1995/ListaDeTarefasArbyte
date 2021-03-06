import { View, Text, Alert, Button, StyleSheet, AsyncStorage } from "react-native"
import React from 'react';
import loginUsuario from './../API/Logar'

export default Logout = ({ navigation }) => {
    const alertaSair = () => {
        Alert.alert(
            'Você deseja sair da sua conta?',
            'Logout',
            [
                { text: 'Não', onPress: () => { navigation.navigate('TelaTarefas') } },
                { text: 'Sim', onPress: () => { 
                    AsyncStorage.setItem('@email', JSON.stringify(null))
                    navigation.navigate('TelaLogin')
                    
                } },
            ]
        )

    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <View style={styles.buttons}>
                <Button color='#1631be' title="Sair da Conta" onPress={() => alertaSair()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#edcf4a',

    },
    buttons: {

        width: "90%",
        margin: 20

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})

const mapToStateProps = (store) => {
    return {
        tarefaRed: store.tasks,
        token: store.token
    }
}