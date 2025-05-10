'use client';

import { useEffect } from 'react';
import { useUser } from "@clerk/nextjs";
import { syncUserWithDatabase } from '@/lib/actions/user-actions';

/**
 * Component to synchronize Clerk user data with our database.
 * This should be placed in the root layout to ensure user data is synced
 * after authentication events.
 */
export function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    // Only try to sync user data when user info is loaded and user is signed in
    if (isLoaded && isSignedIn && user) {
      const syncUser = async () => {
        try {
          const result = await syncUserWithDatabase();
          if (!result.success) {
            console.error('Failed to sync user data:', result.error);
          }
        } catch (error) {
          console.error('Error syncing user data:', error);
        }
      };

      syncUser();
    }
  }, [isLoaded, isSignedIn, user]);

  return <>{children}</>;
} 