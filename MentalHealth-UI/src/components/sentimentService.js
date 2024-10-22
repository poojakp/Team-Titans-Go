import axios from 'axios';

const apiKey = '28RiRAF4gsjQK30iU8vARhf8zCpli4CmUiNH-zCC-YzH'; // Use your API Key
const url = 'https://api.au-syd.natural-language-understanding.watson.cloud.ibm.com/instances/b512544b-4dc7-42dd-b0aa-8df24bfda2c0'; // Watson NLU URL

export const analyzeSentiment = async (text) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`apikey:${apiKey}`)}` // Encoding API Key in Basic Auth format
  };

  const data = {
    text: text,
    features: {
      sentiment: {},
      keywords: {
        emotion: true
      }
    }
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in sentiment analysis:", error);
    return null;
  }
};
