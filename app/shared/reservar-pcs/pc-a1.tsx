import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const initialHorarios = [
  { faixa: '7h - 9h', reservado: false },
  { faixa: '9h - 11h', reservado: true },
  { faixa: '11h - 13h', reservado: false },
  { faixa: '13h - 15h', reservado: true },
  { faixa: '15h - 18h', reservado: true },
  { faixa: '18h - 20h', reservado: false },
  { faixa: '20h - 22h', reservado: true },
  { faixa: '22h - 00h', reservado: true },
];

export default function PCDetailsScreen() {
  const [horarios, setHorarios] = useState(initialHorarios);

  const toggleReserva = (index: number) => {
    setHorarios(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, reservado: !item.reservado } : item
      )
    );
  };

  const cancelarReserva = (index: number) => {
    if (!horarios[index].reservado) return;

    Alert.alert(
      'Cancelar reserva',
      `Deseja cancelar a reserva de ${horarios[index].faixa}?`,
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            setHorarios(prev =>
              prev.map((item, i) =>
                i === index ? { ...item, reservado: false } : item
              )
            );
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PC - A1</Text>
        <Feather name="info" size={20} color="gray" />
      </View>

      <Text style={styles.subtitle}>Clique no horário para reservar</Text>

      {horarios.map((horario, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.horario}>{horario.faixa}</Text>

          <TouchableOpacity onPress={() => toggleReserva(index)}>
            <Feather
              name={horario.reservado ? 'check-circle' : 'circle'}
              size={20}
              color={horario.reservado ? 'limegreen' : 'gray'}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => cancelarReserva(index)}>
            <Feather name="x" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.info}>
        Clique no X para cancelar a reserva.
      </Text>
      <Text style={styles.info}>
        A reserva irá expirar automaticamente{'\n'}após o tempo definido para o uso do PC
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Afacad-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  horario: {
    fontSize: 16,
    flex: 1,
  },
  icon: {
    marginRight: 16,
  },
  info: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 12,
    fontFamily: 'Afacad-Regular',
  },
});
