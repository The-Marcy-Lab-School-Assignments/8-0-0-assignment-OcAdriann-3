const express = require('express');
const app = express();

const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
}
const serveAbout = (req, res, next) => {
  res.send('<h1>About</h1>');
}
const serveHello = (req, res, next) => {
    const first = req.query.first;
    const last = req.query.last;
    if (first && last) {
      return res.send(`hello ${first} ${last}!`);
    }
    res.send('hello')
}
const serveData = (req, res, next) => {
  const data = [{ name: 'adrian' }, { name: 'engels' }, { name: 'mekhi' }];
  res.send(data);
}

app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 