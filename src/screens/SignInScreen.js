import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Input, Card} from "react-native-elements"
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import {AuthContext} from "../provider/AuthProvider"
import {getDataJSON} from "../functions/AsyncStorage"

function SignInScreen(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <Card>
                        <Card.Title>Welcome to AuthApp!</Card.Title>
                        <Card.Divider/>
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
                            title = '  Sign In'
                            type = 'solid'
                            onPress=
                                {  function () {
                                        let UserData =  getDataJSON(Email);
                                        console.log(UserData.Password)
                                        if ( UserData.password == Password) {
                                            auth.setIsLoggedIn(true);
                                            auth.setCurrentUser(UserData);
                                        } else {
                                            alert("Login Failed");
                                        }
                                    }
                                }
                        />

                        <Button
                            type='clear'
                            icon={<AntDesign name="user" size={24} color="dodgerblue" />}
                            title="Don't have an account?"
                            onPress= {function () {
                                props.navigation.navigate("SignUpScreen")
                            }}
                        />
                    </Card>
                </View>)
            }
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default SignInScreen;