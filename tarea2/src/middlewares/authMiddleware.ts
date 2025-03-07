import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ message: 'Token is missing' });
      return;
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string; password: string };
      (req as any).user = decoded;
      return next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }
  };
