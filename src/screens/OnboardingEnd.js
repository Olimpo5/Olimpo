import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/bicep.png"


export default function OnboardingEnd(){
    return(
        <View style={estilos.screen}> 

            <View style={estilos.messageContainer}>
                <Image style={estilos.img} source={Icon}></Image>
                <Text style={estilos.txt}>Excelente, comencemos!!</Text>
            </View>
        
        </View>
    )
}

const estilos = StyleSheet.create({
    screen:{
        backgroundColor:Colors.background,
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    messageContainer:{
        display:"flex",
        gap:30,
        width:"80%"
    },
    img:{
        alignSelf:"center"
    },
    txt:{
        fontSize:Fonts.size,
        color:Colors.fontColor,
        fontWeight:Fonts.bold,
        textAlign:"center"
    }
})