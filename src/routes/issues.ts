import express from 'express';
import axios from 'axios';
import Log from '../models/Log.js';

const router = express.Router();
const githubApiUrl = process.env.GITHUB_API_URL;

router.get('/:user/:repo', async (req, res) => {
  const { user, repo } = req.params;
  const { limit, offset } = req.query;
  const url = `${githubApiUrl}/repos/${user}/${repo}/issues?per_page=${limit}&page=${offset}`;
  try {
    const response = await axios.get(url);
    const log = new Log({
      ip: req.ip,
      datetime: new Date(),
      method: 'getIssues',
    });

    await log.save();

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:user/:repo/:number', async (req, res) => {
  const { user, repo, number } = req.params;
  const url = `${githubApiUrl}/repos/${user}/${repo}/issues/${number}`;
  try {
    const response = await axios.get(url);
    const log = new Log({
      ip: req.ip,
      datetime: new Date(),
      method: 'getIssue',
    });

    await log.save();

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
