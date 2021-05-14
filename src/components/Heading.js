import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export  function Heading({children,style,...props}) {
  return (
    <Text {...props} style= {[style, style.text]}>
    {children}
    </Text>
    );
}
const styles = StyleSheet.create({
	text:{
		fontWeigth:'bold',
		fontSize:24,


	},
});