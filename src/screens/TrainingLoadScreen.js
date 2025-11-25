// import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Colors } from "../constants/theme";

// export default function TrainingLoadScreen(){
//     const navegacion = useNavigation()

//     useEffect(()=>{
//         const timer = setTimeout(()=>{
//             navegacion.navigate("TrainingScreen")
//         }, 3000)

//         return () => clearTimeout(timer)
//     })
//     return(
//         <View>
//             <Text style={estilos.texto}>Training LoadScreen</Text>
//         </View>
//     )
// }

// const estilos = StyleSheet.create({
//     texto:{
//         color:Colors.secondary
//     }
// })


import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/theme";

export default function TrainingLoadScreen(){
    const navegacion = useNavigation();
    const route = useRoute();
    
    // Recibir la rutina desde HomeScreen
    const { rutina } = route.params;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            // Pasar la rutina a TrainingScreen
            navegacion.navigate("TrainingScreen", { rutina: rutina });
        }, 3000);
        
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <View>
            <Text style={estilos.texto}>Training LoadScreen</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    texto:{
        color:Colors.secondary
    }
});