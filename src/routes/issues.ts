import express from 'express';
import axios from 'axios';
import Log from '../models/Log.js';

const router = express.Router();
const githubApi = axios.create({
  baseURL: process.env.GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
  },
});

router.get('/:user/:repo', async (req, res) => {
  const { user, repo } = req.params;
  const { limit, page } = req.query;
  const url = `/repos/${user}/${repo}/issues?per_page=${limit}&page=${page}`;
  try {
    const response = await githubApi.get(url);
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

router.get('/:user/:repo/count', async (req, res) => {
  const { user, repo } = req.params;
  const url = `/repos/${user}/${repo}/issues?per_page=1&page=0`;
  try {
    const response = await githubApi.get(url);
    const log = new Log({
      ip: req.ip,
      datetime: new Date(),
      method: 'getIssuesCount',
    });

    await log.save();

    res
      .status(200)
      .send({ count: response.data.length ? response.data[0].number : 0 });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:user/:repo/:number', async (req, res) => {
  const { user, repo, number } = req.params;
  const url = `/repos/${user}/${repo}/issues/${number}`;
  try {
    const response = await githubApi.get(url);
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
