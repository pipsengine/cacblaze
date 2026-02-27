import { Suspense } from 'react';
import LoginClient from './LoginClient';

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-4">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-2" />
              <div className="h-4 w-56 bg-gray-100 rounded mx-auto" />
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
              <div className="space-y-4">
                <div className="h-10 bg-gray-100 rounded" />
                <div className="h-10 bg-gray-100 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}
