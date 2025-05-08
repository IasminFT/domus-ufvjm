import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const user = {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    phone: '(11) 98765-4321',
    joinDate: 'Membro desde Jan 2023',
  };

  const profileActions = [
    { icon: 'person', label: 'Editar Perfil', action: () => {} },
    { icon: 'lock-closed', label: 'Segurança', action: () => {} },
    { icon: 'card', label: 'Pagamentos', action: () => {} },
    { icon: 'log-out', label: 'Sair', action: () => {} },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={require('@/assets/images/icons/perfil.png')} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="call" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{user.phone}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="calendar" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{user.joinDate}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        {profileActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionButton}
            onPress={action.action}
          >
            <Ionicons name={action.icon as any} size={22} color="#4F46E5" />
            <Text style={styles.actionText}>{action.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#E5E7EB',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#374151',
  },
  actionsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  actionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#374151',
  },
});