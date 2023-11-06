import { 
    Text, 
    View, 
    StyleSheet,
    Dimensions,
    Image
  } from 'react-native'

const windowWidth = Dimensions.get('window').width

export default (props: any) => {
    return <>
            {
                props.status === "Dead"?
                <View style={styles.cover}>
                    <Text style={styles.coverText}>
                        MORTO
                    </Text>
                </View> :
                false
            }
            <View style={styles.card}>
                
                <Image 
                    source={{uri: props.image}}
                    style={styles.image}
                />
                <Text style={styles.name}>{props.name}</Text>
                <Text>Espécie: {props.species}</Text>
                <Text>Sexo: {props.gender}</Text>
                <Text>Origem: {props.origin.name}</Text>
                <Text>Localização atual: {props.location.name}</Text>
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
    },
    cover:{
        zIndex:1,
        position:'absolute',        
        height: '98%',
        backgroundColor: 'rgba(250, 10, 10 , 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.97,        
        borderRadius:9,
        margin: 5
    },
    coverText:{
        fontSize:90,
        fontWeight:'bold',
        color: 'rgba(0,0,0,0.7)',
        transform:[{ rotate: '45deg' }]

    } 
});