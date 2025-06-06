import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const solicitacoes = [
  {
    id: 1,
    nome: 'João Silva',
    bloco: 'A',
    apto: '101',
    tipo: 'Elétrica',
    status: 'Concluído',
  },
  {
    id: 2,
    nome: 'Maria Souza',
    bloco: 'B',
    apto: '203',
    tipo: 'Hidráulica',
    status: 'Em andamento',
  },
  {
    id: 3,
    nome: 'Carlos Lima',
    bloco: 'C',
    apto: '305',
    tipo: 'Internet',
    status: 'Pendente',
  },
  {
    id: 4,
    nome: 'Ana Torres',
    bloco: 'D',
    apto: '402',
    tipo: 'PC',
    status: 'Cancelado',
  },
];

// Função auxiliar para retornar cor do status
const getStatusStyle = (status: string) => {
  let color = '#333';
  switch (status) {
    case 'Concluído':
      color = '#28a745'; // verde
      break;
    case 'Em andamento':
      color = '#ffc107'; // amarelo
      break;
    case 'Pendente':
      color = '#007bff'; // azul
      break;
    case 'Cancelado':
      color = '#dc3545'; // vermelho
      break;
  }
  return { color };
};

export default function HistoricoManutencaoScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>HISTÓRICO DE MANUTENÇÕES</Text>

        {solicitacoes.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}><Text style={styles.label}>Solicitante:</Text> {item.nome}</Text>
            <Text style={styles.cardText}><Text style={styles.label}>Bloco/Apto:</Text> {item.bloco} / {item.apto}</Text>
            <Text style={styles.cardText}><Text style={styles.label}>Tipo:</Text> {item.tipo}</Text>
            <Text style={[styles.cardText, getStatusStyle(item.status)]}>
              <Text style={styles.label}>Status:</Text> {item.status}
            </Text>
          </View>
        ))}
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
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    color: '#504A4A',
    fontFamily: 'Afacad-Regular',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
});
