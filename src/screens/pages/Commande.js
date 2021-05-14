import  React, { useState }  from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';


const Commande = ({route, navigation }) => {
  let data= route.params
  const [count, setCount] = useState(0);
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
            "c'est ici qu'on devrait voir le produit a comander"
            

    <div>
      <p>Vous voules Commander combien  {count} <TouchableOpacity style={styles.button1} onPress={() => setCount(count + 1)}>
        nombre de comande
      </TouchableOpacity></p>
      
    </div>


          </Text>
             

          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('MonPanier')
            }>
            <Text>comander</Text>
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
    justifyContent:'center'
  },
  button1: {
    backgroundColor:'purple',
    width: '25%',
    borderRadius: 20,
    margin: 6,
    padding :20,
    alignItems:'center',
  },
  

});
export default Commande;