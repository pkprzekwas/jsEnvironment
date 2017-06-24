import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  console.log('returning response...');
  res.json([
    {"id":21569233,"firstName":"Willa","lastName":"Schmitt","email":"Damian_Kihn@yahoo.com"},
    {"id":70415156,"firstName":"Eliane","lastName":"Shanahan","email":"Forrest_Wiza@gmail.com"},
    {"id":59996121,"firstName":"Dashawn","lastName":"Welch","email":"Darius_Durgan76@yahoo.com"},
    {"id":99332571,"firstName":"Trevion","lastName":"Hartmann","email":"Caroline93@hotmail.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port)
  }
});

