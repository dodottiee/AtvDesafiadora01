import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Dimensions } from "react-native";
import { useEstoque } from "./EstoqueContext";

export default function Estoque({ navigation }) {
  const { estoque, setEstoque } = useEstoque();

  const editarQuantidadeHandler = (peca) => {
    navigation.navigate("EditPeca", { peca });
  };

  const irParaAdicionarPeca = () => {
    navigation.navigate("AddPeca");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque de Peças</Text>

      <Button title="Adicionar Peça" onPress={irParaAdicionarPeca} />

      <FlatList
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome} - Quantidade: {item.quantidade}</Text>
            <Button title="Editar Quantidade" onPress={() => editarQuantidadeHandler(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  titulo: {
    fontSize: Dimensions.get("window").width < 350 ? 18 : 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
});
