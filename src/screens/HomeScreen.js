import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Fonts } from "../constants/theme";
import Body from "../../assets/body.png"
import CircleStat from "../../assets/circlestat.png";

export default function HomeScreen(){
    return(
        <View style={estilos.container}>
            {/* Header con imagen y mensaje al usuario */}
            <View style={estilos.header}>
                <Image style={estilos.image} source={{uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}}></Image>
                <Text style={estilos.txtusuario}>Hola usuario</Text>
            </View>

            {/* Dashboard Inicial SIN DATOS */}
            <View style={estilos.dashboardContainer}>
                <Image style={estilos.bodyModel} source={Body}></Image>
                <View style={estilos.dataContainer}>
                    <View style={estilos.rutinaContainer}>
                        <Text style={estilos.txtRutina}>Rutina de hoy</Text>
                    </View>
                    <Image style={estilos.circleStat} source={CircleStat}></Image>
                    {/* Por ahora esto una imagen, en implementaciones futuras sera un grafico  */}

                </View>
            </View>

            <View style={estilos.crearRutina}>
                <Image style={estilos.crearRutinaImagen} source={{uri:"https://media.istockphoto.com/id/1503228140/photo/woman-doing-push-ups-in-the-gym-strength-training.jpg?s=612x612&w=0&k=20&c=ZDUwwKr2E1FWZKv9jutOxJY02Yob1sdLtf0vPOc1wow="}}></Image>
                <TouchableOpacity style={estilos.btnCrear}>
                    <Text style={estilos.btnCreartxt}>Crear rutina</Text>
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
    dashboardContainer:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-between"
    },
    bodyModel:{
        width:154,
        height:273
    },
    dataContainer:{
        width:"50%",
        display:"flex",
        gap:15,
        alignSelf:"center",
    },
    rutinaContainer:{
        height:100,
        width:"100%",
        backgroundColor:Colors.primary,
        display:"flex",
        justifyContent:"center",
        borderRadius:10
    },
    txtRutina:{
        textAlign:"center",
        alignSelf:"center",
        fontSize:15,
        fontWeight: Fonts.bold,
        color: Colors.accent
    },
    circleStat:{
        width:160,
        height:160,
        alignSelf:"center",
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