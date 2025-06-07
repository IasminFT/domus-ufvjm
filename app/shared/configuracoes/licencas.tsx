import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function LicencasScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Licenças</Text>

        <View style={styles.section}>
          <Text style={styles.label}>
            Este aplicativo foi desenvolvido como parte de um projeto acadêmico para a Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM).
          </Text>

          <Text style={styles.label}>
            As bibliotecas e tecnologias utilizadas estão sujeitas às suas respectivas licenças, que serão listadas abaixo assim que definidas:
          </Text>

          <View style={styles.licenseBox}>
            <Text style={styles.licenseTitle}>React Native</Text>
            <Text style={styles.licenseText}>
              Licença: MIT License{'\n'}
              React Native é uma biblioteca de código aberto mantida pelo Facebook.
            </Text>
          </View>

          <View style={styles.licenseBox}>
            <Text style={styles.licenseTitle}>[Outras Bibliotecas]</Text>
            <Text style={styles.licenseText}>
              Esta seção será preenchida com as licenças de outras bibliotecas e ferramentas utilizadas no projeto.
            </Text>
          </View>

          <Text style={styles.label}>
            Para mais informações ou dúvidas sobre os direitos de uso deste software, entre em contato com a equipe de desenvolvimento pela Central de Ajuda ou pela página "Fale Conosco".
          </Text>
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
    paddingBottom: 100,
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
  section: {
    top: 32,
    gap: 20,
  },
  label: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 12,
  },
  licenseBox: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  licenseTitle: {
    fontSize: 18,
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3355ce',
  },
  licenseText: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: '#374151',
  },
});
