import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormsSolicitarManutencao() {
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
      
      <View style={styles.titleContainer}>
      <Text style={styles.pageTitle}>SOLICITAR MANUTENÇÃO</Text>
      <Pressable onPress={() => router.push('/screens/discente/solicitar-manutencao/historico-manutencao')}>
        <Ionicons name="time-outline" size={40} color="#504A4A" style={styles.titleIcon} />
      </Pressable>
      </View>

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
                router.push('/screens/discente/solicitar-manutencao/formsManutencaoHidraulica');
              } else if (item.title === 'Manutenção de Internet'){
                router.push('/screens/discente/solicitar-manutencao/formsManutencaoInternet');
              } else if (item.title === 'Manutenção Elétrica'){
                router.push('/screens/discente/solicitar-manutencao/formsManutencaoEletrica');
              } else if (item.title === 'Manutenção Estrutural'){
                router.push('/screens/discente/solicitar-manutencao/formsManutencaoEstrutural');
              } else if (item.title === 'Manutenção em PCs'){
                router.push('/screens/discente/solicitar-manutencao/formsManutencaoPC');
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

      <Pressable style={styles.historyButton} onPress={() => router.push('/screens/discente/solicitar-manutencao/historico-manutencao')}>
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
    fontFamily: 'BebasNeue-Regular',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 20,
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
  titleIcon: {
    marginBottom:5,
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
