import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'

export default class Header extends Component{
    
    render(){
        return(
            <View style={{
                height: 100,
                backgroundColor: "#da552f",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => this.props.navigation ? this.props.navigation.navigate("Main") : ''} >
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#fff",
                    marginTop: 30
                }}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

StatusBar.setBackgroundColor('#da552f')
StatusBar.setBarStyle("light-content")