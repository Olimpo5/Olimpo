import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "../../assets/bicep.png"
import { Colors, Fonts } from "../constants/theme";

export default function FinishTrainingLoadScreen(){
    const navegacion = useNavigation();
    const route = useRoute();
    
    // Recibir los datos de la sesión
    const { sessionData, rutina } = route.params;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            // Pasar los datos a HomeScreen
            navegacion.navigate("HomeScreen", { 
                sessionData: sessionData,
                rutina: rutina 
            });
        }, 3000);
        
        return () => clearTimeout(timer);
    }, []);

    return(
        <View style={estilos.screen}> 
            <View style={estilos.messageContainer}>
                <Image style={estilos.img} source={Icon}></Image>    
                <Text style={estilos.txt}>Excelente Trabajo!!</Text>
            </View>
        </View>
    );
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
});