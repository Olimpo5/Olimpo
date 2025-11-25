// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import ProgressBar from "../components/ProgressBar";
// import { Colors, Fonts } from "../constants/theme";
// import Icon from "../../assets/goal.png"
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

// export default function RoutineCreateGoal() {
//   const [selected, setSelected] = useState(null);
//   const navegacion = useNavigation()

//   function getBtnStyle(isSelected) {
//     return [
//       estilos.btnStyle,
//       { backgroundColor: isSelected ? Colors.secondary : Colors.accent }
//     ];
//   }

//   return (
//     <View style={estilos.screen}>
//       <ProgressBar bgcolor={Colors.secondary} completed={33.3} />
//       <View style={estilos.container}>
//         <Image style={estilos.img} source={Icon} />
//         <Text style={estilos.textheader}>¿Cuál es tu objetivo?</Text>

//         <View style={estilos.btnContainer}>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 1)}
//             onPress={() => {
//                 setSelected(1)
//                 navegacion.navigate("RoutineCreateFrequency")
//             }}
//           >
//             <Text style={estilos.textbtn}>Bajar de peso</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 2)}
//             onPress={() => {
//                 setSelected(2)
//                 navegacion.navigate("RoutineCreateFrequency")
//             }}
//           >
//             <Text style={estilos.textbtn}>Definición</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 3)}
//             onPress={() => {
//                 setSelected(3)
//                 navegacion.navigate("RoutineCreateFrequency")
//             }}
//           >
//             <Text style={estilos.textbtn}>Ser saludable</Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </View>
//   );
// }


// const estilos = StyleSheet.create({
//     screen:{
//         backgroundColor: Colors.background,
//         height:"100%",
//         gap:20
//     },
//     container:{
//         display:"flex",
//         gap:48,
//         justifyContent:"center"
//     },
//     img:{
//         alignSelf:"center"
//     },
//     textheader:{
//         color:Colors.fontColor,
//         fontSize:Fonts.size,
//         fontWeight:"bold",
//         textAlign:"center"
//     },
//     btnContainer:{
//         display:"flex",
//         gap:28
//     },
//     btnStyle:{
//         backgroundColor:Colors.accent,
//         width:323,
//         height:50,
//         display:"flex",
//         justifyContent:"center",
//         borderRadius:10,
//         alignSelf:"center"
//     },
//     textbtn:{
//         color:Colors.fontColor,
//         fontSize:15,
//         textAlign:"center"
//     }
// })

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/ProgressBar";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/goal.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function RoutineCreateGoal() {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  // Mapea las opciones a texto
  const goals = {
    1: "Bajar de peso",
    2: "Definición",
    3: "Ser saludable",
  };

  function getBtnStyle(isSelected) {
    return [
      estilos.btnStyle,
      { backgroundColor: isSelected ? Colors.secondary : Colors.accent }
    ];
  }

  function handleSelect(option) {
    setSelected(option);

    // Creamos el objeto inicial del array de rutina
    const rutinaInfo = {
      goal: goals[option],
      frequency: null,
      selectedDays: []
    };

    // Pasamos rutinaInfo a la siguiente pantalla
    navigation.navigate("RoutineCreateFrequency", { rutinaInfo });
  }

  return (
    <View style={estilos.screen}>
      <ProgressBar bgcolor={Colors.secondary} completed={33.3} />

      <View style={estilos.container}>
        <Image style={estilos.img} source={Icon} />
        <Text style={estilos.textheader}>¿Cuál es tu objetivo?</Text>

        <View style={estilos.btnContainer}>

          <TouchableOpacity
            style={getBtnStyle(selected === 1)}
            onPress={() => handleSelect(1)}
          >
            <Text style={estilos.textbtn}>Bajar de peso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={getBtnStyle(selected === 2)}
            onPress={() => handleSelect(2)}
          >
            <Text style={estilos.textbtn}>Definición</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={getBtnStyle(selected === 3)}
            onPress={() => handleSelect(3)}
          >
            <Text style={estilos.textbtn}>Ser saludable</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    height: "100%",
    gap: 20
  },
  container: {
    display: "flex",
    gap: 48,
    justifyContent: "center"
  },
  img: {
    alignSelf: "center"
  },
  textheader: {
    color: Colors.fontColor,
    fontSize: Fonts.size,
    fontWeight: "bold",
    textAlign: "center"
  },
  btnContainer: {
    display: "flex",
    gap: 28
  },
  btnStyle: {
    backgroundColor: Colors.accent,
    width: 323,
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center"
  },
  textbtn: {
    color: Colors.fontColor,
    fontSize: 15,
    textAlign: "center"
  }
});
