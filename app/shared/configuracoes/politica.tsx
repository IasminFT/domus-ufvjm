import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import React, { useState } from "react";
import {
    Alert,
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function PoliticaDePrivacidade() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const generateAndSharePDF = async () => {
    const html = `
      <html>
        <body>
          <h1>Política de Privacidade</h1>
          <p>${language === "pt" ? ptContent.join("</p><p>") : enContent.join("</p><p>")}</p>
          <p>Última atualização: 06 de junho de 2025</p>
        </body>
      </html>
    `;
    try {
      const { uri } = await Print.printToFileAsync({ html });
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    } catch (err) {
      Alert.alert("Erro", "Não foi possível gerar o PDF.");
    }
  };

  const ptContent = [
    "Esta Política de Privacidade descreve como suas informações são coletadas, usadas e protegidas ao utilizar este aplicativo.",
    "1. Coleta de Dados: Coletamos apenas os dados estritamente necessários para o funcionamento do sistema, como nome, e-mail e informações de uso.",
    "2. Uso das Informações: Os dados coletados são utilizados exclusivamente para fins de autenticação, comunicação e personalização da experiência no aplicativo.",
    "3. Armazenamento: As informações são armazenadas em ambientes seguros e com acesso restrito, respeitando as boas práticas de segurança da informação.",
    "4. Compartilhamento: Seus dados não serão compartilhados com terceiros sem seu consentimento, exceto em casos exigidos por lei.",
    "5. Direitos do Usuário: Você tem o direito de acessar, corrigir ou excluir seus dados a qualquer momento. Para isso, entre em contato pelo e-mail suporte@exemplo.com.",
    "6. Alterações: Esta política pode ser alterada a qualquer momento. Ao continuar utilizando o aplicativo, você concorda com tais alterações.",
  ];

  const enContent = [
    "This Privacy Policy describes how your information is collected, used, and protected when using this application.",
    "1. Data Collection: We only collect data strictly necessary for system operation, such as name, email, and usage information.",
    "2. Use of Information: The collected data is used exclusively for authentication, communication, and personalization purposes.",
    "3. Storage: Information is stored in secure environments with restricted access, following best practices in information security.",
    "4. Sharing: Your data will not be shared with third parties without your consent, except when required by law.",
    "5. User Rights: You have the right to access, correct, or delete your data at any time. Contact us at suporte@exemplo.com.",
    "6. Changes: This policy may be updated at any time. By continuing to use the app, you agree to such changes.",
  ];

  const content = language === "pt" ? ptContent : enContent;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>
            {language === "pt" ? "Política de Privacidade" : "Privacy Policy"}
          </Text>
        </View>

        <View style={styles.formContainer}>
          {content.map((paragraph, index) => (
            <Text style={styles.label} key={index}>
              {paragraph}
            </Text>
          ))}

          <Text style={[styles.label, { marginTop: 20 }]}>
            {language === "pt"
              ? "Última atualização: 06 de junho de 2025"
              : "Last update: June 6, 2025"}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={generateAndSharePDF}
          >
            <Text style={styles.buttonText}>
              {language === "pt" ? "Baixar em PDF" : "Download as PDF"}
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() =>
              Alert.alert(
                language === "pt" ? "Entendido!" : "Got it!",
                language === "pt"
                  ? "Você pode retornar à tela anterior."
                  : "You may return to the previous screen."
              )
            }
          >
            <Text style={styles.buttonText}>
              {language === "pt" ? "Entendi" : "Got it"}
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              { backgroundColor: "#f5f5f5", borderWidth: 1, borderColor: "#ccc" },
            ]}
            onPress={toggleLanguage}
          >
            <Text style={[styles.buttonText, { color: "#3355ce" }]}>
              {language === "pt" ? "Ver em inglês" : "Ver em português"}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
  },
  header: {
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: 40,
    color: "#3355ce",
    fontFamily: "BebasNeue-Regular",
    top: 32,
  },
  formContainer: {
    top: 32,
  },
  label: {
    fontSize: 16,
    color: "#374151",
    fontFamily: "Afacad-Regular",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#3355ce",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: "#2a4ac5",
  },
  buttonText: {
    color: "white",
    fontFamily: "Afacad-Regular",
    fontWeight: "bold",
    fontSize: 16,
  },
});
