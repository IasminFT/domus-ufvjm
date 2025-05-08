import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Moradia</Text>
        <View style={styles.notificationIcon}>
          <View style={styles.notificationBadge} />
        </View>
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchBar}>
        <Image
          source={require('@/assets/images/icons/lupa.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Buscar..."
          style={styles.searchInput}
        />
      </View>

      {/* Título de boas-vindas */}
      <Text style={styles.welcomeTitle}>Bem-vindo à Moradia!</Text>

      {/* Botões principais */}
      <Link href="/login" asChild>
        <Pressable style={styles.featureButton}>
          <View style={styles.cardIcon}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}></Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.featureTitle}>Acessar</Text>
            <Text style={styles.featureSubtitle}>Ir para o login</Text>
          </View>
        </Pressable>
      </Link>

      <Pressable style={styles.featureButton}>
        <View style={styles.cardIcon}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}></Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.featureTitle}>Documentos</Text>
          <Text style={styles.featureSubtitle}>Visualizar editais</Text>
        </View>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3355ce',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#333',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingLeft: 40,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  featureButton: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#4c6ef5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  featureTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  featureSubtitle: {
    color: 'white',
    fontSize: 13,
    opacity: 0.9,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    fontSize: 22,
  },
});
