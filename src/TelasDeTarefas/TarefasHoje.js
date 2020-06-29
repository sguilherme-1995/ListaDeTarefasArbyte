import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from "react-native"
import React, { useState, Component } from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from './../../assets/todayImage.jpg'
import Tarefa from '../components/Tarefa'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton, { } from 'react-native-action-button'
import AddTarefa from '../components/AddTarefa'
import { adicionaTarefa, adicionaToken } from "../actions/action";
import { connect } from 'react-redux'
import cadastrarTarefa from './../API/Tarefas'
import deletaTarefa from './../API/DeletarTarefa'
import atualizaTarefa from './../API/AtualizaTarefas'
import buscaTarefa from './../API/BuscaTarefas'

class TarefaHoje extends Component {
    state = {
        tasks: [],
        showAddTask: false,
        token: '',
        user: {},
        tarefaFeitas: []
    }

    // tarefasFeitas=()=>{
    //     const feitas = this.state.tarefaFeitas
    //     const tarefas = this.state.tasks
    //     tarefas.map(completa=> {
    //         if(completa.completed == true){
    //             feitas.push(completa)
    //             console.log(feitas)
    //         }
    //     })
    // }

    addTask = task => {
        const tasks = [...this.state.tasks]
        console.log(tasks)
        const { dispatch, tarefaRed } = this.props


        cadastrarTarefa(task.desc, this.state.token)
            .then(resposta => {
                console.log(resposta.id)
                tasks.push(resposta)
                this.setState({
                    tasks
                })
                console.log("TarefaHoje -> resposta", this.state.tasks)
            })
            .catch(e => console.log(e.response.data))
        dispatch(adicionaTarefa(tasks))
        this.setState({showAddTask: false})

    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => {
            task.id !== id
            if(task.id === id){
                deletaTarefa(this.state.token, task.id)
            }
        })
        buscaTarefa(this.state.token)
            .then(res => {
                this.setState({tasks: res})
            })
        console.log(tasks)
    }

    filterTask = () => {
        atualizaTarefa( this.state.token, this.state.tasks.id, this.state.tasks.completed)
            .then(resposta => {
                console.log(resposta)
            }).catch(err => console.log(err))
    }

    componentDidMount = async () => {
    const {navigation} = this.props
        const tokenData = await AsyncStorage.getItem('token')
        const token = JSON.parse(tokenData)
        const userData = await AsyncStorage.getItem('user')
        const user = JSON.parse(userData)
        this.setState({ token })
        buscaTarefa(token)
            .then(res => {
                this.setState({tasks: res})
            })
        this.setState({ user }
            )
            console.log("TarefaHoje -> componentDidMount -> user", user)
    }

    toggleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                atualizaTarefa(this.state.token, task.id, task.completed)
                task.completed = !task.completed
            }
            return task
        })

        this.setState({ tasks }
        )

    }
    render() {
        return (
            <View style={styles.container}>
                <AddTarefa isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                ></AddTarefa>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                    {/* <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.tarefasFeitas}>
                            <Icon name={this.state.tarefaFeitas ? 'eye' : 'eye-slash'}
                                size={20} color={'white'}
                            />
                        </TouchableOpacity>

                    </View> */}
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>
                            <Tarefa {...item}
                                toggleTask={this.toggleTask}
                                onDelete={this.deleteTask}
                            />} />
                            

                </View>
                <ActionButton buttonColor={'red'}
                    onPress={() => { this.setState({ showAddTask: true }) }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taskContainer: {
        flex: 7,
    },
    iconBar: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

const mapToStateProps = (store) => {
    return {
        tarefaRed: store.tasks,
        token: store.token
    }
}

export default connect(mapToStateProps)(TarefaHoje)