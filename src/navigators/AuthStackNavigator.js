import React from 'react'
import {View,Text} from 'react-native'
import{Login} from '../screens/LoginScreen'
import{App} from '../screens/mainScreen'
import {createStackNavigator} from '@react-navigation/Stack';



const AuthStack = createStackNavigator();
export  function AuthStackNavigator() {

  return (
    
      <AuthStack.Navigator
      screenOptions={{
      	headerShown:false,
      }}>
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'App'} component={App} />

      </AuthStack.Navigator>
    
    )
}