import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Onboarding from "../screens/Onboarding";
import OnboardingNacimiento from "../screens/OnboardingNacimiento";
import OnboardingPeso from "../screens/OnboardingPeso";
import OnboardingAltura from "../screens/OnboardingAltura";
import OnboardingEnd from "../screens/OnboardingEnd";

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
                <Stack.Screen name="Onboarding" component={Onboarding}></Stack.Screen>
                <Stack.Screen name="OnboardingNacimiento" component={OnboardingNacimiento}></Stack.Screen>
                <Stack.Screen name="OnboardingPeso" component={OnboardingPeso}></Stack.Screen>
                <Stack.Screen name="OnboardingAltura" component={OnboardingAltura}></Stack.Screen>
                <Stack.Screen name="OnboardingEnd" component={OnboardingEnd}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}