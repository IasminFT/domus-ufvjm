import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditarHorariosOnibus() {
  const [horariosIda, setHorariosIda] = useState(['6h50', '7h40', '12h20', '13h40', '18h20']);
  const [horariosVolta, setHorariosVolta] = useState(['7h20', '12h20', '13h20', '18h00', '22h50']);

  const handleChangeIda = (index: number, value: string) => {
    const novosHorarios = [...horariosIda];
    novosHorarios[index] = value;
    setHorariosIda(novosHorarios);
  };

  const handleChangeVolta = (index: number, value: string) => {
    const novosHorarios = [...horariosVolta];
    novosHorarios[index] = value;
    setHorariosVolta(novosHorarios);
  };

  const handleSave = () => {
    // Lógica para salvar os horários
    alert('Horários salvos com sucesso!');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>EDITAR HORÁRIOS</Text>

        <View style={styles.grid}>
          {horariosIda.map((item, index) => (
            <View key={index} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={item}
                onChangeText={(value) => handleChangeIda(index, value)}
                placeholder="Ida"
              />
            </View>
          ))}
          {horariosVolta.map((item, index) => (
            <View key={index} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={item}
                onChangeText={(value) => handleChangeVolta(index, value)}
                placeholder="Volta"
              />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    fontFamily: 'Afacad-Regular',
  },
  title: {
    fontSize: 40,
    color: '#3355ce',
    textAlign: 'center',
    margin: 30,
    fontFamily: 'BebasNeue-Regular',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    width: '48%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F1F1F1',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#3355ce',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
});
