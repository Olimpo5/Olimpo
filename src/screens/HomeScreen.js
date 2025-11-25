import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors, Fonts } from "../constants/theme";
import Body from "../../assets/body.png"
import CircleStat from "../../assets/circlestat.png";
import { useState } from "react";

export default function HomeScreen(){
    const navegacion = useNavigation()

    return(
        <View style={estilos.container}>
            {/* Header con imagen y mensaje al usuario */}
            <View style={estilos.header}>
                <Image style={estilos.image} source={{uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}}></Image>
                <Text style={estilos.txtusuario}>Hola usuario</Text>
            </View>

            <View style={estilos.crearRutina}>
                <Image style={estilos.crearRutinaImagen} source={{uri:"https://media.istockphoto.com/id/1503228140/photo/woman-doing-push-ups-in-the-gym-strength-training.jpg?s=612x612&w=0&k=20&c=ZDUwwKr2E1FWZKv9jutOxJY02Yob1sdLtf0vPOc1wow="}}></Image>
                <TouchableOpacity style={estilos.btnCrear}>
                    <Text style={estilos.btnCreartxt} onPress={()=>{
                        navegacion.navigate("RoutineCreateGoal")
                    }}>Crear rutina</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        height:"100%",
        display:"flex",
        gap:30
    },
    header:{
        display:"flex",
        flexDirection:"row",
        gap:30,
        alignSelf:"center",
        marginTop:30,
        width:"90%"
    },
    txtusuario:{
        color:Colors.secondary,
        fontSize:Fonts.size,
        fontWeight:Fonts.bold
    },
    image:{
        width:50,
        height:50,
        borderRadius:100
    },
    crearRutina:{
        width:"90%",
        display:"flex",
        gap:15,
        alignSelf:"center"
    },
    crearRutinaImagen:{
        width:"100%",
        height: 169,
        borderRadius:10
    },
    btnCrear:{
        backgroundColor:Colors.secondary,
        height: 50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        width:"100%"
    },
    btnCreartxt:{
        color: Colors.fontColor,
        fontSize:15,
        fontWeight:Fonts.bold
    }
})