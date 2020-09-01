const express = require('express');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept, Authorization, X-Api-key'
  );
  res.header('Access-Control-Allow-Method', 'GET,POST,OPTIONS');
  if ('OPTIONS' == req.method) {
    res.status(200).send('OK');
  } else {
    next();
  }
});

//API calls
app.get('/', (req, res) => {
  res.send({ express: 'hello!' });
});

app.post('/post', (req, res) => {
  console.log(req.body);
  res.send(
    JSON.stringify(req.body),
  );
});

// app.use('/get', router);
// app.use('/post', router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost: + ${PORT}`);
});

module.exports = app;