import React, {useState} from 'react'
import {Button, View, TextInput, StyleSheet, Text, Switch} from 'react-native'

function SignUpScreen(props) {
    return (
        <View>
            <Text>Welcome to HomeScreen</Text>
            <Button
                title='Sign In!'
                onPress = {function () {
                    props.navigation.navigate("SignInScreen");
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
    },
})

export default SignUpScreen;