import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precisa de ajuda?</Text>
      <Text style={styles.text}>Entre em contato com nosso suporte.</Text>
      
      <Link href="/login" asChild>
        <Pressable>
          <Text style={styles.backLink}>Voltar para o Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
  },
  backLink: {
    color: '#1a73e8',
    fontSize: 16,
  }
});