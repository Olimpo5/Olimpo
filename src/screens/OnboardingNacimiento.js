import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "../../assets/calendar-icon.png"
import { Colors, Fonts } from "../constants/theme";
import ProgressBar from "../components/ProgressBar";
import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";



export default function OnboardingNacimiento(){
    const route = useRoute()
    const navegacion = useNavigation()

    const [usuario, setUsuario] = useState(route.params?.usuario || {})

    // Creacion de un estado local para el input de dia, mes y año
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [año, setAño] = useState('')

    // const actualizarCampo = (campo, valor) => {
    //     const nuevoUsuario = {...usuario, [campo]:valor}
    //     setUsuario(nuevoUsuario)
    //     console.log("Objeto actualizado en OnboardingNacimiento", nuevoUsuario)
    // }

    useEffect(()=>{
        if (dia && mes && año){
            const fechaFormateada = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`
            const nuevoUsuario = {...usuario, fecha_nacimiento: fechaFormateada}
            setUsuario(nuevoUsuario)
            console.log("Objeto actualizado en OnboardingNacimiento:", nuevoUsuario)
        }
    }, [dia, mes, año])

    return(
        <View style={estilos.screen}>
            <ProgressBar bgcolor={Colors.secondary} completed={33.3}></ProgressBar>
            <View style={estilos.onboardingContainer}>
                <Image style={estilos.imagen} source={Icon}></Image>
                <Text style={estilos.texto}>Cuando naciste?</Text>

                {/* Formulario */}
                <View style={estilos.formContainer}>
                    <TextInput 
                        style={estilos.input} 
                        placeholder="Dia" 
                        placeholderTextColor={Colors.fontColor} 
                        keyboardType="numeric"
                        onChangeText={setDia}
                        value={dia}>
                    </TextInput>
                    <TextInput 
                        style={estilos.input} 
                        placeholder="Mes" 
                        placeholderTextColor={Colors.fontColor} 
                        keyboardType="numeric"
                        onChangeText={setMes}
                        value={mes}>
                    </TextInput>
                    <TextInput 
                        style={estilos.input} 
                        placeholder="Año" 
                        placeholderTextColor={Colors.fontColor} 
                        keyboardType="numeric"
                        onChangeText={setAño}
                        value={año}>
                    </TextInput>
                </View>

            </View>
             <TouchableOpacity onPress={()=>{
                    console.log("Usuario actualizado en OB nacimiento", usuario)
                    navegacion.navigate("OnboardingPeso", {usuario})
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
        gap:12
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