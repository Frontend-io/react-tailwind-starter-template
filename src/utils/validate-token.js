import jwt from 'jsonwebtoken';

export const isTokenExpired = token => {
  const { exp } = jwt.decode(token);
  const expirationTime = exp * 1000 - 60000;

  return Date.now() >= expirationTime;
};
