import express from 'express';
import bodyParser from 'body-parser';
import issuesRouter from './routes/issues.js';

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use('/issues', issuesRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
