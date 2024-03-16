import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import Main from './src/components/Main'
import Footer from './src/components/Footer'

const App = () => {
    let headerText = "Merhaba Ben Header"
    let mainText = "Merhaba Ben Main"
    let footerText = "Merhaba Ben Footer"


    return (
        // <View>
        //     <Text style={styles.myText}>App</Text>
        // </View>
        <>
            <Header isim={headerText} />
            <Main mainText={mainText} />
            <Footer footerText={footerText} />
        </>
    )
}

export default App

const styles = StyleSheet.create({
    myText: {
        fontSize: 40,
        color: "red"
    }
})

//  rnfes

// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export class App extends Component {
//   static propTypes = {}

//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App