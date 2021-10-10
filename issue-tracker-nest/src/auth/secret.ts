import process from 'process';

export const secret = 'secret' || process.env.jwtSecret;
