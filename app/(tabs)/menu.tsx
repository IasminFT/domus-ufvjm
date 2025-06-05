import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

interface MenuItem {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  route: string;
}

const router = useRouter();

export default function MenuScreen() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const menuItems: MenuItem[] = [
    { title: 'Gestão de Manutenção', icon: 'build', route: '/(tabs)/admin/manutencao' },
    { title: 'Enviar Comprovante de Residência', icon: 'document-text', route: '/(tabs)/admin/comprovante' },
    { title: 'Controle de Alertas', icon: 'alert-circle', route: '/(tabs)/admin/alertas' },
    { title: 'Controle de Usuários', icon: 'people', route: '/(tabs)/admin/usuarios' },
    { title: 'Horário do Ônibus', icon: 'bus', route: '/(tabs)/admin/onibus' },
    { title: 'Publicar Documentos', icon: 'folder-open', route: '/(tabs)/admin/documentos' },
    { title: 'Notificações', icon: 'notifications', route: '/(tabs)/admin/notificacoes' },
  ];

  const handlePress = (route: string) => {
    router.push(route);
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
          <Text style={styles.pageTitle}>MENU</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.menuItem,
                pressed && styles.menuItemPressed
              ]}
              onPress={() => console.log('Item pressionado:', item.title)}
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
    top: 32
  },
  menuList: {
    gap: 12,
    top: 32
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
});