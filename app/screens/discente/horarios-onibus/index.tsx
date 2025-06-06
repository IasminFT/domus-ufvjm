import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function OnibusScreen() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const [horarios, setHorarios] = useState([
    { id: 1, ida: '6h50', retorno: '7h20' },
    { id: 2, ida: '7h40', retorno: '12h20' },
    { id: 3, ida: '12h20', retorno: '13h20' },
    { id: 4, ida: '13h40', retorno: '18h00' },
    { id: 5, ida: '18h20', retorno: '22h50' },
  ]);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleEditar = () => {
    router.push('../gerenciar-onibus/editar');
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
          <Text style={styles.pageTitle}>HORÁRIO DO ÔNIBUS</Text>
        </View>

        <View style={styles.tableContainer}>
          {/* Cabeçalho da tabela */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Ida Campus JK</Text>
            <Text style={styles.headerText}>Retorno para MEU</Text>
          </View>

          {/* Linhas da tabela */}
          {horarios.map((horario) => (
            <View key={horario.id} style={styles.tableRow}>
              <Text style={styles.cellText}>{horario.ida}</Text>
              <Text style={styles.cellText}>{horario.retorno}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.updateText}>Tabela atualizada em 16/08/2024</Text>
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
    paddingBottom: 20,
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
  tableContainer: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3355ce',
    paddingVertical: 15,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Afacad-Regular',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  cellText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Afacad-Regular',
    fontSize: 16,
    color: '#374151',
  },
  updateText: {
    textAlign: 'right',
    marginTop: 10,
    fontFamily: 'Afacad-Regular',
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginTop: 30,
    gap: 10,
  },
  editButtonPressed: {
    backgroundColor: '#e8e8e8',
  },
  editButtonText: {
    fontSize: 16,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
});