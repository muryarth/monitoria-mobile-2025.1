import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      {/* Exemplo usando o flex: 0.5, para dividir a tela em duas divs responsivas */}

      <View style={{ ...styles.container, backgroundColor: "green" }}>
        {/*
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        */}
      </View>
      <View style={{ ...styles.container, backgroundColor: "pink" }}>
        {/* 
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centraliza horizontalmente
    justifyContent: "center", // Centraliza verticalmente
    flex: 0.5,
  },
});
