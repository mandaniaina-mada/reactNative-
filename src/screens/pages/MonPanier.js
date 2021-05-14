// React Native Tab
// https://aboutreact.com/react-native-tab/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import prod from './produit.json'

const MonPanier = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            <Text>"ici devrait s'afficher le panier"</Text>
          </Text>
          
        </View>
       
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:'purple',
    width: '20%',
    borderRadius: 20,
    margin: 6,
    padding :20,
    alignItems:'center',
  },
});
export default MonPanier;