import React from "react";
import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function TermosDeUso() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Termos de Uso</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>
            Ao utilizar este aplicativo, você concorda com os seguintes termos:
          </Text>

          <Text style={styles.label}>
            1. **Uso Autorizado:** Este aplicativo é destinado exclusivamente
            para uso institucional. Qualquer uso não autorizado pode resultar
            em medidas legais.
          </Text>

          <Text style={styles.label}>
            2. **Privacidade:** Seus dados serão utilizados apenas para fins de
            funcionamento do sistema e não serão compartilhados com terceiros
            sem sua autorização.
          </Text>

          <Text style={styles.label}>
            3. **Responsabilidades:** O usuário é responsável por manter suas
            informações atualizadas e corretas. O uso indevido do sistema pode
            acarretar suspensão de acesso.
          </Text>

          <Text style={styles.label}>
            4. **Alterações:** Os termos de uso podem ser atualizados a
            qualquer momento. Recomendamos revisá-los periodicamente.
          </Text>

          <Text style={styles.label}>
            5. **Suporte:** Para dúvidas ou problemas técnicos, entre em contato
            com o suporte institucional pelo e-mail suporte@exemplo.com.
          </Text>

          <Text style={[styles.label, { marginTop: 20 }]}>
            Última atualização: 06 de junho de 2025.
          </Text>
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
    paddingBottom: 100,
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
    gap: 20,
  },
  label: {
    fontSize: 16,
    color: "#374151",
    fontFamily: "Afacad-Regular",
    marginBottom: 8,
  },
});
