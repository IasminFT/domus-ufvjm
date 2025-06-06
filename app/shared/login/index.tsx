import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();

  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const domuslogo = require('@/assets/images/logo-vetorizada.png');


  const handleRegister = () => {
    console.log({ emailOrUser, password, remember });
    //router.push('/(tabs)/index');
  };

  return (
    <View style={styles.container}>
      <Image
        source={domuslogo}
        style={styles.logo}
      />
      <Text style={styles.title}>Domus</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail ou usuário"
        value={emailOrUser}
        onChangeText={setEmailOrUser}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Switch value={remember} onValueChange={setRemember} />
        <Text style={styles.rememberText}>Lembrar minha escolha</Text>
      </View>
      <View style={styles.column}>
        <TouchableOpacity onPress={() => alert('Funcionalidade de ajuda ainda não implementada')}>
          <Text style={styles.helpText}>Precisa de ajuda?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/shared/cadastro')}>
          <Text style={styles.helpText}>Não tem uma conta? <strong>Cadastrar.</strong></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#003049',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 12,
    fontFamily: 'Afacad-Regular',
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#3355ce',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Afacad-Regular',
  },
  row: {
    width: '100%',
    marginTop: 10,
    flexDirection:'row',
    alignItems: 'center',
  },
  column:{
    width: '100%',
    marginTop: 40,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Afacad-Regular',
  },
  helpText: {
    fontSize: 12,
    color: '#3355ce',
    fontFamily: 'Afacad-Regular',
  },
});
