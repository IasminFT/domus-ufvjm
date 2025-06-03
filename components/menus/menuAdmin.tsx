import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Definindo o tipo para os itens do menu
interface MenuItem {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
}

export default function MenuAdmin() {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { title: 'Gerenciar Usuários', icon: 'person-circle-outline' },
    { title: 'Gerenciar Manutenção', icon: 'build' },
    { title: 'Gerenciar Horários Ônibus', icon: 'bus' },
    { title: "Gerenciar Horários PC's", icon: 'desktop-outline' },
    { title: 'Enviar Comprovante', icon: 'document-text' },
    { title: 'Publicar Documentos', icon: 'document-text' },
    { title: 'Publicar Alertas', icon: 'notifications' },
  ];

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.pageTitle}>MENU</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.title === 'Gerenciar Usuários') {
                router.push('/screens/admin/gerenciar-usuarios');
              } else if (item.title === 'Gerenciar Manutenção') {
                router.push('/screens/admin/gerenciar-manutencao');
              } else if (item.title === 'Gerenciar Horários Ônibus') {
                router.push('/screens/admin/gerenciar-onibus');
              } else if (item.title === "Gerenciar Horários PC's") {
                router.push('/screens/admin/gerenciar-pcs/index');
              } else if (item.title === 'Enviar Comprovante') {
                router.push('/screens/admin/enviar-comprovante');
              } else if (item.title === 'Publicar Documentos') {
                router.push('/screens/admin/publicar-documentos');
              } else if (item.title === 'Publicar Alertas') {
                router.push('/screens/admin/publicar-alertas');
              } else {
                console.log('Item pressionado:', item.title);
              }
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={24} color="#3355ce" />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  menuList: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#EEF2FF',
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
});
