import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diasDisponiveis = [
  { id: 1, dia: '06/06/2025', horarios: ['09:00', '10:30', '14:00'] },
  { id: 2, dia: '07/06/2025', horarios: ['08:00', '13:00', '15:30'] },
  { id: 3, dia: '08/06/2025', horarios: ['10:00', '11:30', '16:00'] },
];

export default function AgendamentoPsicologoScreen() {
  const [diaSelecionado, setDiaSelecionado] = useState<number | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  const handleSelecionarDia = (id: number) => {
    setDiaSelecionado(id);
    setHorarioSelecionado(null);
  };

  const handleSelecionarHorario = (horario: string) => {
    setHorarioSelecionado(horario);
  };

  const handleAgendar = () => {
    const dia = diasDisponiveis.find(d => d.id === diaSelecionado)?.dia;
    Alert.alert('Consulta agendada', `Você agendou para o dia ${dia} às ${horarioSelecionado}`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>AGENDAR CONSULTA</Text>

        <Text style={styles.sectionTitle}>Selecione o dia:</Text>
        {diasDisponiveis.map((dia) => (
          <TouchableOpacity
            key={dia.id}
            style={[
              styles.diaButton,
              diaSelecionado === dia.id && styles.diaButtonSelecionado,
            ]}
            onPress={() => handleSelecionarDia(dia.id)}
          >
            <Text style={styles.diaText}>{dia.dia}</Text>
          </TouchableOpacity>
        ))}

        {diaSelecionado && (
          <>
            <Text style={styles.sectionTitle}>Horários disponíveis:</Text>
            <View style={styles.horariosContainer}>
              {diasDisponiveis
                .find((dia) => dia.id === diaSelecionado)
                ?.horarios.map((horario) => (
                  <TouchableOpacity
                    key={horario}
                    style={[
                      styles.horarioButton,
                      horarioSelecionado === horario && styles.horarioSelecionado,
                    ]}
                    onPress={() => handleSelecionarHorario(horario)}
                  >
                    <Text
                      style={[
                        styles.horarioText,
                        horarioSelecionado === horario && { color: '#fff' },
                      ]}
                    >
                      {horario}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          </>
        )}

        {diaSelecionado && horarioSelecionado && (
          <TouchableOpacity style={styles.button} onPress={handleAgendar}>
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    marginBottom: 20,
    fontFamily: 'BebasNeue-Regular',
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Afacad-Regular',
  },
  diaButton: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  diaButtonSelecionado: {
    backgroundColor: '#cfd9ff',
  },
  diaText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Afacad-Regular',
  },
  horariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  horarioButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  horarioSelecionado: {
    backgroundColor: '#3355ce',
  },
  horarioText: {
    color: '#333',
    fontFamily: 'Afacad-Regular',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#3355ce',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
});
