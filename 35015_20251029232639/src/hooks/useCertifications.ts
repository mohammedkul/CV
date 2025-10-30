import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readList, subscribeToList } from '@/lib/firebase-utils';
import type { Certification } from '@/types/firebase';

const CERTIFICATIONS_PATH = 'certifications';

export function useCertifications() {
  const query = useQuery({
    queryKey: ['certifications'],
    queryFn: async () => {
      console.log('Fetching certifications data...');
      const data = await readList<Certification>(CERTIFICATIONS_PATH);
      console.log('Certifications data fetched:', data.length, 'certifications');

      // Sort by order or issue date (most recent first)
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<Certification>(
      CERTIFICATIONS_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Certifications subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    certifications: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}