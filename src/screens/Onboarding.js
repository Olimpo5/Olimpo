import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IntroImage from "../components/IntroImage"
import { useNavigation } from "@react-navigation/native"
import { Colors, Fonts } from "../constants/theme";
import Titulo from "../components/Titulo";



export default function Onboarding(){
    const navegacion = useNavigation() 
    return(
        <View style={estilos.container}>
            <IntroImage url={"https://img.freepik.com/foto-gratis/foto-blanco-negro-hombre-musculoso-usando-tiza-deportiva-antes-levantar-pesa-entrenamiento-pesas-gimnasio_637285-2505.jpg?semt=ais_hybrid&w=740&q=80"}></IntroImage>
            <View style={estilos.textContainer}>
                <Text style={estilos.titulo}>Queremos saber mas sobre ti</Text>
                <Text style={estilos.texto}>
                    Esto nos ayudara a personalizar tu rutina de
                    entrenamiento y brindarte la experiencia olimpo
                </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                navegacion.navigate("OnboardingNacimiento")
            }} style={estilos.btn}>
                <Text style={estilos.btnText}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: Colors.background,
        height:"100%",
        alignItems:"center"
    },
    textContainer:{
        display:"flex",
        width:"90%",
        gap: 15,
        alignItems:"center"
    },
    titulo:{
        fontSize: Fonts.size,
        color: Colors.fontColor,
        fontWeight: Fonts.bold,
        width:"70%",
        textAlign:"center"
    },
    texto:{
        color: Colors.fontColor,
        width:"100%",
        // backgroundColor: "red",
        alignSelf:"center",
        textAlign:"justify",
        fontSize:15
    },
     btn:{
        position:"absolute",
        bottom:50,
        backgroundColor:Colors.secondary,
        height: 50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        width:"90%"
    },
    btnText:{
        color: Colors.fontColor
    }
})