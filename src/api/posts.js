import { Router } from 'express';
import Post from '../models/Post';

export default () => {
  const router = Router();

  router.get('/', async (req, res) => {
    const posts = await Post.findAll({
      order: [['id', 'ASC']]
    });
    console.log(posts);
    res.json(posts);
  });

  return router;
};
