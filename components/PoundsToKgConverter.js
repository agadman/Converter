import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PoundsToKgConverter = () => {
  const [kilograms, setKilograms] = useState('');
  const [pounds, setPounds] = useState('');

  const handleKilogramsChange = (value) => {
    setKilograms(value);
    if (value === '') {
      setPounds('');
      return;
    }
    const kilogramsValue = parseFloat(value);
    const poundsValue = kilogramsValue * 2.20462; // Conversion factor: 1 kg = 2.20462 lbs
    setPounds(poundsValue.toFixed(2).toString());
  };

  const handlePoundsChange = (value) => {
    setPounds(value);
    if (value === '') {
      setKilograms('');
      return;
    }
    const poundsValue = parseFloat(value);
    const kilogramsValue = poundsValue / 2.20462; // Conversion factor: 1 lb = 0.453592 kg
    setKilograms(kilogramsValue.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pounds(lbs)"
        value={pounds}
        onChangeText={handlePoundsChange}
        keyboardType="numeric"
      />
      <FontAwesome name="exchange" size={20} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Kilograms(kg)"
        value={kilograms}
        onChangeText={handleKilogramsChange}
        keyboardType="numeric"
      />
    </View>
  );
};

export default PoundsToKgConverter;

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