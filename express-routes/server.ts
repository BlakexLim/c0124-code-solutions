import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(
    'Time:',
    Date.now(),
    'Request Type:',
    req.method,
    'Path:',
    req.path
  );
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res) => {
  res.send('Index');
});

app.get('/notes', (req, res) => {
  res.send('notes');
});

app.post('/notes/123', (req, res) => {
  res.send('notes 123');
});

app.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});
