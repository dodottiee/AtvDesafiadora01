import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from "react-native";
import { useEstoque } from "./EstoqueContext"; // Usando o contexto

export default function AdicionarPeca({ navigation }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const { setEstoque } = useEstoque(); // Usando o contexto

  // Função para adicionar uma nova peça
  const adicionarPeca = () => {
    if (!nome || !quantidade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Nova peça a ser adicionada
    const novaPeca = {
      id: (Math.random() * 1000).toString(),  // Gerar um id único
      nome: nome,
      quantidade: parseInt(quantidade),
    };

    // Atualiza o estoque
    setEstoque((prevEstoque) => [...prevEstoque, novaPeca]);

    // Navega de volta para a tela de Estoque
    navigation.navigate('Estoque');

    // Limpa os campos do formulário
    setNome('');
    setQuantidade('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Nova Peça</Text>

      {/* Formulário para adicionar uma peça */}
      <TextInput
        style={styles.input}
        placeholder="Nome da Peça"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      {/* Botão para adicionar a nova peça */}
      <Button title="Adicionar Peça" onPress={adicionarPeca} />
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
  titulo: {
    fontSize: Dimensions.get("window").width < 350 ? 18 : 24,
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
