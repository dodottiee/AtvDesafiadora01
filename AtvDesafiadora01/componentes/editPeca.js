import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from "react-native";
import { useEstoque } from "./EstoqueContext"; // Usando o contexto

export default function EditarQuantidade({ route, navigation }) {
  const { peca } = route.params; // Pega a peça passada como parâmetro
  const { setEstoque } = useEstoque(); // Função para atualizar o estoque

  const [quantidade, setQuantidade] = useState(peca.quantidade.toString());

  // Função para salvar as alterações
  const salvarAlteracoes = () => {
    if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
      return;
    }

    const novaPeca = { ...peca, quantidade: parseInt(quantidade) };

    // Atualiza o estoque com a nova quantidade da peça
    setEstoque((prevEstoque) =>
      prevEstoque.map((item) =>
        item.id === novaPeca.id ? novaPeca : item
      )
    );

    // Volta para a tela de Estoque
    navigation.navigate('Estoque');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Quantidade de Peça</Text>
      <Text style={styles.texto}>Nome da Peça: {peca.nome}</Text>
      <Text style={styles.texto}>Código: {peca.id}</Text>

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Button title="Salvar Alterações" onPress={salvarAlteracoes} />

      <Button
        title="Voltar para Estoque"
        onPress={() => navigation.navigate('Estoque')}
      />
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
  texto: {
    fontSize: 16,
    marginBottom: 10,
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
