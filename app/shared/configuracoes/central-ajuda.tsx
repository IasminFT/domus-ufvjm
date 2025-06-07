import React from 'react';
import { Linking, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CentralAjudaScreen() {
  const handleSendEmail = () => {
    Linking.openURL('mailto:suporte@exemplo.com?subject=Ajuda%20-%20App');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Central de Ajuda</Text>

        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Perguntas Frequentes (FAQ)</Text>

          <View style={styles.faqItem}>
            <Text style={styles.question}>1. Como redefinir minha senha?</Text>
            <Text style={styles.answer}>Vá até o menu de perfil e selecione "Alterar Senha".</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>2. Onde posso acessar os termos de uso?</Text>
            <Text style={styles.answer}>Você pode acessar os termos de uso no menu "Termos e Políticas".</Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>3. Como reportar um problema técnico?</Text>
            <Text style={styles.answer}>Você pode nos enviar um e-mail clicando no botão abaixo.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
          <Text style={styles.buttonText}>Entrar em Contato com o Suporte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
    top: 32,
    marginBottom: 40,
  },
  faqSection: {
    top: 32,
    marginBottom: 20,
  },
  faqTitle: {
    fontSize: 24,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: '#3355ce',
    marginBottom: 4,
  },
  answer: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: '#374151',
  },
  button: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
