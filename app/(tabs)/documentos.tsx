import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DocumentosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meus Documentos</Text>
      
      <View style={styles.documentItem}>
        <Text style={styles.docTitle}>RG</Text>
        <Text style={styles.docDate}>Válido até: 12/12/2030</Text>
      </View>

      <View style={styles.documentItem}>
        <Text style={styles.docTitle}>CPF</Text>
        <Text style={styles.docDate}>Emitido em: 15/05/2015</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  documentItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  docTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  docDate: {
    color: '#666',
    marginTop: 5
  }
});