import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Voice from '@react-native-community/voice';

import Bot from '../../assets/images/bot.png';
import AppText from '../../components/AppText';
import Features from '../../components/Features';
import Messages from '../../components/Messages';
import {dummyMessages} from '../../constants';

const HomeScreen = () => {
  const [isRecording, setRecording] = useState(false);
  const [isSpeaking, setSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [result, setResult] = useState('');

  const speechStartHandler = e => {
    console.log('speech start handler');
  };
  const speechEndHandler = e => {
    setRecording(false);
    console.log('speech end handler');
  };
  const speechResultsHandler = e => {
    console.log('voice event', e);
  };
  const speechErrorHandler = e => {
    console.log('speech error handler: ', e);
  };

  const startRecording = async () => {
    setRecording(true);

    try {
      await Voice.start('en-GB'); // en-US
    } catch (ex) {
      console.log('voice recording start error: ', ex);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (ex) {
      console.log('voice recording stop error: ', ex);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginVertical: 12}}>
        <Image style={styles.image} source={Bot} resizeMode="contain" />
      </View>
      <AppText
        text={messages.length > 0 ? 'Assistant' : 'Features'}
        extraStyles={{fontWeight: 'bold', fontSize: wp(6)}}
      />

      <View>
        {messages.length > 0 ? <Messages messages={messages} /> : <Features />}
      </View>

      <View style={styles.recording_container}>
        {isRecording && (
          <TouchableOpacity onPress={stopRecording} style={styles.stop}>
            <AppText
              text="Stop"
              extraStyles={{color: 'white', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        )}

        <View stylele={styles.mic_container}>
          {isRecording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image
                style={styles.mic}
                source={require('../../assets/images/stop.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              <Image
                style={styles.mic}
                source={require('../../assets/images/mic.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

        {messages.length > 0 && (
          <TouchableOpacity style={styles.clear}>
            <AppText
              text="Clear"
              extraStyles={{color: 'white', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  image: {
    width: wp(30),
    height: wp(30),
  },
  features_container: {
    marginVertical: 16,
  },
  recording_container: {
    marginVertical: 12,
    flexDirection: 'row',
    flex: 1,
    alignContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mic_container: {
    width: '100%',
    justifyContent: 'center',
  },
  mic: {
    width: wp(20),
    height: wp(20),
  },
  stop: {
    borderRadius: 24,
    backgroundColor: '#C0392B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 16,
  },
  clear: {
    borderRadius: 24,
    backgroundColor: '#BFC9CA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute',
    end: 16,
  },
});
