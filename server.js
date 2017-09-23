const express = require('express');
const webpack = require('webpack');
const axios = require('axios');
const webpackCompiler = webpack(require('./webpack.config.js'));
const port = 3001;

const app = express();

app.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: `http://localhost:${port}/dist`
}));

app.get('/api/news/list/:page', async function (req, res) {
  const { data } = await axios(`http://m.ncu.edu.tw/api/zh/news/list/${req.params.page}`);
  res.json(data);
});

app.use(express.static('.'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening at http://localhost:${port}`);
});
