import express from 'express';
import { getProfile, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { isAdmin } from '../middlewares/roleMiddleware';

const router = express.Router();

router.get('/perfil', authMiddleware, getProfile);
router.get('/usuarios', authMiddleware, isAdmin, getUsers);
router.get('/usuarios/:id', authMiddleware, isAdmin, getUserById);
router.put('/usuarios/:id', authMiddleware, isAdmin, updateUser);
router.delete('/usuarios/:id', authMiddleware, isAdmin, deleteUser);

export default router;