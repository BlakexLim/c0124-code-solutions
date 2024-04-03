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

app.get('/', (req, res) => {
  res.send('Pineapple');
});

app.get('/notes', (req, res) => {
  res.send('Banana');
});

app.post('/notes/123', (req, res) => {
  res.send('Strawberry');
});

app.use((req, res) => {
  res.status(404).send('Not a fruit');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
