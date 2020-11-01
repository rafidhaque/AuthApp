import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Input, Card} from "react-native-elements"
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { storeDataJSON } from '../functions/AsyncStorage'

function SignUpScreen(props) {
    const [Name, setName] = useState('');
    const [SID, setSID] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>SignUp to AuthApp!</Card.Title>
                <Card.Divider/>

                <Input 
                    placeholder='Name'
                    leftIcon={<MaterialCommunityIcons name="rename-box" size={24} color="black" />}
                    onChangeText = {function (currentInput) {
                        setName(currentInput);
                    }}
                />

                <Input 
                    placeholder='Student ID'
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                    onChangeText = {function (currentInput) {
                        setSID(currentInput);
                    }}
                />

                <Input 
                    placeholder='E-mail Address'
                    leftIcon={<MaterialCommunityIcons name="email-edit" size={24} color="black" />}
                    onChangeText = {function (currentInput) {
                        setEmail(currentInput);
                    }}
                />

                <Input
                    placeholder='Password'
                    leftIcon={<FontAwesome5 name="key" size={24} color="black" />}
                    secureTextEntry={true}
                    onChangeText = {function (currentInput) {
                        setPassword(currentInput);
                    }}
                />

                <Button
                    icon = {<AntDesign name="login" size={24} color="white" />}
                    title = '  Sign Up'
                    type = 'solid'
                    onPress= {function () {
                        let currentUser = {
                            name: Name,
                            sid: SID,
                            email: Email,
                            Password: Password,
                        }
                        storeDataJSON(Email, currentUser);
                        props.navigation.navigate("SignInScreen")
                    }}
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