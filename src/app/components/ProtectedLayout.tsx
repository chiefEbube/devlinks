"use client"

import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../utils/firebase-config';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login'); 
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return null
  }

  return (
    <div>
    {/* Your protected layout content */}
    {children}
  </div>
  );
}

export default ProtectedLayout;
