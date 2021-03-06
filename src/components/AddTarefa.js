import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
} from 'react-native'
import moment from 'moment'

const initialState = { desc: '', completed: false }

export default class AddTarefa extends Component {
    state = { ...initialState }

    save = () => {
        if (!this.state.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Informe uma descrição para a tarefa!')
            return
        }
        const data = { ...this.state }
        this.props.onSave(data)
        this.setState({ ...initialState })
    }

    

    render() {
        
        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa!</Text>
                    <TextInput placeholder='Descrição...' style={styles.input}
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} maxLength={25}/>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: '#1631be'
    },
    header: {
        backgroundColor: '#1631be',
        color: 'white',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    },
    date: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center'
    }
})
