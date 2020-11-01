import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Button, Input, Card} from "react-native-elements"
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';

function SignInScreen(props) {
    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome to AuthApp!</Card.Title>
                <Card.Divider/>
                <Input 
                    placeholder='E-mail Address'
                    leftIcon={<MaterialCommunityIcons name="email-edit" size={24} color="black" />}
                />

                <Input
                    placeholder='Password'
                    leftIcon={<FontAwesome5 name="key" size={24} color="black" />}
                />

                <Button
                    icon = {<AntDesign name="login" size={24} color="white" />}
                    title = '  Sign In'
                    type = 'solid'
                />

                <Button
                    type='clear'
                    icon={<AntDesign name="user" size={24} color="dodgerblue" />}
                    title="Don't have an account?"
                    
                    background='white'
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default SignInScreen;