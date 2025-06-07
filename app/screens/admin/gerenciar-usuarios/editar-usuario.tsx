import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

// Simulação de usuários
const mockUsers = [
  {
    id: 1,
    nome: "Daniel",
    sobrenome: "Rodrigues",
    bloco: "A",
    apartamento: "101",
    curso: "Engenharia",
    matricula: "123456",
    anoEntrada: "2021",
    email: "daniel@example.com",
  },
  {
    id: 2,
    nome: "Andre",
    sobrenome: "Leite",
    bloco: "B",
    apartamento: "102",
    curso: "Sistemas",
    matricula: "654321",
    anoEntrada: "2022",
    email: "andre@example.com",
  },
];

export default function EditarUsuario() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

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

  useEffect(() => {
    const usuario = mockUsers.find((u) => u.id === Number(id));
    if (usuario) {
      const { id, ...dadosSemId } = usuario;
      setFormData(dadosSemId);
    } else {
      Alert.alert("Erro", "Usuário não encontrado.");
      router.back();
    }
  }, [id]);

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    Alert.alert("Sucesso", "Dados atualizados com sucesso!");
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={formData.nome}
        onChangeText={(text) => handleChange("nome", text)}
        placeholder="Nome"
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        value={formData.sobrenome}
        onChangeText={(text) => handleChange("sobrenome", text)}
        placeholder="Sobrenome"
      />

      <Text style={styles.label}>Bloco</Text>
      <TextInput
        style={styles.input}
        value={formData.bloco}
        onChangeText={(text) => handleChange("bloco", text)}
        placeholder="Bloco"
      />

      <Text style={styles.label}>Apartamento</Text>
      <TextInput
        style={styles.input}
        value={formData.apartamento}
        onChangeText={(text) => handleChange("apartamento", text)}
        placeholder="Apartamento"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        style={styles.input}
        value={formData.curso}
        onChangeText={(text) => handleChange("curso", text)}
        placeholder="Curso"
      />

      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        value={formData.matricula}
        onChangeText={(text) => handleChange("matricula", text)}
        placeholder="Matrícula"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Ano de Entrada</Text>
      <TextInput
        style={styles.input}
        value={formData.anoEntrada}
        onChangeText={(text) => handleChange("anoEntrada", text)}
        placeholder="Ano de Entrada"
        keyboardType="numeric"
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    marginBottom: 24,
    textAlign: "center",
    fontFamily: 'BebasNeue-Regular',
    color: '#3355ce',
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 12,
    fontFamily: 'Afacad-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    fontFamily: 'Afacad-Regular',
  },
    button: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonPressed: {
    backgroundColor: '#2a4ac5',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    fontSize: 20,}
});
