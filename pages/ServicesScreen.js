import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

const backgroundImage = require('../assets/bg-med.png');
const blueBackgroundImage = require('../assets/bg-blue.png');

const icon1 = require('../assets/estado-removebg-preview.png');
const icon2 = require('../assets/historial-removebg-preview.png');
const icon3 = require('../assets/especialista-removebg-preview.png');
const icon4 = require('../assets/laboratorio-removebg-preview.png');
const icon5 = require('../assets/Control_medico-removebg-preview.png');
const icon6 = require('../assets/seguimiento-removebg-preview.png');
const icon7 = require('../assets/Antecendentes-removebg-preview.png');

const icons = [
  { name: 'heart', label: 'Estado salud', link: "CurrentState", icon: icon1 },
  { name: 'file-text-o', label: 'Antecedentes clínicos', link: "", icon: icon2 },
  { name: 'stethoscope', label: 'Recomendaciones especialistas', link: "", icon: icon3 },
  { name: 'flask', label: 'Resultados laboratorio', link: "", icon: icon4 },
  { name: 'calendar', label: 'Controles médicos', link: "", icon: icon5 },
  { name: 'user-md', label: 'Seguimiento clínico', link: "Control", icon: icon6 },
  { name: 'bar-chart', label: 'Reportes', link: "", icon: icon7 },
];

const ServicesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={blueBackgroundImage} style={styles.backgroundImage}>
        <View style={styles.topHalf}>
          <Image source={backgroundImage} style={styles.imgPrincipal} />
        </View>
        <View style={styles.bottomHalf}>
          <ImageBackground source={blueBackgroundImage} style={styles.blueBackgroundImage}>
            <View style={styles.iconContainer}>
            {icons.map((icon, index) => (
              <TouchableOpacity style={styles.iconWrapper} key={index} onPress={() => { icon.link === "" ? "#" :navigation.navigate(icon.link) }}>
                <Image source={icon.icon} style={styles.iconStyle} />
                <Text style={styles.iconLabel}>{icon.label}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </ImageBackground>
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