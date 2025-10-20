import {StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Colors } from "../constants/theme"
import IntroImage from "../components/IntroImage"
import Titulo from "../components/Titulo"

export default function LoginScreen(){
    const navegacion = useNavigation()
    return(
        <View style={styles.container}>
            <IntroImage url={"https://img.freepik.com/fotos-premium/mujer-deportiva-esta-haciendo-flexiones-mancuernas-codo-sobre-rodilla-gimnasio-chica-morena-musculosa-viste-top-negro-pantalones-cortos-cintura-alta_221404-2824.jpg"}></IntroImage>
            <Titulo titulo={"Iniciar Sesion"}></Titulo>
            <View style={styles.dataContainer}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="Correo electronico" placeholderTextColor={Colors.fontColor}></TextInput>
                    <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={Colors.fontColor} secureTextEntry={true} ></TextInput>
                </View>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity onPress={()=>{
                        navegacion.navigate("HomeScreen")
                    }} style={styles.btn}>
                        <Text style={styles.btnText}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.anchor} onPress={()=>{
                        navegacion.navigate("RegisterScreen")
                    }}>
                        <Text style={styles.anchorText}>No tengo cuenta</Text>
                    </TouchableOpacity>
                </View>
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
    dataContainer:{
        display:"flex",
        gap:100
    },
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
