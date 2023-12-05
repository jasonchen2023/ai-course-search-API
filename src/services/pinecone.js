import { Pinecone } from '@pinecone-database/pinecone';

require('dotenv').config();

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

const indexName = 'semantic-search-openai';

export default async function query(embedding, k, filters) {
  try {
    const res = await pinecone.index(indexName).query({
      topK: k,
      vector: embedding,
      ...(filters && { filter: filters }),
      includeMetadata: true
    });
    return res;
  } catch (error) {
    throw new Error(`request to Pinecone failed with error: ${error}`);
  }
};