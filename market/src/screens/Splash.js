import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height



const Splash = ({ navigation }) => {

    useEffect(() => {
        handleToken()
    }, [])


    const handleToken = async () => {
        let token = await AsyncStorage.getItem("access_token")
        console.log(token)
        // let decodedToken = await jwtDecode(token)
        let decodedToken = {
            id: 15,
            username: "kminchelle",
            email: "kminchelle@qq.com",
            firstName: "Jeanne",
            lastName: "Halvorson",
            gender: "female",
            image: "https://robohash.org/Jeanne.png?set=set4",
            iat: 1710667020,
            exp: 1710670620
        }
        const date = new Date()
        let timeSecond = date.getTime() / 1000
        if (decodedToken.exp > timeSecond) {
            setTimeout(() => {
                navigation.navigate("Home")
            }, 1500);
        } else {
            setTimeout(() => {
                navigation.navigate("Login")
            }, 1500);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://okaneke.com/wp-content/uploads/2019/03/032319_1510_Bahesehirni2.png" }} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    image: {
        width: width,
        height: (height / 2),
        objectFit: "contain"
    }
})