import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/lista.png');


const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
       
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
  },
  topHalf: {
    flex: 1,
    // Aquí puedes aplicar estilos personalizados para la mitad superior
  },
  imgPrincipal:{
width: '100%'
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blueBackgroundImage: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    width: "90%",
    borderRadius: 20,
    top: -200
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    marginBottom: 20,
  },
  iconLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: '#000000',
  },
  iconStyle: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServicesScreen;