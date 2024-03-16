import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Main = (props) => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }


    let mainText = props.mainText
    return (
        <View>
            <Text>{mainText}</Text>
            <Text style={styles.counterText}>{counter}</Text>
            <Button title='-' onPress={decrement} />
            <Button title='+' onPress={increment} />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    counterText: {
        color: 'green',
        fontSize: 40,
        textAlign: "center"
    }
})