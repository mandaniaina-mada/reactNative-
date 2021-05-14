import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import{deco} from './deco';
import {createStackNavigator} from '@react-navigation/Stack';


const deconection = ({ navigation }) => {
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            voulez-vous vraiment vous deconecter
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Login')
            }>
            deconecter
          </TouchableOpacity>
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
export default deconection;