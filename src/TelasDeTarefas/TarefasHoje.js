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
import { adicionaTarefa } from "../actions/action";
import { connect } from 'react-redux'

class TarefaHoje extends Component {

    state = {
        tasks: [],
        visibleTask: [],
        showDoneTasks: true,
        showAddTask: false,
    }

    addTask = task => {
        const tasks = [...this.state.tasks]
        const { dispatch, tarefaRed } = this.props
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.date,
            doneAt: null,
        })
        this.setState({ tasks, showAddTask: false }, this.filterTask)
        dispatch(adicionaTarefa(tasks))
        
    }
    
    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTask)
    }
    
    filterTask = () => {
        let visibleTask = null
        if (this.state.showDoneTasks) {
            visibleTask = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTask = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTask })
        AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))

    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTask)
    }

    componentDidMount = async () => {
        const data = await AsyncStorage.getItem('tasks')
        const tasks = JSON.parse(data) || []
        this.setState({ tasks }, this.filterTask)
    }

    toggleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task = { ...task }
                task.doneAt = task.doneAt ? null : new Date()
            }
            return task
        })

        this.setState({ tasks }, this.filterTask)
    }
    render() {
        { console.log() }
        return (
            <View style={styles.container}>
                <AddTarefa isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                ></AddTarefa>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={'white'}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.visibleTask}
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
        tarefaRed: store.tasks
    }
}

export default connect(mapToStateProps)(TarefaHoje)