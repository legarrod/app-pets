import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import ServicesScreen from './pages/ServicesScreen';
import CurrentStateScreen from './pages/CurrentStateScreen';
import AgendarScreen from './pages/AgendarScreen';
import ControlsScreen from './pages/ControlsScreen';
import ListadoCitasScreen from './pages/ListadoCitasScreen';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CurrentState" component={CurrentStateScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Agendar" component={AgendarScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Control" component={ControlsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ListadoCitas" component={ListadoCitasScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;