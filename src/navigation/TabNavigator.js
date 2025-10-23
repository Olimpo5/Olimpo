import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import StatScreen from "../screens/StatScreen"
import WorkoutScreen from "../screens/WorkoutScreen"
import ChatScreen from "../screens/ChatScreen"
import { Image, View } from "react-native"
import Home from "../../assets/home.png"
import Stat from "../../assets/stats.png"
import Workout from "../../assets/workout.png"
import Chat from "../../assets/chat.png"

import { Colors } from "../constants/theme"


const Tab = createBottomTabNavigator()

export default function TabNavigator(){
    // 1. Home
    // 2. Stats
    // 3. Workouts
    // 4. Chat
    return(
        <Tab.Navigator 
        initialRouteName="HomeScreen"
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
                name="HomeScreen" 
                component={HomeScreen} 
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
            <Tab.Screen 
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
            /> 
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