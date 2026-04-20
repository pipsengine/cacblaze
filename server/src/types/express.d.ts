export {};

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email?: string | null;
        role: 'admin' | 'author' | 'user';
        externalId?: string;
        authProvider: 'local' | 'supabase';
      };
    }
  }
}
