import React, { useContext} from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native'

import LocationCard from '../components/LocationCard'
import { LocationCtx } from '../contexts/LocationContext'

export default () => {  
  const {locationData} = useContext(LocationCtx)   

  return (
    <ImageBackground
      style={styles.image}
      source={require('../assets/images/background-image.jpeg')}                   
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lugares</Text>
        </View>
        <FlatList        
          data={locationData}
          renderItem={({item}) => <LocationCard 
            name={item.name}             
            type={item.type}
            dimension={item.dimension}
          />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1,
    width: '100%' 
  },
  header:{
    height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius:9,
    margin: 5
    
  },
  headerText:{
    textAlign:'center',
    fontSize: 30,    
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
