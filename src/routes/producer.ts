
import express from 'express';
import Producer from '../models/producer';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newProducer = await Producer.create(req.body);
    res.status(201).json(newProducer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Outras rotas...

export = router; 
