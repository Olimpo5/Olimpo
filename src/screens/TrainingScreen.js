import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import IntroImage from "../components/IntroImage";
import { Colors, Fonts } from "../constants/theme";
import ProgressBar from "../components/ProgressBar";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TrainingScreen(){
    const navegacion = useNavigation()
    const route = useRoute();
    
    // Recibir la rutina desde TrainingLoadScreen
    const { rutina } = route.params;
    
    // Obtener todos los ejercicios
    const exercises = rutina.selectedDays.length > 0 ? rutina.selectedDays[0].exercises : [];
    const nombreDia = rutina.selectedDays.length > 0 ? rutina.selectedDays[0].name : "Día";
    
    // Estado para controlar qué ejercicios están completados
    const [exercisesCompleted, setExercisesCompleted] = useState(
        new Array(exercises.length).fill(false)
    );

    // Estado para tracking de tiempo
    const [startTime] = useState(new Date());

    // Función que se ejecuta al presionar un checkbox específico
    const handleCheckboxPress = (index, isChecked) => {
        const newCompletedState = [...exercisesCompleted];
        newCompletedState[index] = isChecked;
        setExercisesCompleted(newCompletedState);
        console.log(`Ejercicio ${index + 1} completado: ${isChecked}`);
    };

    // Calcular el progreso basado en ejercicios completados
    const completedCount = exercisesCompleted.filter(completed => completed).length;
    const totalExercises = exercises.length;
    const progressPercentage = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;

    // Función para calcular duración en minutos
    const calcularDuracion = () => {
        const endTime = new Date();
        const diffMs = endTime - startTime;
        const diffMinutes = Math.floor(diffMs / 60000);
        return diffMinutes;
    };

    // Función para finalizar rutina
    const handleFinalizarRutina = () => {
        const duracionMinutos = calcularDuracion();
        
        // Crear objeto con resumen del entrenamiento
        const trainingSession = {
            completado: progressPercentage === 100,
            mensaje: progressPercentage === 100 ? "Buen trabajo 😎" : "Sigue así 💪",
            duracionMinutos: duracionMinutos,
            porcentajeCompletado: Math.round(progressPercentage),
            enfoqueEntrenamiento: "Pierna", // Puedes hacer esto dinámico según el tipo de ejercicios
            dia: nombreDia,
            fecha: new Date().toLocaleDateString('es-MX'),
            ejerciciosCompletados: completedCount,
            ejerciciosTotales: totalExercises,
            objetivo: rutina.goal
        };

        console.log("Sesión de entrenamiento:", trainingSession);

        // Navegar a FinishTrainingLoadScreen con los datos
        navegacion.navigate("FinishTrainingLoadScreen", { 
            sessionData: trainingSession,
            rutina: rutina 
        });
    };

    return(
        <View style={estilos.screen}>
            <IntroImage url={"https://img.goodfon.com/original/1920x1168/7/26/shtanga-trenazhernyy-zal-gym.jpg"}></IntroImage>
            <Text style={estilos.texto}>Rutina {nombreDia}</Text>
        
            {/* Barra de progreso dinámica */}
            <ProgressBar bgcolor={Colors.secondary} completed={progressPercentage}></ProgressBar>

            {/* Contenedor con todos los ejercicios */}
            <ScrollView>
                {exercises.map((exerciseUrl, index) => {
                    const isCompleted = exercisesCompleted[index];
                    
                    // Estilo condicional para cada ejercicio
                    const containerStyle = {
                        ...estilos.checkboxContainer,
                        backgroundColor: isCompleted ? Colors.secondary : Colors.primary,
                    };

                    return (
                        <View key={index} style={containerStyle}>
                            <Image 
                                style={{width:100, height:100, borderRadius:10}} 
                                source={{uri: exerciseUrl}}
                            />
                            <View style={estilos.infoContainer}>
                                <Text style={estilos.tituloEjercicio}>Ejercicio {index + 1}</Text>
                                <Text style={estilos.datosEjercicio}>3 series x 12 repeticiones</Text>
                            </View>
                            <BouncyCheckbox 
                                size={36} 
                                fillColor={Colors.secondary} 
                                iconStyle={{ borderColor: "red" }}
                                onPress={(isChecked) => handleCheckboxPress(index, isChecked)} 
                                isChecked={isCompleted} 
                            />
                        </View>
                    );
                })}
            </ScrollView>

            <TouchableOpacity style={estilos.btn} onPress={handleFinalizarRutina}>
                <Text style={estilos.btnText}>Finalizar Rutina</Text>
            </TouchableOpacity>

        </View>
    );
}

const estilos = StyleSheet.create({
    screen:{
        backgroundColor: Colors.background,
        height:"100%",
        gap:20
    },
    texto:{
        fontSize:Fonts.size,
        color:Colors.fontColor,
        fontWeight:Fonts.bold,
        position:"absolute",
        alignSelf:"center",
        top: 50
    },
    checkboxContainer:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        alignSelf:"center",
        alignItems:"center",
        gap:20,
        padding:10,
        borderRadius:10,
        marginTop:10
    },
    infoContainer:{
        justifyContent:"center",
        width:170
    },
    tituloEjercicio:{
        color:Colors.fontColor,
        fontSize: 20
    },
    datosEjercicio:{
        color:Colors.fontColor,
        fontSize:12
    },
    btn:{
        backgroundColor:Colors.secondary,
        height: 50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        width:"90%",
        alignSelf:"center"
    },
    btnText:{
        color: Colors.fontColor
    }
});