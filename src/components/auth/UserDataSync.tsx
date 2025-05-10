'use client';

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { syncUserWithDatabase } from '@/lib/actions/user-actions';

/**
 * Component to synchronize Clerk user data with our database
 * This component should be mounted on protected pages or after authentication
 */
export function UserDataSync() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    // Only try to sync user data when auth is loaded and user is signed in
    if (isLoaded && isSignedIn) {
      const syncUser = async () => {
        try {
          await syncUserWithDatabase();
        } catch (error) {
          console.error('Failed to sync user data:', error);
        }
      };

      syncUser();
    }
  }, [isLoaded, isSignedIn]);

  // This is a utility component that doesn't render anything
  return null;
} 