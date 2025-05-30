import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text style={styles.pageTitle}>MANUTENÇÃO</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise alguma coisa..."
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.menuList}>
        {manutencaoItems.map((item, index) => (
          <Pressable key={index} style={styles.menuItem}
            onPress={() => {
              if (item.title === 'Manutenção Hidráulica') {
                router.push('./formsManutencaoHidraulica');
              } else if (item.title === 'Manutenção de Internet'){
                router.push('./formsManutencaoInternet');
              } else if (item.title === 'Manutenção Elétrica'){
                router.push('./formsManutencaoEletrica');
              } else if (item.title === 'Manutenção Estrutural'){
                router.push('./formsManutencaoEstrutural');
              } else if (item.title === 'Manutenção em PCs'){
                router.push('./formsManutencaoPC');
              }          
              else {
                console.log('Item pressionado:', item.title);
              }
            }} 
            >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={24} color="#3355ce" />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.historyButton} onPress={() => router.push('./historico-manutencao')}>
        <Ionicons name="time" size={20} color="#888" style={{ marginRight: 10 }} />
        <Text style={styles.historyText}>Histórico de Manutenções</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fFF',
  },
  container: {
    padding: 20,
    backgroundColor: '#fFF',
    paddingTop: 50,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    marginBottom: 20,
    fontFamily: 'BebasNeue-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Afacad-Regular',
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
    elevation: 2,
  },
  iconContainer: {
    backgroundColor: '#FFF',
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
    historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 30,
  },
  historyText: {
    color: '#888',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },

});
