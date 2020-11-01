import React, {useState} from 'react'
import {Button, View, TextInput, StyleSheet, Text, Switch} from 'react-native'

function HomeScreen() {
    return (
        <View>
            <Text>Welcome to HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
    },
})

export default HomeScreen;