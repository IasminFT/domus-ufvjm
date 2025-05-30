import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, Linking, Platform, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

SplashScreen.preventAutoHideAsync();

type Documento = {
  nome: string;
  icone: keyof typeof Ionicons.glyphMap;
  asset: any;
};

export default function DocumentosScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const documentos: Documento[] = [
    { 
      nome: 'Regimento - MEU', 
      icone: 'document-text',
      asset: require('@/assets/documentos/regimento-meu.pdf') 
    },
    { 
      nome: 'Manual - eduroam', 
      icone: 'document-text',
      asset: require('@/assets/documentos/manual-eduroam.pdf') 
    },
    { 
      nome: 'Regulamento PAE', 
      icone: 'document-text',
      asset: require('@/assets/documentos/regulamento-auxilio.pdf') 
    }
  ];

  const abrirDocumento = async (asset: any) => {
    try {
      const assetObj = Asset.fromModule(asset);
      await assetObj.downloadAsync();

      const canOpen = await Linking.canOpenURL(assetObj.uri);
      
      if (canOpen) {
        await Linking.openURL(assetObj.uri);
      } else {
        const filename = assetObj.uri.split('/').pop();
        const fileUri = `${FileSystem.documentDirectory}${filename}`;

        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
          await FileSystem.downloadAsync(assetObj.uri, fileUri);
        }

        await Linking.openURL(fileUri);
      }
    } catch (error: unknown) {
      console.error('Erro:', error);
      let errorMessage = 'Não foi possível abrir o documento.';
      if (error instanceof Error) {
        errorMessage += `\nErro: ${error.message}`;
      }
      alert(errorMessage);
    }
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
          <Text style={styles.pageTitle}>DOCUMENTOS</Text>
        </View>

        <Pressable 
          style={({pressed}) => [
            styles.searchBar,
            pressed && styles.searchBarPressed
          ]}
        >
          <Ionicons name="search" size={20} color="#888" />
          <Text style={styles.searchText}>Pesquise alguma coisa...</Text>
        </Pressable>

        <View style={styles.documentList}>
          {documentos.map((doc, index) => (
            <Pressable 
              key={index} 
              style={({pressed}) => [
                styles.documentItem,
                pressed && styles.itemPressed
              ]}
              onPress={() => abrirDocumento(doc.asset)}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={doc.icone} size={20} color="#3355ce" />
              </View>
              <Text style={styles.documentText}>{doc.nome}</Text>
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
    top: 32
  },
  pageTitle: {
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    top: 32
  },
  searchBarPressed: {
    backgroundColor: '#e8e8e8',
  },
  searchText: {
    marginLeft: 10,
    color: '#888',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
  },
  documentList: {
    gap: 12,
    top: 32
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemPressed: {
    backgroundColor: '#e8e8e8',
  },
  iconContainer: {
    backgroundColor: '#fff', /*'##e8f0fe*/ 
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  documentText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Afacad-Regular',
  },
});