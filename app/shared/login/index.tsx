import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  Image, 
  StyleSheet,
  ScrollView
} from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt with:', { email, password, remember });
    // Aqui você adicionará a lógica de autenticação
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image 
        source={require('@/assets/images/domus-logo.png')} 
        style={styles.logo} 
      />
      
      {/* Campos de entrada */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail ou usuário"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      {/* Divisor */}
      <View style={styles.divider} />
      
      {/* Botão de login */}
      <Pressable 
        style={({ pressed }) => [
          styles.loginButton,
          pressed && styles.loginButtonPressed
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </Pressable>
      
      {/* Lembrar e Ajuda */}
      <View style={styles.rememberHelp}>
        <Pressable 
          style={styles.remember} 
          onPress={() => setRemember(!remember)}
        >
          <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
            {remember && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.rememberLabel}>Lembrar minha escolha</Text>
        </Pressable>
        
        <Link href="/help" asChild>
        <Pressable>
            <Text style={styles.helpLink}>Precisa de ajuda?</Text>
        </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    loginContainer: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 15,
      elevation: 5, // Para Android
    },
    logo: {
      width: 180,
      height: 180, // Ajuste conforme necessário
      alignSelf: 'center',
      marginBottom: 30,
      resizeMode: 'contain',
    },
    inputGroup: {
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 14,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      fontSize: 16,
      backgroundColor: '#f9f9f9',
    },
    divider: {
      height: 1,
      backgroundColor: '#eee',
      marginVertical: 25,
    },
    loginButton: {
      backgroundColor: '#1a73e8',
      width: '100%',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 20,
    },
    loginButtonPressed: {
      transform: [{ scale: 0.98 }],
      backgroundColor: '#0d62c9',
    },
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    rememberHelp: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    remember: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 18,
      height: 18,
      borderWidth: 1,
      borderColor: '#666',
      borderRadius: 3,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: '#1a73e8',
      borderColor: '#1a73e8',
    },
    checkmark: {
      color: 'white',
      fontSize: 12,
    },
    rememberLabel: {
      color: '#666',
      fontSize: 14,
    },
    helpLink: {
      color: '#1a73e8',
      fontSize: 14,
      fontWeight: '500',
    },
  });