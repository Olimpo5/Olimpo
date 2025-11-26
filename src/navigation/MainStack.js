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

//Creando un tab navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatScreen from "../screens/StatScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ChatScreen from "../screens/ChatScreen";
import TabNavigator from "./TabNavigator";
import RoutineCreateGoal from "../screens/RoutineCreateGoal";
import RoutineCreateFrequency from "../screens/RoutineCreateFrequency";
import RoutineCreate from "../screens/RoutineCreate";
import TrainingLoadScreen from "../screens/TrainingLoadScreen";
import TrainingScreen from "../screens/TrainingScreen";
import FinishTrainingLoadScreen from "../screens/FinishTrainingLoadScreen";

// const Tab = createBottomTabNavigator()


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
                <Stack.Screen name="TabNavigator" component={TabNavigator}></Stack.Screen>
                <Stack.Screen name="RoutineCreateGoal" component={RoutineCreateGoal}></Stack.Screen>
                <Stack.Screen name="RoutineCreateFrequency" component={RoutineCreateFrequency}></Stack.Screen>
                <Stack.Screen name="RoutineCreate" component={RoutineCreate}></Stack.Screen>
                <Stack.Screen name="TrainingLoadScreen" component={TrainingLoadScreen}></Stack.Screen>
                <Stack.Screen name="TrainingScreen" component={TrainingScreen}></Stack.Screen>
                <Stack.Screen name="FinishTrainingLoadScreen" component={FinishTrainingLoadScreen}></Stack.Screen>
           </Stack.Navigator>
        </NavigationContainer>
    )
}


// function TabNavigator(){
//     // 1. Home
//     // 2. Stats
//     // 3. Workouts
//     // 4. Chat
//     return(
//         <Tab.Navigator initialRouteName="HomeScreen">
//             <Tab.Screen 
//                 name="HomeScreen" 
//                 component={HomeScreen} 
//                 options={{title: 'Home'}}
//             /> 
//             <Tab.Screen 
//                 name="StatScreen" 
//                 component={StatScreen} 
//                 options={{title: 'Stats'}}
//             /> 
//             <Tab.Screen 
//                 name="WorkoutScreen" 
//                 component={WorkoutScreen} 
//                 options={{title: 'Workouts'}}
//             />      
//             <Tab.Screen 
//                 name="ChatScreen" 
//                 component={ChatScreen} 
//                 options={{title: 'Chat'}}
//             />       
//         </Tab.Navigator>
//     )
// }