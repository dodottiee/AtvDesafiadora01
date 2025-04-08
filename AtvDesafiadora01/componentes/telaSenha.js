import React, { useState } from "react";
import { View, Text, Button, StatusBar, Alert, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>;

export default function Home({ navigation }: Props) {
  const [senha, setSenha] = useState('');

  // Função para gerar uma senha aleatória
  const gerarSenhaAleatoria = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senhaGerada = '';
    for (let i = 0; i < 8; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senhaGerada += caracteres.charAt(indiceAleatorio);
    }
    setSenha(senhaGerada);
    // Exibe a senha gerada em um alerta
    Alert.alert("Sua nova senha", `A senha gerada é: ${senhaGerada}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Redefina sua senha</Text>

      {/* Formulário para digitar nome de usuário */}
      <TextInput style={styles.input} placeholder="Digite seu nome de usuário" />

      {/* Exibe a senha gerada */}
      <TextInput
        style={styles.input}
        value={senha}
        editable={false}
        placeholder="Senha gerada"
      />

      {/* Botão para gerar a nova senha */}
      <Button title="Redefinir senha" onPress={gerarSenhaAleatoria} />

      {/* Botão para navegar para a tela de login */}
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    width: "100%",
  },
});
