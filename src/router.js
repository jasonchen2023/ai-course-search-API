import { Router } from 'express';
import getEmbedding from './services/openai';
import query from './services/pinecone';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the course search API!' });
});

router.post('/queries', async (req, res) => {
  try {
    const embedding = await getEmbedding(req.body.query);
    const result = await query(embedding, req.body.k, req.body.filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;