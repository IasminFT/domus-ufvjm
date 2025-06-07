import React, { useState } from 'react';
import { Alert, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AlterarSenhaScreen() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleAlterarSenha = () => {
    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert('Erro', 'A nova senha e a confirmação não coincidem.');
      return;
    }

    // Aqui você chamaria sua API para atualizar a senha
    Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    setSenhaAtual('');
    setNovaSenha('');
    setConfirmarSenha('');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Alterar Senha</Text>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Senha atual</Text>
            <TextInput
              secureTextEntry
              value={senhaAtual}
              onChangeText={setSenhaAtual}
              style={styles.input}
              placeholder="Digite sua senha atual"
              placeholderTextColor="#aaa"
            />
          </View>

          <View>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
              secureTextEntry
              value={novaSenha}
              onChangeText={setNovaSenha}
              style={styles.input}
              placeholder="Digite sua nova senha"
              placeholderTextColor="#aaa"
            />
          </View>

          <View>
            <Text style={styles.label}>Confirmar nova senha</Text>
            <TextInput
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              style={styles.input}
              placeholder="Confirme sua nova senha"
              placeholderTextColor="#aaa"
            />
          </View>

          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleAlterarSenha}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
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
  header: {
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
    top: 32,
  },
  formContainer: {
    top: 32,
    gap: 20,
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
  button: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonPressed: {
    backgroundColor: '#2a4ac5',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
