import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {constants} from '../constants';
import UserMessage from './UserMessage';
import AssistantMessage from './AssistantMessage';
import AppText from './AppText';
import App from '../../App';

const Messages = ({messages}) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => {
          if (message.role === constants.USER) {
            return <UserMessage key={index} message={message.content} />;
          } else
            return <AssistantMessage key={index} message={message.content} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    height: hp(50),
    borderRadius: 20,
    backgroundColor: '#EAEDED',
    padding: 16,
  },
});
