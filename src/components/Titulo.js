import { StyleSheet, Text } from "react-native";
import { Fonts, Colors } from "../constants/theme";

export default function Titulo({titulo}){
    return(
        <Text style={estilos.text}>{titulo}</Text>
    )
}

const estilos = StyleSheet.create({
    text:{
        fontSize: Fonts.size,
        color: Colors.fontColor,
        fontWeight: Fonts.bold,
        alignSelf:"center"
    }
})