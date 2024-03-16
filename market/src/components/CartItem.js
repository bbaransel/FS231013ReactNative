import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'

const CartItem = ({ item }) => {

    return (
        <>
            <ListItem bottomDivider>
                <Avatar
                    rounded
                    source={{ uri: item.thumbnail }}
                />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                    <ListItem.Title>{item.price}$</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </>
    )
}

export default CartItem

const styles = StyleSheet.create({})