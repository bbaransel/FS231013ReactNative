import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(4, "Username too short"),
    password: Yup.string().required("Password is required").min(4, "Password too short").max(20, "Password too long")
})

const LoginFormik = ({ navigation }) => {

    const handleLogin = async (values) => {

        try {
            await axios.post("https://dummyjson.com/auth/login", values)
                .then(res => {
                    if (res.status === 200) {
                        navigation.navigate("Home")
                        Toast.show({
                            type: "success",
                            text1: "Welcome"
                        })
                    }
                })
            console.log("worked")

        } catch (error) {
            console.log("Login error:", error)
            if (error.response) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: "Something went wrong. Please try again"
                })
            }

        }
    }
    return (
        <View>
            <Formik initialValues={{ username: "kminchelle", password: "0lelplR" }} onSubmit={(values) => handleLogin(values)} validationSchema={loginSchema}>
                {({ handleChange, values, handleSubmit, handleBlur, errors, touched }) => (
                    <>
                        <Text>Login</Text>
                        <TextInput style={styles.input} value={values.username} onChangeText={handleChange("username")} placeholder='Username' keyboardType='email-address' onBlur={handleBlur('username')} />
                        {errors.username && touched.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
                        <TextInput style={styles.input} value={values.password} onChangeText={handleChange("password")} placeholder='Password' secureTextEntry={true} onBlur={handleBlur('password')} />
                        {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                        <Button title='Login' onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            {/* <Button title='Go To Home' onPress={() => navigation.navigate('Home')} /> */}
        </View>
    )
}

export default LoginFormik

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    errorText: {
        color: "red",
        paddingLeft: 10
    }
})