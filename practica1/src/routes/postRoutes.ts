import express from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/publicaciones', authMiddleware, createPost);
router.get('/publicaciones', authMiddleware, getPosts);

export default router;