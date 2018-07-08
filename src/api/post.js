import Post from '../models/Post';

export default (Router) => {
  const router = Router({ mergeParams: true });

  router.get('/', async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    console.log(post);
    res.json({ post });
  });

  return router;
};
