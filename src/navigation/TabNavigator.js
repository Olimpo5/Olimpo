import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import StatScreen from "../screens/StatScreen"
import WorkoutScreen from "../screens/WorkoutScreen"
import ChatScreen from "../screens/ChatScreen"
import RoutineCreateGoal from "../screens/RoutineCreateGoal"
import RoutineCreateFrequency from "../screens/RoutineCreateFrequency"
import RoutineCreate from "../screens/RoutineCreate"
import TrainingLoadScreen from "../screens/TrainingLoadScreen"
import TrainingScreen from "../screens/TrainingScreen"
import FinishTrainingLoadScreen from "../screens/FinishTrainingLoadScreen"
import { Image, View } from "react-native"
import Home from "../../assets/home.png"
import Stat from "../../assets/stats.png"
import Workout from "../../assets/workout.png"
import Chat from "../../assets/chat.png"

import { Colors } from "../constants/theme"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// Stack Navigator para HomeScreen y sus pantallas relacionadas
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RoutineCreateGoal" component={RoutineCreateGoal} />
            <Stack.Screen name="RoutineCreateFrequency" component={RoutineCreateFrequency} />
            <Stack.Screen name="RoutineCreate" component={RoutineCreate} />
            <Stack.Screen name="TrainingLoadScreen" component={TrainingLoadScreen} />
            <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
            <Stack.Screen name="FinishTrainingLoadScreen" component={FinishTrainingLoadScreen} />
        </Stack.Navigator>
    )
}

export default function TabNavigator(){
    // 1. Home
    // 2. Stats
    // 3. Workouts
    // 4. Chat
    return(
        <Tab.Navigator 
        initialRouteName="HomeStack"
        screenOptions={{
            headerShown:false, 
            tabBarStyle:{
                backgroundColor:Colors.background,
                height:75,
                display:"flex",
                justifyContent:"center",
                borderTopWidth:0
            },
        tabBarShowLabel:false        
        }}>
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStack} 
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) =>(
                        <Image 
                            source={Home}
                            style={{height:30, width:30, tintColor: focused ? Colors.secondary: Colors.accent}}></Image>
                    ),
                    tabBarActiveTintColor: Colors.secondary,
                    tabBarInactiveTintColor: Colors.accent
                }}
            /> 
            {/* <Tab.Screen 
                name="StatScreen" 
                component={StatScreen} 
                options={{
                    title: 'Stats',
                    tabBarIcon: ({focused}) =>(
                        <Image 
                            source={Stat}
                            style={{height:30, width:30, tintColor: focused ? Colors.secondary: Colors.accent}}></Image>
                    ),
                    tabBarActiveTintColor: Colors.secondary,
                    tabBarInactiveTintColor: Colors.accent
                }}
            />  */}
            <Tab.Screen 
                name="WorkoutScreen" 
                component={WorkoutScreen} 
                options={{
                    title: 'Workout',
                    tabBarIcon: ({focused}) =>(
                        <Image 
                            source={Workout}
                            style={{height:30, width:30, tintColor: focused ? Colors.secondary: Colors.accent}}></Image>
                    ),
                    tabBarActiveTintColor: Colors.secondary,
                    tabBarInactiveTintColor: Colors.accent
                }}
            />      
            <Tab.Screen 
                name="ChatScreen" 
                component={ChatScreen} 
                options={{
                    title: 'Chat',
                    tabBarIcon: ({focused}) =>(
                        <Image 
                            source={Chat}
                            style={{height:30, width:30, tintColor: focused ? Colors.secondary: Colors.accent}}></Image>
                    ),
                    tabBarActiveTintColor: Colors.secondary,
                    tabBarInactiveTintColor: Colors.accent
                }}
            />       
        </Tab.Navigator>
    )
}