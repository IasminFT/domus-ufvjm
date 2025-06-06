import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const tiposStatus = ['Pendente', 'Em andamento', 'Concluído', 'Cancelado'];

const HistoricoManutencaoScreen = () => {
  const [solicitacoes, setSolicitacoes] = useState([
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
  ]);

  const atualizarStatus = (id: number, novoStatus: string) => {
    setSolicitacoes((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: novoStatus } : s))
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>MANUTENÇÕES</Text>

        {solicitacoes.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>
              <Text style={styles.label}>Solicitante:</Text> {item.nome}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.label}>Bloco/Apto:</Text> {item.bloco} / {item.apto}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.label}>Tipo:</Text> {item.tipo}
            </Text>

            <Text style={styles.label}>Status:</Text>
            <View style={styles.statusContainer}>
              {tiposStatus.map((status) => (
                <TouchableOpacity
                  key={status}
                  style={[
                    styles.statusButton,
                    item.status === status && styles.statusButtonActive,
                    { borderColor: getStatusColor(status) },
                  ]}
                  onPress={() => atualizarStatus(item.id, status)}
                >
                  <Text
                    style={[
                      styles.statusButtonText,
                      item.status === status && { color: '#fff' },
                    ]}
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Concluído':
      return '#28a745';
    case 'Em andamento':
      return '#ffc107';
    case 'Pendente':
      return '#007bff';
    case 'Cancelado':
      return '#dc3545';
    default:
      return '#ccc';
  }
};

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
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  statusButtonActive: {
    backgroundColor: '#3355ce',
    borderColor: '#3355ce',
  },
  statusButtonText: {
    fontSize: 14,
    color: '#3355ce',
    fontFamily: 'Afacad-Regular',
  },
});

export default HistoricoManutencaoScreen;
