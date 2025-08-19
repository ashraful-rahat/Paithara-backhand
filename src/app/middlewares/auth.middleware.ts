import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';

// Define the decoded JWT payload type for better type safety
interface JwtPayload {
  id: string;
  email: string;
  role: 'admin' | 'student';
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

// The middleware now accepts an array of roles to check
export const authenticate = (roles: Array<'admin' | 'student'> = []) => (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({ status: 'fail', message: 'Unauthorized. Token not found.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.user = decoded;

    // Check if a role is required and if the user's role is in the allowed list
    if (roles.length > 0 && !roles.includes(decoded.role)) {
      return res.status(httpStatus.FORBIDDEN).json({ status: 'fail', message: 'Forbidden. You do not have the required permissions.' });
    }

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(httpStatus.UNAUTHORIZED).json({ status: 'fail', message: 'Invalid or expired token.' });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Internal server error.' });
  }
};