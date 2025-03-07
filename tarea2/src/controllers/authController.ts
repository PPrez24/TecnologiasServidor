import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  if (email && password) {
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token });
    return;
  }

  res.status(400).json({ message: 'Email and password are required' });
  return;
};

