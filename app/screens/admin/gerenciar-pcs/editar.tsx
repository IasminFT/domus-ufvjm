import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditarPCs() {
  const router = useRouter();
  const [pcs, setPcs] = useState([
    { id: 1, name: "Pc - A1", horarios: ["08:00", "10:00"] },
    { id: 2, name: "Pc - A2", horarios: ["09:00", "11:00"] },
    { id: 3, name: "Pc - A3", horarios: ["13:00"] },
    { id: 4, name: "Pc - A4", horarios: [] },
    { id: 5, name: "Pc - A5", horarios: ["15:00", "17:00"] },
  ]);
  const [newPcName, setNewPcName] = useState("");
  const [fontsLoaded, fontError] = useFonts({
        'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
        'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
        'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
      });

  // Adiciona um novo PC
const handleAddPC = () => {
  if (!newPcName.trim()) return;
  const newPc = {
    id: Date.now(),
    name: newPcName.trim(),
    horarios: [],
  };
  setPcs(prev => [...prev, newPc]);
  setNewPcName("");
};

// Deleta um PC pelo ID
const handleDeletePC = (id: number) => {
  setPcs(prev => prev.filter(pc => pc.id !== id));
};

// Adiciona um horário a um PC específico
const handleAddHorario = (pcId: number, horario = "00:00") => {
  setPcs(prev =>
    prev.map(pc =>
      pc.id === pcId
        ? { ...pc, horarios: [...pc.horarios, horario] }
        : pc
    )
  );
};

// Edita um horário específico em um PC
const handleEditHorario = (pcId: number, index: number, newHorario: string) => {
  if (typeof newHorario !== 'string') return;

  setPcs(prev =>
    prev.map(pc => {
      if (pc.id !== pcId) return pc;
      const horariosAtualizados = [...pc.horarios];
      horariosAtualizados[index] = newHorario;
      return { ...pc, horarios: horariosAtualizados };
    })
  );
};

// Remove um horário específico de um PC
const handleDeleteHorario = (pcId: number, index: number) => {
  setPcs(prev =>
    prev.map(pc => {
      if (pc.id !== pcId) return pc;
      const horariosAtualizados = [...pc.horarios];
      horariosAtualizados.splice(index, 1);
      return { ...pc, horarios: horariosAtualizados };
    })
  );
};


  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar PC's</Text>

      <View style={styles.newPCContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do novo PC"
          value={newPcName}
          onChangeText={setNewPcName}
        />
        <Pressable style={styles.addButton} onPress={handleAddPC}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Adicionar PC</Text>
        </Pressable>
      </View>

      {pcs.map((pc) => (
        <View key={pc.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.pcName}>{pc.name}</Text>
            <Pressable onPress={() => handleDeletePC(pc.id)}>
              <Ionicons name="trash" size={20} color="red" />
            </Pressable>
          </View>

          {pc.horarios.map((horario, index) => (
            <View key={index} style={styles.horarioRow}>
              <TextInput
                style={styles.horarioInput}
                value={horario ?? ""}
                onChangeText={(text) => handleEditHorario(pc.id, index, text)}
              />
              <Pressable onPress={() => handleDeleteHorario(pc.id, index)}>
                <Ionicons name="trash-outline" size={20} color="red" />
              </Pressable>
            </View>
          ))}

          <Pressable style={styles.addHorarioButton} onPress={() => handleAddHorario(pc.id, "00:00")}>
            <Ionicons name="add-circle-outline" size={16} color="#3355ce" />
            <Text style={styles.addHorarioText}>Adicionar Horário</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: '#3355ce',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'BebasNeue-Regular'
  },
  newPCContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3355ce',
    padding: 10,
    borderRadius: 8,
    gap: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Afacad-Regular'
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fdfdfd',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pcName: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Afacad-Regular'
  },
  horarioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  horarioInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  addHorarioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 6,
  },
  addHorarioText: {
    color: '#3355ce',
    fontWeight: '600',
    fontFamily: 'Afacad-Regular',
  },
});
