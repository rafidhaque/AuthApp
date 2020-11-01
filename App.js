import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './src/screens/HomeScreen.js'
import SignUpScreen from './src/screens/SignUpScreen.js'
import SignInScreen from './src/screens/SignInScreen.js'

import {AuthContext, AuthProvider} from './src/provider/AuthProvider'

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen name='Home' component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

function AuthStatckScreen() {
  return (
    <AuthStack.Navigator initialRouteName='SignInScreen'>
      <AuthStack.Screen
        name = "SignInScreen" 
        options = {{headerShown:false}}
        component={SignInScreen}
      />
      <AuthStack.Screen
        name = "SignUpScreen" 
        options = {{headerShown:false}}
        component={SignUpScreen}
      />
    </AuthStack.Navigator>
  )
}

function App() {
  return(
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) =>
         (<NavigationContainer>
          {auth.IsLoggedIn ? <HomeStackScreen/>:<AuthStatckScreen/>}
        </NavigationContainer>
        )}
      
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App;