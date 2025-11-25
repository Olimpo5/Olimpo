import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/metric-gray.png"

export default function StatScreen(){
    return(
        <View style={estilos.screen}>
            <View style={estilos.containertxtimg}>
                <Image source={Icon}></Image>
                <Text style={estilos.texto}>No tienes marcas aun</Text>
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
    containertxtimg:{
        width:"50%",
        alignSelf:"center",
        gap:10
    },
    texto: {
        fontSize: Fonts.size,
        fontWeight:"bold",
        color: Colors.primary,
        width:"100%",
        textAlign:"center"
    }
})