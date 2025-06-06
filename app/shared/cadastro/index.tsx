import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
    const domuslogo = require('@/assets/images/logo-vetorizada.png');
  
  const router = useRouter();

  const handleCadastro = () => {
    console.log({ nome, sobrenome, matricula, curso, dataNascimento, email, senha });
    //router.push('/(tabs)/index');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.logoContainer}>
            <Image
              source={domuslogo}
              style={styles.logo}
            />
            <Text style={styles.logoTitle}>Domus</Text>
      </View>

      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o sobrenome"
          placeholderTextColor="#aaa"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a matrícula"
          placeholderTextColor="#aaa"
          value={matricula}
          onChangeText={setMatricula}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o curso"
          placeholderTextColor="#aaa"
          value={curso}
          onChangeText={setCurso}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#aaa"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o e-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/shared/login')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 40,
    color: '#3355ce',
    marginBottom: 20,
    fontFamily: 'BebasNeue-Regular',
    textAlign: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#003049',
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: 'Afacad-Regular',
    fontSize: 16,
    color: '#333',
    marginBottom:10,
  },
  button: {
    backgroundColor: '#3355ce',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Afacad-Regular',
  },
});

