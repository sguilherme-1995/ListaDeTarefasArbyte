import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-swipeable'
import EditaTarefa from '../API/EditaTarefa'

export default props => {
    let check = false
    if(props.completed !== false){
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20} color="white"></Icon>
            </View>
        )
    }else{
        check = <View style={styles.pending}/>
    }

    const descStyle = props.completed !== false ?
        {textDecorationLine: 'line-through'} : {}

        const leftContent = (
            <View style={styles.exclude}>
                <Icon name='trash' size={20} color='white'/>
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )

        const rightContent = [
            <TouchableOpacity style={[styles.exclude, {justifyContent:'flex-start', padding:20,}]}
            onPress={() => props.onDelete(props.id)}>
                <Icon name='trash' size={30} color='#FFF'/>
            </TouchableOpacity>,
        ]    

        mudaTarefa = () => {
            const [texto, setTexto] = useState(props.description)
            return (
                <View style={[styles.description, descStyle]}>
                
                <TextInput style={[styles.input, descStyle]}
                        onChangeText={desc => {setTexto( desc )}}
                        value={texto} 
                        onEndEditing={(res) => {EditaTarefa(props.token, props.id, res.nativeEvent.text)}}
                        maxLength={25}
                        />
                    </View>

            )
        }

        return(
        <Swipeable leftActionActivationDistance={200}
        onLeftActionActivate={() => props.onDelete(props.id)}
        leftContent={leftContent} rightButtons={rightContent}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                    <View style={styles.checkContainer}>{check}</View>
                </TouchableWithoutFeedback>
                <View>
                        {mudaTarefa()}
                </View>
            </View>
        </Swipeable>
        )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',        
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        marginLeft: 10,
        color: 'black',
        fontSize: 15,

    },
    date: {
        marginLeft: 10,
        color: '#AAA',
        fontSize: 12,
    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    excludeText: {
        color: '#FFF',
        fontSize: 20,
        margin: 10
    },
    input: {
        width: 260,
        height: 40,
        // marginTop: 10,
        marginLeft: -15,
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    },
})

