import axios from 'axios';

const apiKey = process.env.REACT_APP_NLU_APIKEY; // Use API Key from environment variables
const url = process.env.REACT_APP_NLU_URL;
export const analyzeSentiment = async (text) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`apikey:${apiKey}`)}` // Encoding API Key in Basic Auth format
  };
s
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
