import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function TecnologiasScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Tecnologias Utilizadas</Text>

        <View style={styles.techBox}>
          <View style={styles.iconRow}>
            <FontAwesome5 name="react" size={24} color="#3355ce" />
            <Text style={styles.techTitle}>React Native</Text>
          </View>
          <Text style={styles.techDescription}>
            Utilizado para o desenvolvimento do aplicativo mobile, permitindo criar aplicações nativas para Android e iOS com uma única base de código.
          </Text>
        </View>

        <View style={styles.techBox}>
          <View style={styles.iconRow}>
            <FontAwesome5 name="tools" size={24} color="#3355ce" />
            <Text style={styles.techTitle}>[Tecnologia a ser adicionada]</Text>
          </View>
          <Text style={styles.techDescription}>
            Descrição da tecnologia e como ela está sendo utilizada no projeto.
          </Text>
        </View>

        <View style={styles.techBox}>
          <View style={styles.iconRow}>
            <FontAwesome5 name="tools" size={24} color="#3355ce" />
            <Text style={styles.techTitle}>[Tecnologia a ser adicionada]</Text>
          </View>
          <Text style={styles.techDescription}>
            Descrição da tecnologia e como ela está sendo utilizada no projeto.
          </Text>
        </View>

        <View style={styles.techBox}>
          <View style={styles.iconRow}>
            <FontAwesome5 name="tools" size={24} color="#3355ce" />
            <Text style={styles.techTitle}>[Tecnologia a ser adicionada]</Text>
          </View>
          <Text style={styles.techDescription}>
            Descrição da tecnologia e como ela está sendo utilizada no projeto.
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
  techBox: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 24,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  techTitle: {
    fontSize: 18,
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    color: '#3355ce',
  },
  techDescription: {
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    color: '#374151',
  },
});
