import 'react-native-gesture-handler';

import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
/*import
  MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';*/

import Commande from './pages/Commande';
import MonPanier from './pages/MonPanier';
import Produit from './pages/Produit';
import deconection from './pages/deconection';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="Produit"
        component={Produit}
        options={{
          tabBarLabel: 'Produit',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="home"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }}  />
      <Tab.Screen
        name="Commande"
        component={Commande}
        options={{
          tabBarLabel: 'Commande',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="home"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }}  />
        <Tab.Screen
        name="MonPanier"
        component={MonPanier}
        options={{
          tabBarLabel: 'MonPanier',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="settings"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }} />
      <Tab.Screen
        name="deconection"
        component={deconection}
        options={{
          tabBarLabel: 'deconection',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="settings"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }} />
    </Tab.Navigator>
  );
}

export function App() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
      }}>
      
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          screenOptions={{
        headerShown:false,
      }}
        />
      
    </Tab.Navigator>
  );
}

export default App;