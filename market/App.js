import { StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App

const styles = StyleSheet.create({})