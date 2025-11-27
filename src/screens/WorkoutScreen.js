import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/bicep-gray.png"


export default function WorkoutScreen(){
    const pecho = [
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
    ];
    const ejercicios= [
        "Ejercicios de Pecho",
        "Ejercicios de Brazo",
        "Ejercicios de Espalda",
        "Ejercicios de Pierna",
        "Ekercicios de Bicep"
    ]

    return (
        <View style={estilos.screen}>
            <Text style={estilos.texto}>Lista de Ejercicios</Text>

            {/* Container ejercicios */}
            {ejercicios.map((item, index)=>(
                <View style={estilos.containerExercises} key={index}>
                    <Text style={estilos.textExercise}>{item}</Text> 
                    <ScrollView horizontal>
                        {pecho.map((item, index)=>(
                            <Image style={{width:100, height:100, marginLeft:10}} key={index} source={{uri: item}}></Image>
                    ))}
                    </ScrollView>
                </View>
            ))}
            {/* <View>
                
            </View> */}

        </View>
    )
}

const estilos = StyleSheet.create({
    screen: {
        backgroundColor: Colors.background,
        height:"100%",
        // display:"flex",
        // justifyContent:"center"
        gap:20,
    },
    texto:{
        fontSize:Fonts.size,
        color:Colors.fontColor,
        fontWeight:Fonts.bold,
        alignSelf:"center",
        marginTop:30
    },
    containerExercises:{
        display:"flex",
        gap:10,
        padding:10
    },
    textExercise:{
        color:Colors.secondary,
        fontWeight:"bold"
    }
})