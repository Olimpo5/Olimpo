import { 
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    ScrollView,
    Pressable,
    Alert
} from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { Colors, Fonts } from "../constants/theme";
import { useState, useCallback } from "react";

export default function HomeScreen(){
    const navegacion = useNavigation();
    const route = useRoute();
    
    // Obtenemos la rutina desde los params (si existe)
    const [rutinaGuardada, setRutinaGuardada] = useState(route.params?.rutina || null);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);

    const dias = [
        { key: "L", label: "L", name: "Lunes" },
        { key: "M", label: "M", name: "Martes" },
        { key: "M2", label: "M", name: "Miércoles" },
        { key: "J", label: "J", name: "Jueves" },
        { key: "V", label: "V", name: "Viernes" },
        { key: "S", label: "S", name: "Sábado" },
        { key: "D", label: "D", name: "Domingo" }
    ];

    // Actualizar rutina cuando la pantalla recibe foco
    useFocusEffect(
        useCallback(() => {
            if (route.params?.rutina) {
                setRutinaGuardada(route.params.rutina);
                // Seleccionar automáticamente el primer día habilitado
                if (route.params.rutina.selectedDays.length > 0) {
                    setDiaSeleccionado(route.params.rutina.selectedDays[0].key);
                }
            }
        }, [route.params?.rutina])
    );

    // Verificar si un día está habilitado en la rutina
    const isDiaHabilitado = (diaKey) => {
        if (!rutinaGuardada) return false;
        return rutinaGuardada.selectedDays.some(dia => dia.key === diaKey);
    };

    // Obtener ejercicios del día seleccionado
    const getEjerciciosDia = () => {
        if (!diaSeleccionado || !rutinaGuardada) return [];
        const dia = rutinaGuardada.selectedDays.find(d => d.key === diaSeleccionado);
        return dia ? dia.exercises : [];
    };

    // Manejar selección de día
    const handleDiaPress = (diaKey) => {
        if (isDiaHabilitado(diaKey)) {
            setDiaSeleccionado(diaKey);
        }
    };

    // SI NO HAY RUTINA - Vista original
    if (!rutinaGuardada) {
        return(
            <View style={estilos.container}>
                {/* Header con imagen y mensaje al usuario */}
                <View style={estilos.header}>
                    <Image 
                        style={estilos.image} 
                        source={{uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}}
                    />
                    <Text style={estilos.txtusuario}>Hola usuario</Text>
                </View>

                {/* Aqui crearemos nuestra rutina */}
                <View style={estilos.crearRutina}>
                    <Image 
                        style={estilos.crearRutinaImagen} 
                        source={{uri:"https://media.istockphoto.com/id/1503228140/photo/woman-doing-push-ups-in-the-gym-strength-training.jpg?s=612x612&w=0&k=20&c=ZDUwwKr2E1FWZKv9jutOxJY02Yob1sdLtf0vPOc1wow="}}
                    />
                    <TouchableOpacity 
                        style={estilos.btnCrear}
                        onPress={() => navegacion.navigate("RoutineCreateGoal")}
                    >
                        <Text style={estilos.btnCreartxt}>Comenzar rutina</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // SI HAY RUTINA - Vista con días y ejercicios
    return(
        <View style={estilos.container}>
            {/* Header con imagen y mensaje al usuario */}
            <View style={estilos.header}>
                <Image 
                    style={estilos.image} 
                    source={{uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}}
                />
                <Text style={estilos.txtusuario}>Hola Arturo</Text>
            </View>

            {/* Imagen de entrenamiento */}
            <View style={estilos.rutinaContainer}>
                <Image 
                    style={estilos.crearRutinaImagen} 
                    source={{uri:"https://media.istockphoto.com/id/485298294/photo/gym-kettle-bell-with-chalk-and-hands.jpg?s=612x612&w=0&k=20&c=JwF8_VlohsAgsoSQsvdMZhxVW03-TmbtIiQk75yVQJQ="}}
                />

                {/* Botón reciclado - ahora para editar/crear nueva rutina */}
                <TouchableOpacity 
                    style={estilos.btnCrear}
                    onPress={()=>{
                        navegacion.navigate("TrainingLoadScreen", {rutina: rutinaGuardada})
                    }}
                >
                    <Text style={estilos.btnCreartxt}>Empezar rutina</Text>
                </TouchableOpacity>
            </View>

            {/* Botones de días de la semana */}
            <View style={estilos.diasContainer}>
                {dias.map((dia, index) => {
                    const isHabilitado = isDiaHabilitado(dia.key);
                    const isSeleccionado = diaSeleccionado === dia.key;

                    return (
                        <Pressable
                            key={index}
                            onPress={() => handleDiaPress(dia.key)}
                            disabled={!isHabilitado}
                            style={[
                                estilos.botonDia,
                                isSeleccionado && isHabilitado && { backgroundColor: Colors.secondary },
                                !isHabilitado && { opacity: 0.3, backgroundColor: "#444" }
                            ]}
                        >
                            <Text 
                                style={[
                                    estilos.botonDiaTxt,
                                    isSeleccionado && { color: "#000" }
                                ]}
                            >
                                {dia.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            {/* Grid de ejercicios del día seleccionado */}
            <ScrollView style={estilos.ejerciciosScroll}>
                <View style={estilos.ejerciciosGrid}>
                    {getEjerciciosDia().map((ejercicio, index) => (
                        <TouchableOpacity 
                            key={index}
                            style={estilos.ejercicioCard}
                        >
                            <Image 
                                style={estilos.ejercicioImagen} 
                                source={{ uri: ejercicio }} 
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                {getEjerciciosDia().length === 0 && diaSeleccionado && (
                    <Text style={estilos.noEjerciciosText}>
                        No hay ejercicios para este día
                    </Text>
                )}
            </ScrollView>

        </View>
    );
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
    rutinaContainer:{
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
    },
    diasContainer:{
        flexDirection:"row",
        justifyContent:"center",
        gap:7,
        paddingHorizontal:10
    },
    botonDia:{
        width:48,
        height:48,
        backgroundColor: Colors.accent,
        justifyContent:"center",
        borderRadius:10
    },
    botonDiaTxt:{
        color:Colors.fontColor,
        alignSelf:"center",
        fontSize:15,
        fontWeight:"bold"
    },
    ejerciciosScroll:{
        flex:1,
        width:"100%"
    },
    ejerciciosGrid:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:10,
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-around",
        paddingBottom:30
    },
    ejercicioCard:{
        borderRadius:10,
        overflow:"hidden"
    },
    ejercicioImagen:{
        width:100,
        height:100,
        borderRadius:10
    },
    noEjerciciosText:{
        color:Colors.fontColor,
        textAlign:"center",
        marginTop:20,
        opacity:0.5
    }
});