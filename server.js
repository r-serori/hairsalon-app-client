const express = require('express');
const next = require('next');
const axios = require('axios');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './app' }); // プロジェクトのディレクトリを指定
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  // 郵便局APIへのプロキシエンドポイントを追加
  server.get('/api/search', async (req, res) => {
    try {
      const { zipcode } = req.query;
      const response = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search`, {
        params: { zipcode },
        headers: { 'Content-Type': 'application/json' },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // 既存のNext.jsハンドラー
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
