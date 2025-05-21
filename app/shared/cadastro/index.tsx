import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleRegister = () => {
    // lógica para cadastro
    console.log('Cadastrar:', { name, email, username, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // ajuste o caminho da imagem do logo
        style={styles.logo}
      />
      <Text style={styles.title}>Domus</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Switch value={remember} onValueChange={setRemember} />
        <Text style={styles.rememberText}>Lembrar minha escolha</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.helpText}>Precisa de ajuda?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: '#0D2B45',
  },
  input: {
    backgroundColor: '#E4E4E4',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2F4FE3',
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rememberText: {
    marginLeft: 8,
  },
  helpText: {
    textAlign: 'right',
    marginTop: 10,
    color: '#000',
  },
});
