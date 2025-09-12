import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen(){
    const navegacion = useNavigation()
    return(
        <View>
            <Text>Bienvenido a la pantalla de Registro</Text>
            <TouchableOpacity
                onPress={()=>{
                    navegacion.navigate("HomeScreen")
                }}
            >
                <Text>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                navegacion.navigate("LoginScreen")
            }}>
                <Text>Ya tengo una cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}