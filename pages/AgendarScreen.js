import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const backgroundImage = require('../assets/bg-blue.png');
const logoImage = require('../assets/logoImage.png');

const HomeScreen = ({ navigation }) => {
  const options = ['Mascota', 'Murdo', 'Zion', 'Alaska'];
  const profesionals = ['Profesional', 'Jorge Martinez', 'Juan Ruis', 'Ricardo Murcia'];
  const [username, setUsername] = useState('');
  const [observations, setobservations] = useState('');
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionProfesional, setSelectedOptionProfesional] = useState(profesionals[0]);
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsProfesional, setShowOptionsProfesional] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleOptionSelectProfesional = (option) => {
    setSelectedOptionProfesional(option);
    setShowOptionsProfesional(false);
  };

  const handleAgendar =()=>{
    navigation.navigate('Control');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Control</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={() => setShowOptions(!showOptions)} style={styles.select}>
            <Text>{selectedOption}</Text>
          </TouchableOpacity>
          {options && showOptions && (
            <View style={styles.options}>
              {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)}>
                  <Text style={styles.option}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity onPress={() => setShowOptionsProfesional(!showOptionsProfesional)} style={styles.select}>
            <Text>{selectedOptionProfesional}</Text>
          </TouchableOpacity>
          {profesionals && showOptionsProfesional && (
            <View style={styles.options}>
              {profesionals.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionSelectProfesional(option)}>
                  <Text style={styles.option}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Observaciones"
            secureTextEntry={true}
            value={observations}
            onChangeText={setobservations}
          />
        </View>
        <TouchableOpacity style={styles.createButton} onPress={handleAgendar}>
            <Text style={styles.createButtonText}>Crear</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centrar verticalmente
    alignItems: 'center', // centrar horizontalmente
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center', // centrar verticalmente
    alignItems: 'center', // centrar horizontalmente
  },
  logoContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    width: '80%',

    borderRadius: 5,
    padding: 20,
  },
  select: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  options: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  option: {
    padding: 10,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10
  },
  select: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  options: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 1,
  },
  option: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
});

export default HomeScreen;