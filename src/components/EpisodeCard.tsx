import { 
    Text, 
    View, 
    StyleSheet,
    Dimensions,    
  } from 'react-native'

const windowWidth = Dimensions.get('window').width

export default (props: any) => {
    return <>            
            <View style={styles.card}> 
                <Text style={styles.name}>{props.episode}</Text>
                <Text>Nome: {props.name}</Text>
                <Text>Lançamento: {props.air_date}</Text>                
            </View>  
        </>  
}

const styles = StyleSheet.create({    
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.97,
        minHeight:100,
        padding:20,
        borderRadius:9,
        margin: 5,
        backgroundColor: 'rgba(255,255,255,0.85)',
    },
    image:{
        height:320,
        width:320,
        marginBottom: 25
    },
    name:{
        fontSize: 22,
        fontWeight:'bold'
    } 
});