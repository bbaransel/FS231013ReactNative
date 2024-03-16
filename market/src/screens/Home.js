import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComponent from '../components/CardComponent'
import Cart from '../components/Cart'


const Home = ({ navigation }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        try {
            axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products))
        } catch (error) {
            console.log('Get Products Error', error)
        }
    }

    const goToDetail = () => {
        navigation.navigate("CartDetail")
    }

    return (
        <View>
            <Text>App</Text>
            <Cart goToDetail={goToDetail} />
            <FlatList
                //  ListHeaderComponent={
                //     <View>
                //         <Button title='Get Products' onPress={getData} color={'purple'} />
                //     </View>
                // } 
                data={products} renderItem={({ item }) => <CardComponent item={item} />} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})