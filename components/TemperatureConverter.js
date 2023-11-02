import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const celsiusValue = parseFloat(value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2).toString());
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const fahrenheitValue = parseFloat(value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setCelsius(celsiusValue.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Fahrenheit(F)"
        value={fahrenheit}
        onChangeText={handleFahrenheitChange}
        keyboardType="numeric"
      />
      <FontAwesome name="exchange" size={20} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Celsius"
        value={celsius}
        onChangeText={handleCelsiusChange}
        keyboardType="numeric"
      />
    </View>
  );
};
export default TemperatureConverter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: 100,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    width: '30%',
  },
});
