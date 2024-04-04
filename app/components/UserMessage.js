import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppText from './AppText';

const UserMessage = ({message}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <AppText text={message} extraStyles={{fontWeight: '500'}} />
      </View>
    </View>
  );
};

export default UserMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9F9',
    maxWidth: wp(70),
    borderRadius: 10,
    borderTopEndRadius: 0,
    padding: 8,
    marginVertical: 4,
  },
});
