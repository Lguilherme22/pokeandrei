import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  // Função para navegar para a tela principal
  const navigateToMainScreen = () => {
    navigation.replace('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Adivinhe o Pokémon!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={navigateToMainScreen}
      >
        <Text style={styles.buttonText}>Ir para a Tela Principal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Cor de fundo suave para combinar com o tema do MainScreen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Cor do texto principal
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3', // Cor dos botões principal, igual ao MainScreen
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Cor do texto dos botões
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
