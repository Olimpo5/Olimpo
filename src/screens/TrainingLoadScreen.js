import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import IntroImage from "../components/IntroImage";

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
        <View style={estilos.screen}>
            <View style={{justifyContent:"center"}}>
                <Text style={estilos.texto}>Llegaras muy lejos</Text>
                <View style={estilos.container}>
                  <Image style={estilos.imagen} source={{ uri: "https://img.freepik.com/fotos-premium/mujer-deportiva-esta-haciendo-flexiones-mancuernas-codo-sobre-rodilla-gimnasio-chica-morena-musculosa-viste-top-negro-pantalones-cortos-cintura-alta_221404-2824.jpg" }} />
                  <LinearGradient
                    colors={['rgba(19,19,19,0.3)', 'rgba(19,19,19,1)']}
                    style={estilos.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  />
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    screen:{
        backgroundColor:Colors.background,
        height:"100%"
    },
    container: {
    width: "100%",
    height: "100%",
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  texto:{
    color:Colors.fontColor,
    fontSize: Fonts.size,
    fontWeight:Fonts.bold,
    position:"absolute",
    zIndex:1,
    alignSelf:"center"
  }
});