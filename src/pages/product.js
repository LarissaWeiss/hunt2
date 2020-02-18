import React from 'react'
import { View } from 'react-native'
import  { WebView }  from 'react-native-webview'
import Header from '../components/Header'

const Product = ({navigation}) => {
    
    return(
        <View style={{flex: 1}}>
        <Header text={navigation.state.params.product.title} navigation={navigation}/>
            <WebView  source={{ uri: navigation.state.params.product.url}}/>
       </View>
    )
}

export default Product
