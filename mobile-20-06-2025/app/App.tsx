import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ComponentePrimeiraTela from "./src/telas/PrimeiraTelaP1";
import ComponenteSegundaTela from "./src/telas/SegundaTelaP1";
import { useState } from "react";

export default function App() {
  const [escondeStatusBar] = useState(true);

  return (
    <>
      <StatusBar style="light" hidden={escondeStatusBar} />
      <ComponentePrimeiraTela></ComponentePrimeiraTela>
      {/* <ComponenteSegundaTela></ComponenteSegundaTela> */}
    </>
  );
}
