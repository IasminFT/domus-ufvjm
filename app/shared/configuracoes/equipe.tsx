import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function EquipeScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Equipe de Desenvolvimento</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professora Responsável</Text>
          <Text style={styles.member}>Kattiana Constantino</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipe de Gestão (Disciplina de GPS)</Text>
          <Text style={styles.member}>
            Victor Amorim <Text style={styles.role}>(Líder Técnico)</Text>
          </Text>
          <Text style={styles.member}>
            Mariana Morais <Text style={styles.role}>(Product Owner)</Text>
          </Text>
          <Text style={styles.member}>
            Jhonathan Santos <Text style={styles.role}>(Gerente Geral)</Text>
          </Text>
          <Text style={styles.member}>
            Ian Carlos <Text style={styles.role}>(Analista de Processos)</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipe Técnica (Engenharia de Software)</Text>
          <Text style={styles.member}>
            Iasmin Torres <Text style={styles.role}>(Front-end e UI/UX)</Text>
          </Text>
          <Text style={styles.member}>
            Daniel Rodrigues <Text style={styles.role}>(UI/UX, Front-End e Engenharia de Requisitos)</Text>
          </Text>
          <Text style={styles.member}>
            Thais Daniela <Text style={styles.role}>(Engenharia de Requisitos)</Text>
          </Text>
          <Text style={styles.member}>
            Leonardo Soares <Text style={styles.role}>(Full Stack)</Text>
          </Text>
          <Text style={styles.member}>
            André Leite <Text style={styles.role}>(Back-end)</Text>
          </Text>
          <Text style={styles.member}>
            Lavinia Charrua <Text style={styles.role}>(Back-end)</Text>
          </Text>
          <Text style={styles.member}>
            Kaique Vieira <Text style={styles.role}>(DevSecOps)</Text>
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  member: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    marginBottom: 6,
  },
  role: {
    color: '#3355ce',
    fontFamily: 'Afacad-Regular',
  },
});
