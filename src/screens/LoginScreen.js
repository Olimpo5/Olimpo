import {StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"


export default function LoginScreen(){
    const navegacion = useNavigation()
    return(
        <View>
            <Text>Bienvenido a la pantalla de Login</Text>
            <TouchableOpacity
                onPress={()=>{
                    navegacion.navigate("HomeScreen")
                }}
            >
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                navegacion.navigate("RegisterScreen")
            }}>
                <Text>No tengo cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}
