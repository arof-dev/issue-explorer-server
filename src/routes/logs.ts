import express from 'express';
import Log from '../models/Log.js';

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const logs = await Log.find();

    res.status(200).send(logs);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
