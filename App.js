import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, StatusBar } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaTarefas from './src/TelasDeTarefas/TelaTarefas';
import TelaLogin from './src/TelasLogin/Login';
import TelaCadastro from './src/TelasLogin/Cadastro';
import { reducer } from './src/reducers/reducer';

const store =  createStore(reducer)
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar/>
        <Stack.Navigator 
        initialRouteName="TelaLogin"
        screenOptions={{ headerShown: false}}>
          <Stack.Screen name="TelaLogin" component={TelaLogin}/>
          <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
          <Stack.Screen name="TelaTarefas" component={TelaTarefas} />
        </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
