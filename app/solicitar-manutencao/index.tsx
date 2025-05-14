// app/solicitar-manutencao/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SolicitarManutencao() {
  const router = useRouter();

  const manutencaoItems = [
    { title: 'Manutenção Hidráulica', icon: 'water' },
    { title: 'Manutenção de Internet', icon: 'wifi' },
    { title: 'Manutenção Elétrica', icon: 'flash' },
    { title: 'Manutenção Estrutural', icon: 'construct' },
    { title: 'Manutenção em PCs', icon: 'desktop' },
  ];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>SOLICITAR MANUTENÇÃO</Text>
      <View style={styles.menuList}>
        {manutencaoItems.map((item, index) => (
          <Pressable key={index} style={styles.menuItem} onPress={() => console.log(item.title)}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={24} color="#3355ce" />
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
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: 20,
    paddingTop: 50,
  },
  pageTitle: {
    fontSize: 32,
    color: '#3355ce',
    marginBottom: 20,
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
    elevation: 2,
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
