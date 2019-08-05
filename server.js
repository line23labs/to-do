import * as express from 'express';
import * as mongoose from 'mongoose';
import {Task} from './src/model/tasks';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/todo';
mongoose.connect(databaseUrl, {useNewUrlParser: true});

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/tasks', (req, res) => {
  Task.find({}).exec((error, tasks) => {
    if (error) {
      res.json({
        error: error.message,
      });
    } else {
      res.json(tasks);
    }
  });
});

app.listen(port, () => console.log(`Server listening on http://127.0.0.1:${port}`));
