import { View, Text, StyleSheet, ScrollView, Switch, Pressable, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function SettingsScreen() {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  if (!fontsLoaded) {
    return null;
  }

  const settingsGroups = [
    {
      title: 'INFORMAÇÕES DO SISTEMA',
      items: [
        {
          icon: 'phone-portrait',
          label: 'Versão do Aplicativo',
          action: () => {},
          rightComponent: <Text style={styles.itemValue}>1.0.0</Text>,
        },
        {
          icon: 'hardware-chip',
          label: 'Status do Servidor',
          action: () => {},
          rightComponent: <Text style={[styles.itemValue, {color: '#10B981'}]}>Online</Text>,
        },
      ],
    },
    {
      title: 'PREFERÊNCIAS DO USUÁRIO',
      items: [
        {
          icon: 'notifications',
          label: 'Notificações',
          action: () => setNotificationsEnabled(!notificationsEnabled),
          rightComponent: (
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              thumbColor="#FFFFFF"
              trackColor={{ false: '#9CA3AF', true: '#3355ce' }}
            />
          ),
        },
        {
          icon: 'moon',
          label: 'Modo Escuro',
          action: () => setDarkModeEnabled(!darkModeEnabled),
          rightComponent: (
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              thumbColor="#FFFFFF"
              trackColor={{ false: '#9CA3AF', true: '#3355ce' }}
            />
          ),
        },
      ],
    },
    {
      title: 'GERENCIAMENTO DE CONTA',
      items: [  
        {
          icon: 'lock-closed',
          label: 'Alterar Senha',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'log-out',
          label: 'Sair da Conta',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
      ],
    },
    {
      title: 'POLÍTICAS E DOCUMENTOS',
      items: [
        {
          icon: 'document-text',
          label: 'Termos de Uso',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'shield-checkmark',
          label: 'Política de Privacidade',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
      ],
    },
    {
      title: 'AJUDA E SUPORTE',
      items: [
        {
          icon: 'help-circle',
          label: 'Central de Ajuda',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'chatbubbles',
          label: 'Fale Conosco',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
      ],
    },
    {
      title: 'SOBRE OS DESENVOLVEDORES',
      items: [
        {
          icon: 'people',
          label: 'Equipe de Desenvolvimento',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'code',
          label: 'Tecnologias Utilizadas',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
      ],
    },
    {
      title: 'CRÉDITOS E AGRADECIMENTOS',
      items: [
        {
          icon: 'heart',
          label: 'Apoiadores',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'ribbon',
          label: 'Licenças',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
      ],
    },
  ];

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.header}>
          <Text style={styles.pageTitle}>CONFIGURAÇÕES</Text>
        </View>

        {settingsGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.groupContainer}>
              {group.items.map((item, itemIndex) => (
                <Pressable
                  key={itemIndex}
                  style={({pressed}) => [
                    styles.settingItem,
                    pressed && styles.itemPressed
                  ]}
                  onPress={item.action}
                >
                  <View style={styles.itemContent}>
                    <View style={styles.iconContainer}>
                      <Ionicons name={item.icon as any} size={20} color="#3355ce" />
                    </View>
                    <Text style={styles.itemText}>{item.label}</Text>
                  </View>
                  {item.rightComponent}
                </Pressable>
              ))}
            </View>
          </View>
        ))}
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
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  settingsGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: 'Afacad-Regular',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  groupContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
  },
  itemPressed: {
    backgroundColor: '#e8e8e8',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#e8f0fe',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    flex: 1,
  },
  itemValue: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Afacad-Regular',
    marginRight: 8,
  },
});