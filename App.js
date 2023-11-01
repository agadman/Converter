import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TemperatureConverter from './components/TemperatureConverter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Omvandlaren</Text>
      <Text style={styles.text}>Din bästa vän i vardagen</Text>
      <TemperatureConverter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',

  },
  text: {
    fontSize: 20,
  }
});
