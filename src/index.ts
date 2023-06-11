import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import issuesRouter from './routes/issues.js';
import logsRouter from './routes/logs.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/issues', issuesRouter);
app.use('/logs', logsRouter);

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost:27017/issue-explorer'
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
