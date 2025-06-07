import React from 'react';
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function ApoiadoresScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Apoiadores</Text>

        <View style={styles.supporter}>
          <Text style={styles.supporterTitle}>
            Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)
          </Text>
          <Image
            source={require('@/assets/images/ufvjm-logo.png')} // Substitua pelo caminho correto
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.supporter}>
          <Text style={styles.supporterTitle}>
            Departamento de Computação (DECOM)
          </Text>
          <Image
            source={require('@/assets/images/decom-logo.png')} // Substitua pelo caminho correto
            style={styles.logo}
            resizeMode="contain"
          />
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
  supporter: {
    marginBottom: 40,
    alignItems: 'center',
  },
  supporterTitle: {
    fontSize: 18,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 16,
    textAlign: 'center',
    padding:30
  },
  logo: {
    width: 200,
    height: 100,
  },
});
