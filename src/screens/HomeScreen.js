import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Text, Switch} from 'react-native'
import {AuthContext} from "../provider/AuthProvider"
import { Button } from 'react-native-elements'

function HomeScreen() {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View>
                    <Text>Welcome to HomeScreen</Text>
                    <Button
                        type = 'outline'
                        title = 'logout!'
                        onPress = {
                            function () {
                                auth.setIsLoggedIn(false);
                            }
                        }
                    />
                </View>
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
    },
})

export default HomeScreen;