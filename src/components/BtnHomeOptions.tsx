import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import {useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito'

const windowWidth = Dimensions.get('window').width

export default (props: any) => {
    // console.log(props)
    const [fontsLoaded, fontError] = useFonts({
        Nunito_400Regular,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return <TouchableOpacity style={styles.button}
            onPress={props.nav}
        >
        <Text style={[styles.text, {fontFamily: 'Nunito_400Regular'}]}>
            {props.text}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: windowWidth * 0.96,
        backgroundColor: 'yellowgreen',
        paddingVertical:5,
        marginVertical:5,
        borderRadius:3
    },
    text:{
        fontSize:22, 
        textAlign: 'center',
        color: '#111'     
    }
})