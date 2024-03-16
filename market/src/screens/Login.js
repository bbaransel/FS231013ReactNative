import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("kminchell")
    const [password, setPassword] = useState("0lelplR")
    const handleLogin = async () => {
        let requestObject = {
            username: username,
            password: password
        }
        try {
            await axios.post("https://dummyjson.com/auth/login", requestObject)
                .then(res => console.log(res))

        } catch (error) {
            console.log("Login error:", error)
        }
    }
    return (
        <View>
            <Text>Login</Text>
            <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder='Username' />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry={true} />
            <Button title='Login' onPress={() => handleLogin()} />
            {/* <Button title='Go To Home' onPress={() => navigation.navigate('Home')} /> */}
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})