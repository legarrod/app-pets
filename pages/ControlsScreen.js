import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const backgroundImage = require('../assets/bg-blue.png');
const logoImage = require('../assets/logoImage.png');

const HomeScreen = ({ navigation }) => {
  const [userType, setUserType] = useState('');

  const handlePressListar = () => {
    setUserType('listar')
    navigation.navigate('ListadoCitas');
  };

  const handlePressAgendar = () => {
    setUserType('agendar')
    navigation.navigate('Agendar');
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
              style={[styles.selectorButton, userType === 'agendar' && styles.selectedButton]}
              onPress={() =>handlePressAgendar()}
            >
              <Text style={[styles.selectorText, userType === 'agendar' && styles.selectedText]}>Agendar cita</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectorButton, userType === 'listar' && styles.selectedButton]}
              onPress={() => handlePressListar()}
            >
              <Text style={[styles.selectorText, userType === 'listar' && styles.selectedText]}>Historico de citas</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
});

export default HomeScreen;