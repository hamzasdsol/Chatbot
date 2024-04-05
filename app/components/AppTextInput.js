import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import AppText from './AppText';

const AppTextInput = () => {
  const [value, onValueChange] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Write something"
        value={value}
        onChangeText={onValueChange}
      />
    </SafeAreaView>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#222',
    paddingHorizontal: 10,
    marginVertical: 12,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
});
