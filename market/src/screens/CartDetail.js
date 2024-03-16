import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const CartDetail = () => {
    const dispatch = useDispatch()
    const handleClear = () => {
        dispatch(clearCart())
    }
    const products = useSelector(state => state.cart.products)
    return (
        <View>
            <FlatList data={products} renderItem={({ item }) => <CartItem item={item} />} />
            <Button title='Clear Cart' onPress={handleClear} color={"red"} />
        </View>
    )
}

export default CartDetail

const styles = StyleSheet.create({})