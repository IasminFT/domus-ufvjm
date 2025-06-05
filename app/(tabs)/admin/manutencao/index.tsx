import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

interface MenuItem {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  route?: string;
}

export default function ManutencaoScreen() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const [searchQuery, setSearchQuery] = useState('');

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const tiposManutencao: MenuItem[] = [
    { title: 'Manutenção Elétrica', icon: 'flash' },
    { title: 'Manutenção Hidráulica', icon: 'water' },
    { title: 'Manutenção de Rede', icon: 'wifi' },
    { title: 'Manutenção Estrutural', icon: 'home' },
    { title: 'Manutenção de PCs', icon: 'desktop' },
  ];

  const handleHistorico = () => {
    router.push('/(tabs)/admin/manutencao/historico');
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
          <Text style={styles.pageTitle}>MANUTENÇÃO</Text>
        </View>

        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar manutenções..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#888"
          />
        </View>

        {/* Tipos de Manutenção */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TIPOS DE MANUTENÇÃO</Text>
          <View style={styles.menuList}>
            {tiposManutencao.map((item, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.menuItemPressed
                ]}
                onPress={() => console.log('Selecionado:', item.title)}
              >
                <View style={styles.iconContainer}>
                  <Ionicons name={item.icon} size={20} color="#3355ce" />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
                <Ionicons name="chevron-forward" size={20} color="#888" />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Botão Histórico */}
        <Pressable
          style={({ pressed }) => [
            styles.historyButton,
            pressed && styles.historyButtonPressed
          ]}
          onPress={handleHistorico}
        >
          <Ionicons name="time" size={24} color="#3355ce" />
          <Text style={styles.historyButtonText}>HISTÓRICO DE MANUTENÇÕES</Text>
        </Pressable>
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
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
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
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
    marginBottom: 15,
    marginTop: 10,
  },
  menuList: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  menuItemPressed: {
    backgroundColor: '#e8e8e8',
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginTop: 30,
    gap: 10,
  },
  historyButtonPressed: {
    backgroundColor: '#e8e8e8',
  },
  historyButtonText: {
    fontSize: 16,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
});