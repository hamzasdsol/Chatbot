import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppText = ({text, extraStyles}) => {
  return <Text style={[styles.text, extraStyles]}>{text}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontSize: 16,
  },
});
