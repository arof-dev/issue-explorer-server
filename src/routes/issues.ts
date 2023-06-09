import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/:user/:repo', async (req, res) => {
  const { user, repo } = req.params;
  const { limit, offset } = req.query;
  const url = `https://api.github.com/repos/${user}/${repo}/issues?per_page=${limit}&page=${offset}`;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
