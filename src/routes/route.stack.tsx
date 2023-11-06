import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Characters from "../screens/Characters"
import Home from "../screens/Home"
import Locations from "../screens/Locations"
import Episodes from "../screens/Episodes"

export default () => {
    const Stack = createNativeStackNavigator()
    return <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="characters" component={Characters}/>
            <Stack.Screen name="locations" component={Locations}/>
            <Stack.Screen name="episodes" component={Episodes}/>
        </Stack.Navigator>
    </NavigationContainer>

}