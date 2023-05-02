import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const backgroundImage = require('../assets/backgroundImage.png');
const logoImage = require('../assets/logoImage.png');

const HomeScreen = ({ navigation }) => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica para verificar el usuario y contraseña
    // Si son correctos, navegar a la siguiente pantalla
    navigation.navigate('Services');
  };

  const handlePress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logoImage} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.selectorContainer}>
            <TouchableOpacity
              style={[styles.selectorButton, userType === 'professional' && styles.selectedButton]}
              onPress={() => setUserType('professional')}
            >
              <Text style={[styles.selectorText, userType === 'professional' && styles.selectedText]}>Profesional</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectorButton, userType === 'client' && styles.selectedButton]}
              onPress={() => setUserType('client')}
            >
              <Text style={[styles.selectorText, userType === 'client' && styles.selectedText]}>Cliente</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            No estás registrado?{' '}
            <TouchableOpacity onPress={handlePress}>
            <Text style={styles.link}>Regístrate aquí</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  selectorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selectorButton: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#007aff',
  },
  selectorText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginButton: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;