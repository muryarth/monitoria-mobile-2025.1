import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagemLogo from "./imagens/banco-inter-branco.webp";

export default function App() {
  return (
    <View style={styles.conteudoCentral}>
      <StatusBar style="light" />

      <Image style={styles.logoInter} source={ImagemLogo} />

      <View style={styles.containerCamposInputs}>
        {/* Campo para preenchimento do CPF */}
        <TextInput style={styles.textInputCPF} placeholderTextColor={"#d78435"} placeholder="CPF/CNPJ"></TextInput>

        {/* Botão */}
        <TouchableOpacity style={styles.botaoLogar}>
          <Text style={styles.botaoLogarTexto}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDoFooter}>
        <Text style={styles.textoFooter}>Interpag</Text>

        {/* Botão do "Pagar" */}
        <TouchableOpacity style={styles.botaoDoFooter}>
          <Text style={{ fontSize: 8 }}>Imagem aqui</Text>
          <Text style={styles.textoBotaoDoFooter}>Pagar</Text>
        </TouchableOpacity>

        {/* Botão do "Receber" */}
        <TouchableOpacity style={styles.botaoDoFooter}>
          <Text style={{ fontSize: 8 }}>Imagem aqui</Text>
          <Text style={styles.textoBotaoDoFooter}>Receber</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  // Container do footer
  containerDoFooter: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },

  textoFooter: {
    color: "white",
    fontSize: 28,
  },

  botaoDoFooter: {
    // backgroundColor: "#fff",
    width: 65,
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d78435"
  },

  textoBotaoDoFooter: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  // Logo
  logoInter: {
    marginTop: 70,
    width: 225,
    height: 100,
    objectFit: 'contain',
  },

  // Container geral
  containerCamposInputs: {
    marginBottom: 150,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 30,
  },

  // Outros componentes 
  conteudoCentral: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a2930",
    justifyContent: "space-between",
  },

  textInputCPF: {
    width: "90%",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    fontSize: 18,
    color: "#d78435",
  },

  // Estilos do botão
  botaoLogar: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d78435",
    borderRadius: 10,

    display: "flex",

    flexDirection: "column", // -> No "column"
    justifyContent: "center", // -> Horizontal
    alignItems: "center" // -> Vertical

    //flexDirection: "row", // -> No "row"
    //justifyContent: "center", // -> Horizontal
    //alignItems: "center", // -> Vertical
  },

  botaoLogarTexto: {
    color: "#d78435",
    fontSize: 20
  }
});
