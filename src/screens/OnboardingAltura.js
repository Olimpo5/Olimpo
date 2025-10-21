import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Icon from "../../assets/ruler.png"
import { Colors, Fonts } from "../constants/theme";
import ProgressBar from "../components/ProgressBar";
import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react";

export default function OnboardingAltura(){
    const route = useRoute()
    const navegacion = useNavigation()

    const [usuario, setUsuario] = useState(route.params?.usuario || {})

    // Función para actualizar un campo del objeto usuario
    const actualizarCampo = (campo, valor) => {
        const nuevoUsuario = { ...usuario, [campo]: valor }
        setUsuario(nuevoUsuario)
        console.log("Objeto actualizado en OnboardingAltura:", nuevoUsuario)
    }

    // 👇 Función para enviar el usuario al endpoint
    const crearUsuario = async () => {
        try {
            console.log("Enviando usuario al servidor:", usuario)

            // En la ip colocamos el la ip publica de ec2
            const respuesta = await fetch("http://10.0.2.2:8000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            })

            if (!respuesta.ok) {
                const errorData = await respuesta.text()
                console.error("Error al crear usuario:", errorData)
                Alert.alert("Error", "No se pudo crear el usuario")
                return
            }

            const data = await respuesta.json()
            console.log("Usuario creado exitosamente:", data)
            Alert.alert("Éxito", "Usuario registrado correctamente")

            // Navegar a la siguiente pantalla o pantalla final
            navegacion.navigate("OnboardingEnd", { usuario: data })
        } catch (error) {
            console.error("Error en la solicitud:", error)
            Alert.alert("Error de conexión", "No se pudo conectar con el servidor")
        }
    }

    return (
        <View style={estilos.screen}>
            <ProgressBar bgcolor={Colors.secondary} completed={100} />
            <View style={estilos.onboardingContainer}>
                <Image style={estilos.imagen} source={Icon} />
                <Text style={estilos.texto}>¿Cuál es tu altura?</Text>

                {/* Formulario */}
                <View style={estilos.formContainer}>
                    <TextInput
                        style={estilos.input}
                        placeholder="Altura"
                        placeholderTextColor={Colors.fontColor}
                        keyboardType="numeric"
                        value={usuario.altura}
                        onChangeText={(text) => actualizarCampo("altura", text)}
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={crearUsuario}
                style={estilos.btn}
            >
                <Text style={estilos.btnText}>Crear cuenta</Text>
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
