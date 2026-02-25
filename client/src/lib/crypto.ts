import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const ivLength = 12;

function getKey(): Buffer {
  const raw = process.env.SOCIAL_KEYS_ENC_KEY || '';
  if (!raw) {
    throw new Error('Encryption key missing: set SOCIAL_KEYS_ENC_KEY');
  }
  const key = Buffer.from(raw, raw.match(/^[A-Fa-f0-9]+$/) ? 'hex' : 'base64');
  if (key.length !== 32) {
    throw new Error('SOCIAL_KEYS_ENC_KEY must be 32 bytes (base64 or hex)');
  }
  return key;
}

export function encryptJson(payload: unknown): string {
  const key = getKey();
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const data = Buffer.from(JSON.stringify(payload), 'utf8');
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString('base64');
}

export function decryptJson<T = unknown>(b64: string): T {
  const key = getKey();
  const raw = Buffer.from(b64, 'base64');
  const iv = raw.subarray(0, ivLength);
  const tag = raw.subarray(ivLength, ivLength + 16);
  const ciphertext = raw.subarray(ivLength + 16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(decrypted.toString('utf8')) as T;
}
