import express, { Router } from 'express';
import { createServer } from 'http';
import cors from 'cors';

import posts from './src/api/posts';
import authors from './src/api/authors';
import post from './src/api/post';

const PORT = 3000;
const server = express();

server.use('*', cors());

server.use(
  '/posts',
  posts()
);

server.use(
  '/post/:id',
  post(Router)
);

server.use(
  '/authors',
  authors()
);

const app = createServer(server);

app.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
});
