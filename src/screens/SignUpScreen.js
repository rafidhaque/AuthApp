import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Input, Card} from "react-native-elements"
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';

function SignUpScreen(props) {
    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>SignUp to AuthApp!</Card.Title>
                <Card.Divider/>
                <Input 
                    placeholder='E-mail Address'
                    leftIcon={<MaterialCommunityIcons name="email-edit" size={24} color="black" />}
                />

                <Input 
                    placeholder='Name'
                    leftIcon={<MaterialCommunityIcons name="rename-box" size={24} color="black" />}
                />

                <Input 
                    placeholder='Student ID'
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                />

                <Input
                    placeholder='Password'
                    leftIcon={<FontAwesome5 name="key" size={24} color="black" />}
                    secureTextEntry={true}
                />

                <Button
                    icon = {<AntDesign name="login" size={24} color="white" />}
                    title = '  Sign Up'
                    type = 'solid'
                />

                <Button
                    type='clear'
                    icon={<AntDesign name="user" size={24} color="dodgerblue" />}
                    title="Already have an account?"
                    onPress= {function () {
                        props.navigation.navigate("SignInScreen")
                    }}
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

export default SignUpScreen;