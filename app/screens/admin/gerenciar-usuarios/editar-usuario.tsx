import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditarUsuario() {
  const [nome, setNome] = useState("João da Silva");
  const [email, setEmail] = useState("joao@email.com");

  const handleSalvar = () => {
    // lógica de salvar alterações
    console.log("Usuário salvo:", { nome, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do usuário"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email do usuário"
        keyboardType="email-address"
      />

      <Pressable style={styles.saveButton} onPress={handleSalvar}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#3355ce" },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: "#3355ce",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  saveButtonText: { color: "#fff", fontWeight: "bold" },
});
