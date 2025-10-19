import { View, Image, StyleSheet } from "react-native";
import { Colors } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient"; // o 'react-native-linear-gradient'

export default function IntroImage({ url }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={{ uri: url }} />
      <LinearGradient
        colors={['rgba(19,19,19,0.3)', 'rgba(19,19,19,1)']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 385,
  },
  imagen: {
    width: "100%",
    height: 385,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
