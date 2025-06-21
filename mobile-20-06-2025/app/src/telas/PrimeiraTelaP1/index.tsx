import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ComponentePrimeiraTela() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 60, marginTop: 50 }}>Logo</Text>

      <Text style={{ color: "#fff", fontSize: 60 }}>Primeira tela :D</Text>

      <Text style={{ color: "#fff", fontSize: 60 }}>Rodapé</Text>
    </View>
  );
}
