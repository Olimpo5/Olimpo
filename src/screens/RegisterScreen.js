import {StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Colors } from "../constants/theme"
import IntroImage from "../components/IntroImage"
import Titulo from "../components/Titulo"

export default function RegisterScreen(){
    const navegacion = useNavigation()
    return(
        <View style={styles.container}>
            <IntroImage url={"https://img.freepik.com/fotos-premium/culturista-preparandose-mentalmente-antes-levantar-pesas-pesadas_754108-1133.jpg"}></IntroImage>
            <Titulo titulo={"Crear cuenta"}></Titulo>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Primer nombre" placeholderTextColor={Colors.fontColor}></TextInput>
                <TextInput style={styles.input} placeholder="Segundo nombre" placeholderTextColor={Colors.fontColor}></TextInput>
                <TextInput style={styles.input} placeholder="Correo electronico" placeholderTextColor={Colors.fontColor}></TextInput>
                <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={Colors.fontColor} secureTextEntry={true} ></TextInput>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity onPress={()=>{
                        navegacion.navigate("Onboarding")
                    }} style={styles.btn}>
                    <Text style={styles.btnText}>Crear cuenta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.anchor} onPress={()=>{
                        navegacion.navigate("LoginScreen")
                    }}>
                    <Text style={styles.anchorText}>Ya tengo cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.background,
        height:"100%",
        textAlign: "center",
        display: "flex",
        gap:10
    },
    // dataContainer:{
    //     display:"flex",
    //     gap:100
    // },
    formContainer:{
        display: "flex",
        gap:"15",
        width: "90%",
        alignSelf:"center"
    },
    input:{
        width: "100%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding:10
    },
    btnsContainer:{
        width: "90%",
        alignSelf:"center",
        display:"flex",
        gap:15
    },
    btn:{
        backgroundColor:Colors.secondary,
        height: 50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    btnText:{
        color: Colors.fontColor
    },
    anchorText:{
        color: Colors.fontColor,
        textDecorationLine:"underline",
        textAlign:"center"
    }
})
