import express from 'express';

const app = express();
// mount new middleware with app.use
app.use(express.static('public/'));

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
