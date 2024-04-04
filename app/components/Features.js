import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <View>
      {featuresData.map(feature => (
        <FeatureCard
          key={feature.id}
          image={feature.image}
          title={feature.title}
          description={feature.description}
          bgColor={feature.bgColor}
        />
      ))}
    </View>
  );
};

const featuresData = [
  {
    id: 1,
    image: require('../assets/images/chatgpt.png'),
    title: 'ChatGPT',
    description:
      'ChatGPT can perform various language-related tasks, including text generation, translation, question answering, and dialogue generation.',
    bgColor: '#ABEBC6',
  },
  {
    id: 2,
    image: require('../assets/images/dalle.png'),
    title: 'DALL-E',
    description:
      'It uses a process called "text-to-image synthesis" to create visual content based on the input it receives.',
    bgColor: '#D2B4DE',
  },
  {
    id: 3,
    image: require('../assets/images/smartai.png'),
    title: 'Smart AI',
    description:
      'Smart AI" typically refers to artificial intelligence systems that demonstrate advanced capabilities in learning and decision-making.',
    bgColor: '#D6DBDF',
  },
];

export default Features;

const styles = StyleSheet.create({});
