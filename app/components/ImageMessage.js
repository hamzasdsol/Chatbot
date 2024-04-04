import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ImageMessage = ({message}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: message}}
        onError={error => console.log('Image load error:', error)}
      />
    </View>
  );
};

export default ImageMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABEBC6',
    maxWidth: wp(70),
    maxHeight: hp(20),
    borderRadius: 10,
    borderTopStartRadius: 0,
    marginVertical: 4,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
