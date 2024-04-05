import axios from 'axios';
import {constants} from '../constants';

const client = axios.create({
  headers: {
    Authorization: `Bearer api key here`,
    'Content-Type': 'application/json',
  },
});

const chatGPTEndpoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndPoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
  try {
    const result = await client.post(chatGPTEndpoint, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: constants.USER,
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with yes or no.`,
        },
      ],
    });

    console.log('data:', result.data);
  } catch (error) {
    console.log('Failed to call api: ', error);
    return Promise.resolve({success: false, msg: error.message});
  }
};
