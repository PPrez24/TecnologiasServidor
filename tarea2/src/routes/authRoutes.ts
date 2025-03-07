import { Router } from 'express';
import { login } from '../controllers/authController';
import { profile } from '../controllers/profileController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/login', login);
router.get('/perfil', authMiddleware, profile);

export default router;
