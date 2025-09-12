import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";

const {createNativeStackNavigator} = require("@react-navigation/native-stack")

const Stack = createNativeStackNavigator()

export default function MainStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
                <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}