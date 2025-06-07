import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FaleConoscoScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode integrar com backend ou serviço de envio de e-mails.
    Alert.alert('Mensagem enviada', 'Obrigado por entrar em contato!');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Fale Conosco</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Escreva sua mensagem"
            placeholderTextColor="#aaa"
            multiline
            numberOfLines={6}
            value={mensagem}
            onChangeText={setMensagem}
          />

          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>
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
  formContainer: {
    top: 32,
    gap: 10
  },
  label: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontFamily: 'Afacad-Regular',
    fontSize: 16,
    color: '#374151',
  },
  multilineInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
