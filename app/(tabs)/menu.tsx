import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// 1. Definindo os tipos de rotas válidas
type AdminRoutes =
  | '/(tabs)/(admin)/manutencao'
  | '/(tabs)/(admin)/alertas'
  | '/(tabs)/(admin)/documentos'
  | '/(tabs)/(admin)/configuracoes'
  | '/(tabs)/(admin)/usuarios'; 

type PublicRoutes =
  | '/(tabs)/comprovante'
  | '/(tabs)/horario-onibus'
  | '/(tabs)/notificacoes';

type ValidRoutes = AdminRoutes | PublicRoutes;

// 2. Tipo para os itens do menu
interface MenuItem {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  route: ValidRoutes;
  isAdmin?: boolean;
}

export default function MenuScreen() {
  // 3. Lista de itens do menu com rotas tipadas
  const menuItems: MenuItem[] = [
    {
      title: 'Manutenção',
      icon: 'build',
      route: '/(tabs)/(admin)/manutencao',
      isAdmin: true
    },
    {
      title: 'Comprovante de Residência',
      icon: 'document-text',
      route: '/(tabs)/comprovante'
    },
    {
      title: 'Controle de Alertas',
      icon: 'alert-circle',
      route: '/(tabs)/(admin)/alertas',
      isAdmin: true
    },
    {
      title: 'Controle de Usuários',
      icon: 'people',
      route: '/(tabs)/(admin)/usuarios', // Item adicionado
      isAdmin: true
    },
    {
      title: 'Horário do Ônibus',
      icon: 'bus',
      route: '/(tabs)/horario-onibus'
    },
    {
      title: 'Publicar Documentos',
      icon: 'folder-open',
      route: '/(tabs)/(admin)/documentos',
      isAdmin: true
    },
    {
      title: 'Notificações',
      icon: 'notifications',
      route: '/(tabs)/notificacoes'
    },
  ];

  // 4. Simulação de autenticação (substitua pelo seu contexto real)
  const isAdmin = true; // Ou use o hook de autenticação

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
        {menuItems.map((item) => {
          // 5. Oculta itens administrativos se não for admin
          if (item.isAdmin && !isAdmin) return null;

          return (
            <Link href={item.route} key={item.route} asChild>
              <Pressable style={styles.menuItem}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={item.icon}
                    size={24}
                    color="#3355ce"
                  />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#888"
                />
              </Pressable>
            </Link>
          );
        })}
      </View>
    </ScrollView>
  );
}

// 6. Estilos
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