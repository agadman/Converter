import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CelsiusToFahrenheitCalculator = () => {
 const [celsius, setCelsius] = useState('');
 const [fahrenheit, setFahrenheit] = useState('');

 const handleConvert = () => {
   if (celsius !== '') {
     const celsiusValue = parseFloat(celsius);
     const fahrenheitValue = (celsiusValue * 9/5) + 32;
     setFahrenheit(fahrenheitValue.toFixed(2).toString());
   } else {
     setFahrenheit('');
   }
 };

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Celsius to Fahrenheit Calculator</Text>
     <TextInput
       style={styles.input}
       placeholder="Enter Celsius"
       value={celsius}
       onChangeText={text => setCelsius(text)}
       keyboardType="numeric"
     />
     <Button title="Change" onPress={handleConvert} style={styles.btn} />
     <Text style={styles.result}>{fahrenheit !== '' ? `Fahrenheit: ${fahrenheit}` : ''}</Text>
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   alignItems: 'center',
 },
 title: {
   fontSize: 20,
   marginBottom: 10,
 },
 input: {
   width: 200,
   height: 40,
   borderWidth: 1,
   borderColor: 'gray',
   marginBottom: 10,
 },
 result: {
   fontSize: 18,
   marginTop: 10,
 },
 btn: {
    fonSize: 30,

 }
});

export default CelsiusToFahrenheitCalculator;