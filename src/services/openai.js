import axios from 'axios';

require('dotenv').config();

export default async function getEmbedding(query) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/embeddings',
      {
        input: query,
        model: 'text-embedding-ada-002',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );
    return response.data.data[0].embedding;
  } catch (err) {
    console.error('Error in OpenAI request:', err);
    throw new Error('Failed to retrieve embeddings from OpenAI');
  }
}
