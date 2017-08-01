const express = require('express');
const app = express();
const PORT = 8080;

app.get('*', function(req, res) {
  if (req.path === '/') {
    res.sendFile('index.html', { root: './public' });
  } else {
    res.sendFile(req.path, { root: './public' });
  }
});

// app.get('/', function(req, res) {
//   res.sendFile('index.html', { root: './' });
// });
//
// app.get('/app.js', function(req, res) {
//   res.sendFile('app.js', { root: './' });
// });

app.listen(PORT, function (err, result) {
  if (err) {
    console.log(err);
    return null;
  }

  console.log('Listening at localhost:' + PORT);
});
