import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readData, subscribeToData } from '@/lib/firebase-utils';
import type { Profile } from '@/types/firebase';

const PROFILE_PATH = 'profile';

export function useProfile() {
  const query = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      console.log('Fetching profile data...');
      const data = await readData<Profile>(PROFILE_PATH);
      console.log('Profile data fetched:', data);
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToData<Profile>(
      PROFILE_PATH,
      (data) => {
        if (data) {
          query.refetch();
        }
      },
      (error) => {
        console.error('Profile subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    profile: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}