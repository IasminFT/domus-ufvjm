import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function FormsManutencaoEstrutural() {
  const [blocoApto, setBlocoApto] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = () => {
    if (!blocoApto.trim() || !descricao.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos antes de enviar.');
      return;
    }

    // Integrar com uma API futuramente
    console.log('Solicitação enviada:', { tipo: 'Estrutural', blocoApto, descricao });
    Alert.alert('Solicitação Enviada', 'Sua solicitação de manutenção estrutural foi registrada.');

    setBlocoApto('');
    setDescricao('');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>SOLICITAR MANUTENÇÃO</Text>
        <Ionicons name="time-outline" size={40} color="#504A4A" style={styles.titleIcon} />
      </View>

      <View style={styles.subtitleContainer}>
        <Ionicons name="build" size={24} color="#504A4A" style={styles.subtitleIcon} />
        <Text style={styles.subtitle}>Manutenção Estrutural</Text>
      </View>

      <Text style={styles.label}>Informe o Bloco e Apartamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        value={blocoApto}
        onChangeText={setBlocoApto}
      />

      <Text style={styles.label}>Descreva a Solicitação</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Digite aqui..."
        multiline
        numberOfLines={10}
        value={descricao}
        onChangeText={setDescricao}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Enviar Solicitação</Text>
        </Pressable>
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
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center', 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:10,
    marginBottom: 20,
  },
  subtitleIcon: {
    marginRight: 10,
  },
   titleIcon: {
    marginBottom:5,
  },
  subtitle: {
    fontSize: 20,
    color: '#504A4A',
    fontFamily: 'Afacad-Regular',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Afacad-Regular',
    alignSelf: 'center', 
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'Afacad-Regular',
    color: '#504A4A',
  },
  textArea: {
    height: 250,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  submitButton: {
    backgroundColor: '#3355ce',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 30,
    width: '70%',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
});
