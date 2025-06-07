import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function AdicionarUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    bloco: "",
    apartamento: "",
    curso: "",
    matricula: "",
    anoEntrada: "",
    email: "",
  });

  const [fontsLoaded, fontError] = useFonts({
      'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
      'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
      'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
    });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCadastrar = () => {
    console.log("Novo usuário:", formData);
    // Aqui vai a lógica para salvar no backend ou local storage
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Cadastrar Novo Usuário</Text>

      {[
        { label: "Nome", key: "nome" },
        { label: "Sobrenome", key: "sobrenome" },
        { label: "Bloco", key: "bloco" },
        { label: "Apartamento", key: "apartamento" },
        { label: "Curso", key: "curso" },
        { label: "Matrícula", key: "matricula" },
        { label: "Ano de Entrada", key: "anoEntrada" },
        { label: "Email", key: "email" },
      ].map(({ label, key }) => (
        <View key={key} style={styles.inputGroup}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(key, text)}
            placeholder={`Digite o ${label.toLowerCase()}`}
            keyboardType={key === "email" ? "email-address" : "default"}
          />
        </View>
      ))}

      <Pressable style={styles.button} onPress={handleCadastrar}>
        <Ionicons name="person-add-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: "#3355ce",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: 'BebasNeue-Regular'
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Afacad-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
    fontFamily: 'Afacad-Regular',
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3355ce",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: 'Afacad-Regular',
    fontSize: 20
  },
});
