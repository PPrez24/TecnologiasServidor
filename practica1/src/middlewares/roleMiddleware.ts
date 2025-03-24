import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if ((req as any).user.role !== 'admin') {
    res.status(403).json({ error: 'Access denied' });
    return; 
  }
  next();
};