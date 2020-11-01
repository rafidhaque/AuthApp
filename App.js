import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './src/screens/HomeScreen.js'
import NotificationScreen from './src/screens/NotificationScreen.js'
import SignUpScreen from './src/screens/SignUpScreen.js'
import SignInScreen from './src/screens/SignInScreen.js'

import {AuthContext, AuthProvider} from './src/provider/AuthProvider'

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator()

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

function HomeTabScreen() {
  return (
    <HomeTab.Navigation>
      <HomeTab.Screen name="Home" component={HomeScreen}
        options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="home" color="white" size={26} />
          ) : (
            <AntDesign name="home" color="white" size={22} />
          ),
      }}
      />
      <HomeTab.Screen name='Notification' component={NotificationScreen} />
      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color="white"
              />
            ),
        }}
      />
    </HomeTab.Navigation>
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