import { Router } from 'express';
import Author from '../models/Author';

export default () => {
  const router = Router();

  router.get('/', async (req, res) => {
    const authors = await Author.findAll({
      order: [['id', 'ASC']]
    });
    console.log(authors);
    res.json(authors);
  });

  return router;
};
