import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LengthConverter = () => {
  const [meters, setMeters] = useState('');
  const [inches, setInches] = useState('');

  const handleMetersChange = (value) => {
    setMeters(value);
    if (value === '') {
      setInches('');
      return;
    }
    const metersValue = parseFloat(value);
    const inchesValue = metersValue * 39.3701;
    setInches(inchesValue.toFixed(2).toString());
  };

  const handleInchesChange = (value) => {
    setInches(value);
    if (value === '') {
      setMeters('');
      return;
    }
    const inchesValue = parseFloat(value);
    const metersValue = inchesValue / 39.3701;
    setMeters(metersValue.toFixed(2).toString());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Inches"
            value={inches}
            onChangeText={handleInchesChange}
            keyboardType="numeric"
          />
          <FontAwesome name="exchange" size={20} color="white" />
          <TextInput
            style={styles.input}
            placeholder="Meters"
            value={meters}
            onChangeText={handleMetersChange}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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

export default LengthConverter;
