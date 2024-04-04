import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import Bot from '../../assets/images/bot.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading_container}>
        <AppText
          text="Maximus"
          extraStyles={{
            fontSize: wp(10),
            fontWeight: 'bold',
          }}
        />
        <AppText
          text="The future is here, Powered by AI"
          extraStyles={{
            fontSize: wp(5),
          }}
        />
      </View>

      <Image style={styles.image} source={Bot} resizeMode="contain" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}>
        <AppText
          text="Get started"
          extraStyles={{color: '#fff', fontWeight: 'bold', fontSize: wp(5)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  heading_container: {
    alignItems: 'center',
    marginTop: 60,
  },
  heading: {
    fontSize: wp(10),
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
  },
  image: {
    width: wp(70),
    height: wp(70),
  },
  button: {
    width: wp(80),
    borderRadius: 20,
    padding: 16,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
