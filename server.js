const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World from OpenShift Dev Spaces!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
