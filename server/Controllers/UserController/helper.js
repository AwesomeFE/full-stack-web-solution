import crypto from 'crypto';

export function encryptPassword(password) {
  return password
    ? crypto.createHmac('md5', process.env.SERVER_SECRET)
      .update(password)
      .digest('base64')
    : undefined;
}