// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import ProgressBar from "../components/ProgressBar";
// import { Colors, Fonts } from "../constants/theme";
// import Icon from "../../assets/fire.png"
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

// export default function RoutineCreateFrequency(){
//     const [selected, setSelected] = useState(null);
//     const navegacion = useNavigation()
    
//     function getBtnStyle(isSelected) {
//         return [
//           estilos.btnStyle,
//           { backgroundColor: isSelected ? Colors.secondary : Colors.accent }
//         ];
//     }
//     return (
//         <View style={estilos.screen}>
//           <ProgressBar bgcolor={Colors.secondary} completed={66.3} />
//           <View style={estilos.container}>
//             <Image style={estilos.img} source={Icon} />
//             <Text style={estilos.textheader}>Frecuencia semanal de entrenamiento</Text>
    
//             <View style={estilos.btnContainer}>
    
//               <TouchableOpacity
//                 style={getBtnStyle(selected === 1)}
//                 onPress={() => {
//                     setSelected(1)
//                     navegacion.navigate("RoutineCreate")
//                 }}
//               >
//                 <Text style={estilos.textbtn}>1-2 dias</Text>
//               </TouchableOpacity>
    
//               <TouchableOpacity
//                 style={getBtnStyle(selected === 2)}
//                 onPress={() => {
//                     setSelected(2)
//                     navegacion.navigate("RoutineCreate")
//                 }}
//               >
//                 <Text style={estilos.textbtn}>3-4 dias</Text>
//               </TouchableOpacity>
    
//               <TouchableOpacity
//                 style={getBtnStyle(selected === 3)}
//                 onPress={() => {
//                     setSelected(3)
//                     navegacion.navigate("RoutineCreate")
//                 }}
//               >
//                 <Text style={estilos.textbtn}>5-7 dias</Text>
//               </TouchableOpacity>
    
//             </View>
//           </View>
//         </View>
//       );
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





















// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import ProgressBar from "../components/ProgressBar";
// import { Colors, Fonts } from "../constants/theme";
// import Icon from "../../assets/fire.png";
// import { useState } from "react";
// import { useNavigation, useRoute } from "@react-navigation/native";

// export default function RoutineCreateFrequency() {
//   const [selected, setSelected] = useState(null);
//   const navegacion = useNavigation();
//   const route = useRoute();

//   // Recibimos rutinaInfo desde la pantalla anterior
//   const { rutinaInfo } = route.params;

//   function getBtnStyle(isSelected) {
//     return [
//       estilos.btnStyle,
//       { backgroundColor: isSelected ? Colors.secondary : Colors.accent }
//     ];
//   }

//   function handlePress(option) {
//     setSelected(option);

//     const freqMap = {
//       1: "1-2 días",
//       2: "3-4 días",
//       3: "5-7 días"
//     };

//     // Agregar frecuencia al array
//     // const updatedInfo = [...rutinaInfo, { frecuencia: freqMap[option] }];
//     const updatedInfo = {
//     ...rutinaInfo,
//       frequency: freqMap[option]
//     };

//     // Mandar a la tercera pantalla
//     navegacion.navigate("RoutineCreate", {
//       updatedInfo: updatedInfo
//     });
//   }

//   return (
//     <View style={estilos.screen}>
//       <ProgressBar bgcolor={Colors.secondary} completed={66.3} />
//       <View style={estilos.container}>
//         <Image style={estilos.img} source={Icon} />
//         <Text style={estilos.textheader}>Frecuencia semanal de entrenamiento</Text>

//         <View style={estilos.btnContainer}>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 1)}
//             onPress={() => handlePress(1)}
//           >
//             <Text style={estilos.textbtn}>1-2 días</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 2)}
//             onPress={() => handlePress(2)}
//           >
//             <Text style={estilos.textbtn}>3-4 días</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={getBtnStyle(selected === 3)}
//             onPress={() => handlePress(3)}
//           >
//             <Text style={estilos.textbtn}>5-7 días</Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   screen: {
//     backgroundColor: Colors.background,
//     height: "100%",
//     gap: 20
//   },
//   container: {
//     display: "flex",
//     gap: 48,
//     justifyContent: "center"
//   },
//   img: {
//     alignSelf: "center"
//   },
//   textheader: {
//     color: Colors.fontColor,
//     fontSize: Fonts.size,
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   btnContainer: {
//     display: "flex",
//     gap: 28
//   },
//   btnStyle: {
//     backgroundColor: Colors.accent,
//     width: 323,
//     height: 50,
//     display: "flex",
//     justifyContent: "center",
//     borderRadius: 10,
//     alignSelf: "center"
//   },
//   textbtn: {
//     color: Colors.fontColor,
//     fontSize: 15,
//     textAlign: "center"
//   }
// });





















import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/ProgressBar";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/fire.png";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function RoutineCreateFrequency() {
  const [selected, setSelected] = useState(null);
  const navegacion = useNavigation();
  const route = useRoute();

  // Recibimos rutinaInfo desde la pantalla anterior
  const { rutinaInfo } = route.params;

  function getBtnStyle(isSelected) {
    return [
      estilos.btnStyle,
      { backgroundColor: isSelected ? Colors.secondary : Colors.accent }
    ];
  }

  function handlePress(option) {
    setSelected(option);

    const freqMap = {
      1: { text: "1-2 días", maxDays: 2 },
      2: { text: "3-4 días", maxDays: 4 },
      3: { text: "5-7 días", maxDays: 7 }
    };

    // Agregar frecuencia y maxDays al objeto rutinaInfo
    const updatedInfo = {
      ...rutinaInfo,
      frequency: freqMap[option].text,
      maxDays: freqMap[option].maxDays  // Importante: esto se usará en la tercera pantalla
    };

    // Mandar a la tercera pantalla con el MISMO nombre de parámetro
    navegacion.navigate("RoutineCreate", {
      rutinaInfo: updatedInfo  // Cambiado de 'updatedInfo' a 'rutinaInfo' para mantener consistencia
    });
  }

  return (
    <View style={estilos.screen}>
      <ProgressBar bgcolor={Colors.secondary} completed={66.3} />
      <View style={estilos.container}>
        <Image style={estilos.img} source={Icon} />
        <Text style={estilos.textheader}>Frecuencia semanal de entrenamiento</Text>

        <View style={estilos.btnContainer}>

          <TouchableOpacity
            style={getBtnStyle(selected === 1)}
            onPress={() => handlePress(1)}
          >
            <Text style={estilos.textbtn}>1-2 días</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={getBtnStyle(selected === 2)}
            onPress={() => handlePress(2)}
          >
            <Text style={estilos.textbtn}>3-4 días</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={getBtnStyle(selected === 3)}
            onPress={() => handlePress(3)}
          >
            <Text style={estilos.textbtn}>5-7 días</Text>
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