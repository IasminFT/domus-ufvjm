import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { Image, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-VariableFont_wght.ttf'),
    'Afacad-Italic': require('@/assets/fonts/Afacad-Italic-VariableFont_wght.ttf'),
    'Angkor-Regular': require('@/assets/fonts/Angkor-Regular.ttf'),
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

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.header}>
          <Text style={styles.pageTitle}>MEU</Text>
          <Pressable onPress={() => console.log('Notificações pressionadas')}>
            <Image
              source={require('@/assets/images/icons/sino.png')}
              style={styles.notificationIcon}
            />
            <View style={styles.notificationBadge} />
          </Pressable>
        </View>

        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require('@/assets/images/icons/lupa.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Buscar..."
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
          </View>
        </View>

        {/* Botão 1 */}
        <Pressable style={styles.featureButton}>
          <View style={styles.cardContent}>
            <Text style={styles.featureTitle}>Bem-vindo à</Text>
            <Text style={styles.featureMainTitle}>MORADIA</Text>
            <Text style={styles.featureSubtitle}>Clique para saber mais.</Text>
          </View>
          <View style={[styles.cardImageContainer, styles.imageTopAligned]}>
            <Image
              source={require('@/assets/images/ilustration/menina-apontando.png')}
              style={[styles.cardImage, styles.largeImage]}
              resizeMode="contain"
            />
          </View>
        </Pressable>

        {/* Botão 2 */}
        <Pressable style={styles.featureButton}>
          <View style={styles.cardContent}>
            <Text style={styles.featureTitle}>Regimento Interno da</Text>
            <Text style={styles.featureMainTitle}>MEU</Text>
          </View>
          <View style={[styles.cardImageContainer, styles.imageTopAligned]}>
            <Image
              source={require('@/assets/images/ilustration/doc.png')}
              style={[styles.cardImage, styles.largeImage]}
              resizeMode="contain"
            />
          </View>
        </Pressable>

        {/* Botão 3 */}
        <Pressable style={styles.featureButton}>
          <View style={styles.cardContent}>
            <Text style={styles.featureTitle}>Saiba os horários do</Text>
            <Text style={styles.featureMainTitle}>MEU BUSS</Text>
          </View>
          <View style={[styles.cardImageContainer, styles.imageTopAligned]}>
            <Image
              source={require('@/assets/images/ilustration/buss.png')}
              style={[styles.cardImage, styles.largeImage]}
              resizeMode="contain"
            />
          </View>
        </Pressable>

        {/* Botão 4 */}
        <Pressable style={styles.featureButton}>
          <View style={styles.cardContent}>
            <Text style={styles.featureTitle}>Conheça os regulamentos</Text>
            <Text style={styles.featureMainTitle}>PAE</Text>
          </View>
          <View style={[styles.cardImageContainer, styles.imageTopAligned]}>
            <Image
              source={require('@/assets/images/ilustration/pae.png')}
              style={[styles.cardImage, styles.largeImage]}
              resizeMode="contain"
            />
          </View>
        </Pressable>

        {/* Espaço extra no final para rolagem */}
        <View style={styles.bottomSpacer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 10,
    marginBottom: 15,
  },
  featureButton: {
    backgroundColor: '#3355ce',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    height: 150,
    position: 'relative',
    overflow: 'visible',
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  cardImageContainer: {
    position: 'absolute',
    right: 25,
    width: 110,
    height: '100%',
    justifyContent: 'center',
  },
  imageTopAligned: {
    top: -10,
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  cardImage: {
    width: '100%',
    height: '80%',
  },
  largeImage: {
    width: 120,
    height: 145,
  },
  pageTitle: {
    top: 9,
    fontSize: 40,
    color: '#3355ce',
    fontFamily: 'BebasNeue-Regular',
  },
  notificationIcon: {
    width: 35,
    height: 35,
    top: 9,
    tintColor: '#3355ce',
  },
  notificationBadge: {
    position: 'absolute',
    top: 12,
    right: 3,
    width: 10,
    height: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchBarContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 11,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Afacad-Regular',
    paddingVertical: 0,
    color: '#000',
  },
  featureTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Afacad-Regular',
    marginBottom: 0,
    lineHeight: 20,
  },
  featureMainTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Angkor-Regular',
    marginTop: 4,
    marginBottom: 10,
    lineHeight: 30,
  },
  featureSubtitle: {
    color: 'white',
    fontSize: 13,
    opacity: 0.9,
    fontFamily: 'Afacad-Regular',
    marginTop: -5,
  },
  bottomSpacer: {
    height: 30,
  },
});