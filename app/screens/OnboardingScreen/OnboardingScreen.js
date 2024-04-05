import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../../utils/asyncStorage';
import {walkThroughConstants} from '../../constants';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('WelcomeScreen');
    setItem(walkThroughConstants.ONBOARDED, '1');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#FAD7A0',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/animations/productivity.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Maximize',
            subtitle: 'Productivity Elevated',
          },
          {
            backgroundColor: '#D7DBDD',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/animations/efficiency.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Streamline',
            subtitle: 'Efficiency Unleashed',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{flex: 1}}
                  source={require('../../assets/animations/chat.json')}
                  autoPlay
                  loop
                />
              </View>
            ),

            title: 'Inspire',
            subtitle: 'Motivation Redefined',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: '80%',
    height: 400,
  },
});
