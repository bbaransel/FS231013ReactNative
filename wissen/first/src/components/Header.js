import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Header = (props) => {

    const [fullName, setFullName] = useState("Oğuzhan")

    let name = "Oğuzhan"
    const changeName = () => {
        // name = "Oğuzhan Varlı"
        setFullName("Oğuzhan Varlı")
    }
    return (
        <View>
            <Text>{props.isim}</Text>
            <Text style={styles.name}>{fullName}</Text>
            <Button title='Click' onPress={changeName} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    }
})