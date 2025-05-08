import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  const settingsGroups = [
    {
      title: 'Preferências',
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
              trackColor={{ false: '#9CA3AF', true: '#4F46E5' }}
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
              trackColor={{ false: '#9CA3AF', true: '#4F46E5' }}
            />
          ),
        },
      ],
    },
    {
      title: 'Segurança',
      items: [
        {
          icon: 'finger-print',
          label: 'Biometria',
          action: () => setBiometricEnabled(!biometricEnabled),
          rightComponent: (
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              thumbColor="#FFFFFF"
              trackColor={{ false: '#9CA3AF', true: '#4F46E5' }}
            />
          ),
        },
        {
          icon: 'lock-closed',
          label: 'Alterar Senha',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />,
        },
      ],
    },
    {
      title: 'Sobre',
      items: [
        {
          icon: 'information-circle',
          label: 'Termos de Uso',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />,
        },
        {
          icon: 'document-text',
          label: 'Política de Privacidade',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />,
        },
        {
          icon: 'star',
          label: 'Avalie o App',
          action: () => {},
          rightComponent: <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />,
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {settingsGroups.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.groupContainer}>
            {group.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.settingItem}
                onPress={item.action}
              >
                <View style={styles.itemContent}>
                  <Ionicons name={item.icon as any} size={22} color="#4F46E5" />
                  <Text style={styles.itemText}>{item.label}</Text>
                </View>
                {item.rightComponent}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  settingsGroup: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 8,
    paddingLeft: 8,
  },
  groupContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#374151',
  },
});