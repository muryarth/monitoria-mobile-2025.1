import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Text>Login:</Text>
        <TextInput style={styles.estiloTextInputCaixa} placeholder="Escreva aqui..."></TextInput>

        {/* <Text></Text> é equivalente ao <p></p> do React/HTML padrão */}
        <Text style={{ marginTop: 5 }}>Senha:</Text>

        {/* <TextInput></TextInput> é equivalente ao <input></input> do React/HTML padrão */}
        <TextInput style={styles.estiloTextInputCaixa2} placeholder="Componente de baixo..."></TextInput>
      </TouchableOpacity>

      {/* 
        -> Num arquivo css usamos essa sintaxe:
          border: 1px solid #000; 

        -> Já no React Native, precisamos colocar cada propriedade separada:
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#000",
      */}

      {/* <TouchableOpacity></TouchableOpacity> é equivalente ao <button></button> do React/HTML padrão */}
      <TouchableOpacity onPress={() => { console.log("Teste!") }} style={{
        marginTop: 10,
        backgroundColor: "#efefef",
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        paddingHorizontal: 12,
        borderRadius: 2,
      }}>
        <Text>Button</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// Esse é o certo! Façam assim sempre!
/* 
  Nesse exemplo nós criamos um objeto "styles" (do tipo "StyleSheet"), e dentro deles temos outros três objetos, que são: 
  "container", "estiloTextInputCaixa" e "estiloTextInputCaixa2", cada um com suas propriedades.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  estiloTextInputCaixa: {
    backgroundColor: "#ccc",
    borderRadius: 2,
    width: 200,
  },

  estiloTextInputCaixa2: {
    backgroundColor: "#ccc",
    borderRadius: 2,
    width: 200,
  }
});

/* --------------------------------------------------------------------------------------- */

// É possível usar um objeto genérico para aplicar estilos nos elementos do React Native,
// mas isso acaba sendo uma prática ruim dentro de projetos TypeScript! Tá aí um exemplo
// do que não fazer! :)
// Usem sempre o "StyleSheet.create()"

/* 
  const objeto = {
    marginTop: 5,
    color: "red",
    fontSize: 50,
  }

  <Text style={objeto}>Texto qualquer...</Text>
*/

/* --------------------------------------------------------------------------------------- */