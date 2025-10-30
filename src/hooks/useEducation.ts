import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readList, subscribeToList } from '@/lib/firebase-utils';
import type { Education } from '@/types/firebase';

const EDUCATION_PATH = 'education';

export function useEducation() {
  const query = useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      console.log('Fetching education data...');
      const data = await readList<Education>(EDUCATION_PATH);
      console.log('Education data fetched:', data.length, 'entries');

      // Sort by order or start date (most recent first)
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<Education>(
      EDUCATION_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Education subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    education: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}