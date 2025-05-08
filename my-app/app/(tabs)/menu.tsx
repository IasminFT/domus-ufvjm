import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen() {
  const navigation = useNavigation();

  const menuItems = [
    { title: 'Notificações', icon: 'notifications', screen: 'notificacoes' },
    { title: 'Favoritos', icon: 'heart', screen: 'favoritos' },
    { title: 'Histórico', icon: 'time', screen: 'historico' },
    { title: 'Categorias', icon: 'apps', screen: 'categorias' },
    { title: 'Ajuda', icon: 'help-circle', screen: 'ajuda' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      
      {menuItems.map((item, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen as never)}
        >
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon as any} size={24} color="#4F46E5" />
          </View>
          <Text style={styles.menuText}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#111827',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    backgroundColor: '#EEF2FF',
    padding: 8,
    borderRadius: 10,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
});