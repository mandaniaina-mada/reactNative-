import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/Stack';
import{AuthStackNavigator} from './src/navigators/AuthStackNavigator'



const RootStack = createStackNavigator();

export default function () {

  return (
    <NavigationContainer
    screenOptions={{headerShown:false,
    }}>
      <RootStack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        <RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>)
}