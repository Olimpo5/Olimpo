import { Image, StyleSheet, View } from "react-native";
import Icon from "../../assets/icon.png"

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Image source={Icon} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#131313",
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: "cover"
    }
})