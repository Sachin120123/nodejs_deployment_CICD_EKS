'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello DevOps Cloud World..Sachin Chauhan !!!! ');
=======
  res.send('Hello DevOps Cloud World.. from sachin chauhan!!!! ');
>>>>>>> 63e223077d84d2efbca624dcb3f9e86ca4b10a78
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
