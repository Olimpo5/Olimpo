import { 
    Image, 
    Pressable, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View,
    Alert
} from "react-native";
import ProgressBar from "../components/ProgressBar";
import { Colors, Fonts } from "../constants/theme";
import Icon from "../../assets/bicep.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

// =========================================================================
// ARRAYS DE IMÁGENES POR DÍA (9 imágenes cada uno)
// =========================================================================
const Lunes = [
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
const Martes = [
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
const Miercoles = [
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
const Jueves = [
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

const Viernes = [
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

const Sabado = [
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

const Domingo = [
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

// Objeto de mapeo para enlazar la clave del día con el array de imágenes.
const IMAGENES_POR_DIA = {
    L: Lunes,
    M: Martes,
    M2: Miercoles,
    J: Jueves,
    V: Viernes,
    S: Sabado,
    D: Domingo,
};
// =========================================================================

export default function RoutineCreate(){
    const navegacion = useNavigation();
    const route = useRoute();

    // Recibimos rutinaInfo desde la pantalla anterior
    const { rutinaInfo } = route.params;
    const maxDays = rutinaInfo.maxDays; // Número máximo de días que puede seleccionar

    const dias = [
        { key: "L", label: "L", name: "Lunes" },
        { key: "M", label: "M", name: "Martes" },
        { key: "M2", label: "M", name: "Miércoles" },
        { key: "J", label: "J", name: "Jueves" },
        { key: "V", label: "V", name: "Viernes" },
        { key: "S", label: "S", name: "Sábado" },
        { key: "D", label: "D", name: "Domingo" }
    ];

    // ELIMINAMOS 'rangos' y 'rutinasImg' ya que ahora usamos el mapeo directo
    
    // Día seleccionado para mostrar ejercicios
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);

    // Días habilitados para entrenar (los que el usuario puede seleccionar)
    const [diasHabilitados, setDiasHabilitados] = useState([]);

    // Estados separados para cada día (ejercicios seleccionados)
    const [selecciones, setSelecciones] = useState({
        L: [],
        M: [],
        M2: [],
        J: [],
        V: [],
        S: [],
        D: []
    });

    // Manejar selección de día
    const handleDiaPress = (diaKey) => {
        // Si el día ya está habilitado, lo seleccionamos para ver ejercicios
        if (diasHabilitados.includes(diaKey)) {
            setDiaSeleccionado(diaKey);
            return;
        }

        // Si no está habilitado, verificamos si podemos agregarlo
        if (diasHabilitados.length < maxDays) {
            setDiasHabilitados([...diasHabilitados, diaKey]);
            setDiaSeleccionado(diaKey);
        } else {
            Alert.alert(
                "Límite alcanzado",
                `Solo puedes seleccionar ${maxDays} días según tu frecuencia de entrenamiento (${rutinaInfo.frequency}).`
            );
        }
    };

    // =========================================================================
    // FUNCIÓN ACTUALIZADA: Retorna el array de imágenes directamente por clave.
    // =========================================================================
    const getImagenesFiltradas = () => {
        if (!diaSeleccionado) return [];
        
        // Usamos el objeto de mapeo IMAGENES_POR_DIA
        return IMAGENES_POR_DIA[diaSeleccionado] || [];
    };
    // =========================================================================

    // Seleccionar / deseleccionar imagen
    const toggleSeleccion = (img) => {
        const seleccionadoActual = selecciones[diaSeleccionado];

        // Si ya está seleccionado → quitarlo
        if (seleccionadoActual.includes(img)) {
            setSelecciones({
                ...selecciones,
                [diaSeleccionado]: seleccionadoActual.filter(i => i !== img)
            });
            return;
        }

        // Si no está seleccionado → agregarlo (máximo 5)
        if (seleccionadoActual.length < 9) {
            setSelecciones({
                ...selecciones,
                [diaSeleccionado]: [...seleccionadoActual, img]
            });
        }
    };

    // Verificar si un día está habilitado
    const isDiaHabilitado = (diaKey) => {
        return diasHabilitados.includes(diaKey);
    };

    // Finalizar creación de rutina
    const handleFinalizar = () => {
        if (diasHabilitados.length === 0) {
            Alert.alert("Atención", "Debes seleccionar al menos un día de entrenamiento.");
            return;
        }

        // Verificar que los días habilitados tengan ejercicios seleccionados
        const diasSinEjercicios = diasHabilitados.filter(dia => 
            selecciones[dia].length === 0
        );

        if (diasSinEjercicios.length > 0) {
            Alert.alert(
                "Atención", 
                "Todos los días seleccionados deben tener al menos un ejercicio."
            );
            return;
        }

        // Completar rutinaInfo con los días seleccionados
        const finalRutinaInfo = {
            ...rutinaInfo,
            selectedDays: diasHabilitados.map(key => {
                const dia = dias.find(d => d.key === key);
                return {
                    key: key,
                    name: dia.name,
                    exercises: selecciones[key]
                };
            })
        };

        console.log("Rutina completa:", finalRutinaInfo);
        
        Alert.alert(
            "¡Rutina creada!",
            `Objetivo: ${finalRutinaInfo.goal}\nFrecuencia: ${finalRutinaInfo.frequency}\nDías: ${finalRutinaInfo.selectedDays.map(d => d.name).join(", ")}`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        // Aquí puedes navegar a otra pantalla o guardar la rutina
                        // navegacion.navigate("Home", { rutina: finalRutinaInfo });
                    }
                }
            ]
        );

        // navegacion.navigate("HomeScreen")
        navegacion.navigate("HomeScreen", { rutina: finalRutinaInfo });

    };

    return (
        <View style={estilos.screen}>
            
            <ProgressBar bgcolor={Colors.secondary} completed={100} />
            
            <Image style={estilos.img} source={Icon} />

            <Text style={estilos.textheader}>Elige 5 ejercicios por día</Text>

            {/* Contador de días */}
            <Text style={estilos.contador}>
                {diasHabilitados.length} / {maxDays} días seleccionados
            </Text>

            {/* Botones de días */}
            <View style={estilos.botonesContainer}>
                {dias.map((dia, index) => {
                    const isHabilitado = isDiaHabilitado(dia.key);
                    const isSeleccionado = diaSeleccionado === dia.key;
                    const isDisabled = !isHabilitado && diasHabilitados.length >= maxDays;

                    return (
                        <Pressable
                            key={index}
                            onPress={() => handleDiaPress(dia.key)}
                            disabled={isDisabled}
                            style={[
                                estilos.botonDia,
                                isSeleccionado && { backgroundColor: Colors.secondary },
                                isHabilitado && !isSeleccionado && { backgroundColor: Colors.accent, borderWidth: 2, borderColor: Colors.secondary },
                                isDisabled && { opacity: 0.3 }
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

            {/* Grid Filtrado */}
            {diaSeleccionado ? (
                <ScrollView style={estilos.containerGrid}>
                    <View style={estilos.grid}>
                        {getImagenesFiltradas().map((img, index) => {
                            const seleccionado = selecciones[diaSeleccionado]?.includes(img);

                            return (
                                <TouchableOpacity 
                                    key={index}
                                    onPress={() => toggleSeleccion(img)}
                                    style={[
                                        estilos.imgWrapper,
                                        seleccionado && estilos.seleccionadoBorder
                                    ]}
                                >
                                    <Image style={estilos.imgbtn} source={{ uri: img }} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            ) : (
                <View style={estilos.mensajeContainer}>
                    <Text style={estilos.mensajeTexto}>
                        Selecciona un día para elegir ejercicios
                    </Text>
                </View>
            )}

            <TouchableOpacity 
                style={estilos.btn} 
                onPress={handleFinalizar}
            >
                <Text style={estilos.btnText}>Finalizar</Text>
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
    img:{
        alignSelf:"center"
    },
    textheader:{
        color:Colors.fontColor,
        fontSize: Fonts.size,
        fontWeight:"bold",
        textAlign:"center"
    },
    contador:{
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    botonesContainer:{
        flexDirection:"row",
        justifyContent:"center",
        gap:7
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
    containerGrid:{
        height:350
    },
    grid:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:10,
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-around"
    },
    imgWrapper:{
        borderWidth:2,
        borderColor:"transparent",
        borderRadius:10
    },
    seleccionadoBorder:{
        borderColor:"green"
    },
    imgbtn:{
        width:100,
        height:100,
        borderRadius:10
    },
    mensajeContainer:{
        height:350,
        justifyContent:"center",
        alignItems:"center"
    },
    mensajeTexto:{
        color:Colors.fontColor,
        fontSize:16,
        opacity:0.7
    },
    btn:{
        position:"absolute",
        bottom:50,
        backgroundColor:Colors.secondary,
        height:50,
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


