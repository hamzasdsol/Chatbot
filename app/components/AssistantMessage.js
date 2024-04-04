import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppText from './AppText';
import ImageMessage from './ImageMessage';

const AssistantMessage = ({message}) => {
  return (
    <View style={styles.container}>
      {message.includes('http') ? (
        <ImageMessage message={message} />
      ) : (
        <AppText text={message} />
      )}
    </View>
  );
};

export default AssistantMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABEBC6',
    maxWidth: wp(70),
    borderRadius: 10,
    borderTopStartRadius: 0,
    padding: 8,
    marginVertical: 4,
  },
});
