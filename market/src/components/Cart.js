import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = ({ goToDetail }) => {
    const cartNumber = useSelector(state => state.cart.value)
    return (
        <View style={styles.container}>
            <View style={styles.button} >
                <Button title={`${cartNumber}`} onPress={goToDetail} />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    button: {
        width: 200
    }
})