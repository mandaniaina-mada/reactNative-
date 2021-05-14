import React from 'react'
import {View,Text} from 'react-native'
import{Login} from '../LoginScreen'
import {createStackNavigator} from '@react-navigation/Stack';



const AuthStack = createStackNavigator();
export  function deco() {

  return (
    
      <AuthStack.Navigator
      screenOptions={{
      	headerShown:false,
      }}>
        <AuthStack.Screen name={'Login'} component={Login} />
        

      </AuthStack.Navigator>
    
    )
}