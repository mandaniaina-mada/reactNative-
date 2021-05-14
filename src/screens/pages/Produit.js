// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  Icon,
  ScrollView,

} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import prod from './produit.json'
import {data} from './prod.js'


const produit = ({ navigation }) => {
  
  
   
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            
          }}>
          
          <FlatList
          data ={prod.produit}
          renderItem = {({item}) =>(
            <ScrollView>

            <Card>
                <CardImage 
                  source={require('./97.png')} 
                  title={item.nom}
                />
                <CardTitle
                  subtitle={item.prix}
                ></CardTitle>
                <CardAction 
                  separator={true} 
                  inColumn={false}>
                  
                  <CardButton
                    onPress={() => {navigation.navigate('Commande', {item})}}
                    title="Commander"
                    color="#FEB557"
                  />
                </CardAction>
            </Card>
         </ScrollView>
            )
          }
          />
          
      </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default  produit;