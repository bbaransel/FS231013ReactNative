import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
const CardComponent = ({ item }) => {

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(item))
    }

    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={{
                uri: item.thumbnail
            }} />
            <Text>{item.price}$</Text>
            <Button title='Add to cart' onPress={handleCart} />
        </Card>
    )
}

export default CardComponent

const styles = StyleSheet.create({})