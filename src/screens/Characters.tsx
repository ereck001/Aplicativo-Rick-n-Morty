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

import CharacterCard from '../components/CharacterCard'
import { CharCtx } from '../contexts/CharactersContext'

export default () => {  
  const {charData} = useContext(CharCtx)   

  return (
    <ImageBackground
      style={styles.image}
      source={require('../assets/images/background-image.jpeg')}                   
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Personagens</Text>
        </View>
        <FlatList        
          data={charData}
          renderItem={({item}) => <CharacterCard 
            name={item.name} 
            image={item.image}
            species={item.species}
            gender={item.gender}
            origin={item.origin}
            location={item.location}
            status={item.status}
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
