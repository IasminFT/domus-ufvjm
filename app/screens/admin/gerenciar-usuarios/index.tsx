import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

interface User {
  id: number;
  name: string;
}

export default function UsuariosScreen() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Daniel Rodrigues' },
    { id: 2, name: 'Andre Leite' },
    { id: 3, name: 'Iasmin Torres' },
    { id: 4, name: 'Osiel Junior' },
    { id: 5, name: 'Marcos Felipe' },
  ]);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleAddUser = () => {
    router.push('../admin/gerenciar-usuarios/novo-usuario');
  };

  const handleEditUser = (userId: number) => {
    router.push(`../admin/gerenciar-usuarios/editar-usuario/${userId}`);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle="dark-content" />
        
        {/* Cabeçalho com título e botão de adicionar */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>USUÁRIOS</Text>
          <Pressable onPress={handleAddUser} style={styles.addButton}>
            <Ionicons name="person-add" size={24} color="#3355ce" />
          </Pressable>
        </View>

        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar usuários..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#888"
          />
        </View>

        {/* Lista de Usuários */}
        <View style={styles.usersList}>
          {filteredUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <Text style={styles.userName}>{user.name}</Text>
              <View style={styles.actionsContainer}>
                <Pressable 
                  onPress={() => handleEditUser(user.id)}
                  style={({ pressed }) => [
                    styles.actionButton,
                    pressed && styles.actionButtonPressed
                  ]}
                >
                  <Ionicons name="pencil" size={20} color="#3355ce" />
                </Pressable>
                <Pressable 
                  onPress={() => handleDeleteUser(user.id)}
                  style={({ pressed }) => [
                    styles.actionButton,
                    pressed && styles.actionButtonPressed
                  ]}
                >
                  <Ionicons name="trash" size={20} color="#ff3b30" />
                </Pressable>
              </View>
            </View>
          ))}
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
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
    top: 32
  },
  addButton: {
    padding: 10,
    top: 32
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginVertical: 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    top: 32
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Afacad-Regular',
    fontSize: 16,
    color: '#374151',
    height: '100%',
  },
  usersList: {
    marginTop: 20,
    gap: 12,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  userName: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  actionButtonPressed: {
    backgroundColor: '#e0e0e0',
  },
});