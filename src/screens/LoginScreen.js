import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
// import Colors from "../constants/Colors";
import { Colors } from "../constants/theme"
import IntroImage from "../components/IntroImage";
import Titulo from "../components/Titulo";

export default function LoginScreen() {
  const navegacion = useNavigation();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    try {
      // const response = await fetch("http://10.0.2.2:8000/usuarios");
      const response = await fetch("http://18.116.201.101:8000/usuarios");
      if (!response.ok) throw new Error("Error al obtener usuarios");

      const usuarios = await response.json();

      // Verificar si existe un usuario con el correo y password ingresado
      const usuarioEncontrado = usuarios.find(
        (u) =>
          u.correo.trim().toLowerCase() === correo.trim().toLowerCase() &&
          u.password === contraseña
      );

      if (usuarioEncontrado) {
        // Alert.alert(
        //   "Inicio de sesión exitosa",
        //   `Bienvenido ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`
        // );
        // Enviar al usuario a la HomeScreen con los datos del usuario
        navegacion.navigate("TabNavigator", { usuario: usuarioEncontrado });
      } else {
        Alert.alert("Error", "Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      Alert.alert("Error", "No se pudo conectar con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      <IntroImage
        url={
          "https://img.freepik.com/fotos-premium/mujer-deportiva-esta-haciendo-flexiones-mancuernas-codo-sobre-rodilla-gimnasio-chica-morena-musculosa-viste-top-negro-pantalones-cortos-cintura-alta_221404-2824.jpg"
        }
      />
      <Titulo titulo={"Iniciar Sesión"} />
      <View style={styles.dataContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor={Colors.fontColor}
            value={correo}
            onChangeText={setCorreo}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={Colors.fontColor}
            secureTextEntry={true}
            value={contraseña}
            onChangeText={setContraseña}
          />
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text style={styles.btnText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.anchor}
            onPress={() => {
              navegacion.navigate("RegisterScreen");
            }}
          >
            <Text style={styles.anchorText}>No tengo cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
        padding:10,
        color:Colors.fontColor
    },
    btnsContainer:{
        width: "90%",
        alignSelf:"center",
        // display:"flex",
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
