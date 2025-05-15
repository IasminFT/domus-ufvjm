import { View, Text, StyleSheet, ScrollView, Image, Pressable, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function ProfileScreen() {
  const [fontsLoaded] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const user = {
    name: 'Daniel Rodrigues Pereira',
    email: 'daniel.pereira@ufvjm.edu.br',
    matricula: '2023123456',
    anoEntrada: '2023',
    previsaoSaida: '2027',
    bloco: '2',
    apartamento: '305',
    curso: 'Sistemas de Informação',
    telefone: '(38) 99999-9999',
    status: 'Ativo'
  };

  const profileGroups = [
    {
      title: 'INFORMAÇÕES ACADÊMICAS',
      items: [
        {
          icon: 'id-card',
          label: 'Matrícula',
          value: user.matricula,
        },
        {
          icon: 'school',
          label: 'Curso',
          value: user.curso,
        },
        {
          icon: 'calendar',
          label: 'Ano de Entrada',
          value: user.anoEntrada,
        },
        {
          icon: 'exit',
          label: 'Previsão de Saída',
          value: user.previsaoSaida,
        },
      ],
    },
    {
      title: 'INFORMAÇÕES RESIDENCIAIS',
      items: [
        {
          icon: 'home',
          label: 'Bloco',
          value: user.bloco,
        },
        {
          icon: 'business',
          label: 'Apartamento',
          value: user.apartamento,
        },
      ],
    },
    {
      title: 'CONFIGURAÇÕES',
      items: [
        {
          icon: 'person',
          label: 'Editar Perfil',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#888" />,
        },
        {
          icon: 'lock-closed',
          label: 'Alterar Senha',
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
          <Text style={styles.pageTitle}>PERFIL</Text>
        </View>

        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('@/assets/images/icons/profile-count.png')} 
              style={styles.avatar}
            />
            <View style={styles.statusIndicator} />
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userStatus}>{user.status}</Text>
        </View>

        {profileGroups.map((group, groupIndex) => (
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
                  onPress={item.action || (() => {})}
                >
                  <View style={styles.itemContent}>
                    <View style={styles.iconContainer}>
                      <Ionicons name={item.icon as any} size={20} color="#3355ce" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>{item.label}</Text>
                      {item.value && <Text style={styles.itemValue}>{item.value}</Text>}
                    </View>
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
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
    top: 32
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    top: 32
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#e0e0e0',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: 'white',
  },
  userName: {
    fontSize: 24,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Afacad-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  userStatus: {
    fontSize: 14,
    color: '#10B981',
    fontFamily: 'Afacad-Regular',
    fontWeight: '600',
    textAlign: 'center',
  },
  settingsGroup: {
    marginBottom: 20,
    top: 32
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
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
  },
  itemValue: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'Afacad-Regular',
    marginTop: 2,
  },
});