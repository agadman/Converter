import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import TemperatureConverter from './components/TemperatureConverter';
import LengthConverter from './components/InchesToMeterConverter';
import PoundsToKgConverter from './components/PoundsToKgConverter';
import OuncesToKgConverter from './components/OuncesToKgConverter';

export default function App() {
  return (
    <ImageBackground source={require("./assets/background-green.jpg")} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.textContainer}>
        <Text style={styles.header}>My Converter</Text>
        <Text style={styles.text}>Your every day friend</Text>
      </View>
      <View style={styles.converters}>
        <TemperatureConverter />
        <LengthConverter />
        <PoundsToKgConverter />
        <OuncesToKgConverter />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  converters: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  }
});
