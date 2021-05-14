import React,{useState} from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import{App} from './mainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import{Heading} from '../components/Heading'
import  client from './login.json'




export  function Login({navigation}) {
const [username, setUserInput] = useState('')
const [mdp,setMdp] = useState('')
const inputchangeusername = (event) => {
    setUserInput(event.target.value)
}
const inputchangemdp = (event) => {
    setMdp(event.target.value)
}



  

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Login </Text>
      <TextInput  
      style={styles.in}
       placeholder='username'
        onChange={inputchangeusername} 
      value = {username}>
        
        </TextInput>
      <TextInput  style={styles.in} placeholder='mdp' 
      secureTextEntry 
      onChange={inputchangemdp}
      value ={mdp}>
      
      </TextInput>
      <TouchableOpacity  style={styles.touch} onPress={()=>{
      	if(username==client.client.username && mdp ==client.client.password){
		navigation.navigate('App')

	}
	else(alert('tsy mety'))
      }}>
      <Text style={styles.but}>Login</Text>
      </TouchableOpacity>
    </View>

    );
}
	
const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		paddingTop:100,
		

	},
	Text:{
		fontSize:24,
		color:'black',
	},
	in:{
		backgroundColor:'#ccc',
		width:'60%',
		borderRadius: 20,
		margin: 10,
		padding :20,

	},
	touch:{
		backgroundColor:'purple',
		width: '20%',
		borderRadius: 20,
		margin: 6,
		padding :20,
		alignItems:'center',

	},
	but:{
		color:'white',
		

	}
	
	
});