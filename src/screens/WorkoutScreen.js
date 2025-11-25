import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/bicep-gray.png"


export default function WorkoutScreen(){
    return (
        <View style={estilos.screen}>
            <View style={estilos.containertextimage}>
                <Image source={Icon}></Image>
                <Text style={estilos.texto}>Aun no tienes ejercicios</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    screen: {
        backgroundColor: Colors.background,
        height:"100%",
        display:"flex",
        justifyContent:"center"
    },
    containertextimage:{
        width:"50%",
        alignSelf:"center"
    },
    texto: {
        fontSize: Fonts.size,
        fontWeight: "bold",
        color:Colors.primary,
        textAlign:"center",
        width:"100%"
    } 
})