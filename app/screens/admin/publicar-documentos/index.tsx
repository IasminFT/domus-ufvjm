import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function DocumentosScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [arquivo, setArquivo] = useState('');

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleEnviar = () => {
    // Lógica para enviar o documento
    console.log('Documento enviado:', { titulo, descricao, arquivo });
    alert('Documento publicado com sucesso!');
    setTitulo('');
    setDescricao('');
    setArquivo('');
  };

  const handleAnexar = () => {
    // Lógica para anexar arquivo ou link
    console.log('Anexar arquivo ou link');
  };

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.header}>
          <Text style={styles.pageTitle}>PUBLICAR DOCUMENTOS</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Informe o título do documento</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            value={titulo}
            onChangeText={setTitulo}
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Digite aqui..."
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={4}
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Anexe o arquivo ou link</Text>
          <Pressable
            style={({ pressed }) => [
              styles.anexoButton,
              pressed && styles.anexoButtonPressed
            ]}
            onPress={handleAnexar}
          >
            <Ionicons name="attach" size={24} color="#3355ce" />
            <Text style={styles.anexoButtonText}>Selecionar arquivo ou colar link</Text>
          </Pressable>

          {arquivo ? (
            <Text style={styles.arquivoText}>Arquivo selecionado: {arquivo}</Text>
          ) : null}

          <Text style={styles.charLimit}>200 caracteres restantes</Text>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed
            ]}
            onPress={handleEnviar}
          >
            <Text style={styles.buttonText}>PUBLICAR DOCUMENTO</Text>
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
    top: 32
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
  multilineInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  anexoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 10,
  },
  anexoButtonPressed: {
    backgroundColor: '#e8e8e8',
  },
  anexoButtonText: {
    fontSize: 16,
    color: '#3355ce',
    fontFamily: 'Afacad-Regular',
  },
  arquivoText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Afacad-Regular',
    marginTop: 5,
  },
  charLimit: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Afacad-Regular',
    textAlign: 'right',
    marginTop: -10,
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
    fontFamily: 'Alfacad-Regular',
    fontWeight: 'bold',
    fontSize: 20,
  },
});