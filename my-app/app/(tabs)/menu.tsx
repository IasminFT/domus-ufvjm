import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Definindo o tipo para os itens do menu
interface MenuItem {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name']; // Isso garante que só ícones válidos sejam usados
}

export default function MenuScreen() {
  // Lista de itens do menu com ícones tipados corretamente
  const menuItems: MenuItem[] = [
    { title: 'Gestão de Manutenção', icon: 'build' },
    { title: 'Enviar Comprovante de Residência', icon: 'document-text' },
    { title: 'Controle de Alertas', icon: 'alert-circle' },
    { title: 'Controle de Usuários', icon: 'people' },
    { title: 'Horário do Ônibus', icon: 'bus' },
    { title: 'Publicar Documentos', icon: 'folder-open' },
    { title: 'Notificações', icon: 'notifications' },
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
            onPress={() => console.log('Item pressionado:', item.title)}
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

// Estilos (mantidos os mesmos)
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
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
    backgroundColor: 'white',
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