import 'react-native-gesture-handler'
import { View, Text, Dimensions } from "react-native"
import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import TarefasHoje from "./TarefasHoje";
import Logout from "./Logout";
const Drawer = createDrawerNavigator();

export default TelaTarefas=()=>{
    return(
        <Drawer.Navigator 
        initialRouteName="TarefasDeHoje">
        <Drawer.Screen name="TarefasDeHoje" component={TarefasHoje} />
        <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}