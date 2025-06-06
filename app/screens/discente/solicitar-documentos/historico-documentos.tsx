import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HistoricoDocumentos() {
  const historico = [
    {
      tipo: 'Documento X',
      data: '10/05/2025',
      status: 'Entregue',
    },
    {
      tipo: 'Documento Y',
      data: '08/05/2025',
      status: 'Pendente',
    },
    {
      tipo: 'Documento Z',
      data: '04/05/2025',
      status: 'Em andamento',
    },
  ];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>HISTÓRICO DE SOLICITAÇÃO DE DOCUMENTOS</Text>

      {historico.map((item, index) => (
        <View key={index} style={styles.card}>
          <Ionicons name="document" size={24} color="#3355ce" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.tipo}>{item.tipo}</Text>
            <Text style={styles.detalhes}>Data: {item.data}</Text>
            <Text style={styles.detalhes}>Status: {item.status}</Text>
          </View>
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
    padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    marginBottom: 30,
    fontFamily: 'BebasNeue-Regular',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
    fontFamily: 'Afacad-Regular',
  },
  detalhes: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'Afacad-Regular',
  },
});
