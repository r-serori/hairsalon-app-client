const express = require('express');
const next = require('next');
const axios = require('axios');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next(dev); // プロジェクトのディレクトリを指定
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // 既存のNext.jsハンドラー
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
