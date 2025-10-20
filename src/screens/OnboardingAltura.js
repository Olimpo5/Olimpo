import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "../../assets/ruler.png"
import { Colors, Fonts } from "../constants/theme";
import ProgressBar from "../components/ProgressBar";
import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react";



export default function OnboardingAltura(){
    const route = useRoute()
    const navegacion = useNavigation()

    const [usuario, setUsuario] = useState(route.params?.usuario || {})

    // Funcion para actualizar un campo del objeto usuario
    const actualizarCampo = (campo, valor) =>{
        const nuevoUsuario = {...usuario, [campo]:valor}
        setUsuario(nuevoUsuario)
        console.log("Objeto actualizado en OnboardingAltura", nuevoUsuario)
    }

    return(
        <View style={estilos.screen}>
            <ProgressBar bgcolor={Colors.secondary} completed={100}></ProgressBar>
            <View style={estilos.onboardingContainer}>
                <Image style={estilos.imagen} source={Icon}></Image>
                <Text style={estilos.texto}>Cual es tu altura?</Text>

                {/* Formulario */}
                <View style={estilos.formContainer}>
                    <TextInput 
                        style={estilos.input} 
                        placeholder="Altura" 
                        placeholderTextColor={Colors.fontColor} 
                        keyboardType="numeric"
                        onChangeText={(text) => actualizarCampo('altura', text)}></TextInput>
                </View>

            </View>
             <TouchableOpacity onPress={()=>{
                    console.log("Usuario final en OnboardingPeso: ", usuario)
                    navegacion.navigate("OnboardingEnd", {usuario})
                }} style={estilos.btn}>
                <Text style={estilos.btnText}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    screen:{
        backgroundColor:Colors.background,
        height:"100%",
        display:"flex",
        alignItems:"center",
        paddingTop:30,
        gap:50
    },
    onboardingContainer:{
        display:"flex",
        gap:20,
        textAlign:"center"
    },
    imagen:{
        alignSelf:"center"
    },
    texto:{
        color: Colors.fontColor,
        fontSize:Fonts.size,
        fontWeight:Fonts.bold,
        textAlign:"center"
    },
    formContainer:{
        display:"flex",
        flexDirection:"row",
        gap:12,
        justifyContent:"center"
    },
    input:{
        backgroundColor:Colors.primary,
        padding:10,
        fontSize:Fonts.size,
        width:100,
        height:50,
        textAlign:"center",
        borderRadius:10,
        color:Colors.fontColor
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