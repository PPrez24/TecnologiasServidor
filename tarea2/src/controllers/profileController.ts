import { Request, Response } from 'express';

export const profile = (req: Request, res: Response): void => {
    const user = (req as any).user;
    
    if (!user) {
      res.status(403).json({ message: 'Unauthorized' });
      return;
    }
  
    res.json({ email: user.email, password: user.password });
    return;
  };