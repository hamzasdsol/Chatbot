import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppText from './AppText';

const FeatureCard = ({image, title, description, bgColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.logo_and_title}>
        <Image source={image} resizeMode="contain" style={styles.logo} />
        <AppText
          text={title}
          extraStyles={{fontWeight: 'bold', fontSize: wp(5)}}
        />
      </View>

      <AppText text={description} />
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    marginVertical: 5,
  },
  logo_and_title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  logo: {
    width: wp(10),
    height: wp(10),
    marginEnd: 6,
  },
});
