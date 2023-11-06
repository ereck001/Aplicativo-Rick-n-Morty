import { StyleSheet, Image, View, ImageBackground } from 'react-native'
import Btn from '../components/BtnHomeOptions'

export default (props: any) => {
  return <ImageBackground
  style={styles.image}
        source={require('../assets/images/background-image.jpeg')}
                   
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/rick-and-morty-logo.png')}/>
      </View>
      <View style={styles.container}>
          <Btn {...props} text="Personagens" nav={()=>
              props.navigation.navigate("characters")
          } /> 
          <Btn {...props} text="Lugares" nav={()=>
              props.navigation.navigate("locations")
          }/>   
          <Btn {...props} text="Episódios" nav={()=>
              props.navigation.navigate("episodes")
          }/>   
      </View>
    </ImageBackground>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: '100%' 
  },
  logoContainer:{
    height: 400,
    marginTop:'20%'
  },
  logo:{
    height: '100%',
    width: '100%'
  }
});