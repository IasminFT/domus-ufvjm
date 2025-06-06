import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const alerts = [
  {
    id: 1,
    date: '05/06/2025',
    message: 'Manutenção na rede elétrica entre 14h e 16h.',
  },
  {
    id: 2,
    date: '03/06/2025',
    message: 'Sistema fora do ar para atualizações no final de semana.',
  },
  {
    id: 3,
    date: '01/06/2025',
    message: 'Novo formulário de solicitação disponível.',
  },
];

export default function AlertasScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>ALERTAS</Text>

        {alerts.map((alert) => (
          <View key={alert.id} style={styles.alertBox}>
            <MaterialIcons name="warning" size={24} color="#FFA500" style={styles.icon} />
            <View style={styles.alertTextContainer}>
              <Text style={styles.alertDate}>{alert.date}</Text>
              <Text style={styles.alertMessage}>{alert.message}</Text>
            </View>
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
  alertBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fef3c7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontFamily: 'Afacad-Regular',
  },
  alertMessage: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Afacad-Regular',
  },
});
