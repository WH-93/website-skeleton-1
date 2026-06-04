'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const password = new FormData(form).get('password') as string;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError('Invalid password');
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className="font-sans text-2xl font-bold text-white">B</span>
              <span className="absolute font-sans text-2xl font-bold text-gold"
                    style={{ top: '2px', left: '14px' }}>C</span>
            </div>
          </div>
          <h1 className="font-heading text-xl text-white">Admin Login</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-card p-6 sm:p-8 shadow-card-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              autoFocus
              className="input-field"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button type="submit" disabled={loading}
                  className="btn-gold-dark w-full text-center disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-white/30 text-xs mt-6">
          BC Financial Search — Admin
        </p>
      </div>
    </div>
  );
}
