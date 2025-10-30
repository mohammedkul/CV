import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readList, subscribeToList } from '@/lib/firebase-utils';
import type { Testimonial } from '@/types/firebase';

const TESTIMONIALS_PATH = 'testimonials';

export function useTestimonials() {
  const query = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      console.log('Fetching testimonials data...');
      const data = await readList<Testimonial>(TESTIMONIALS_PATH);
      console.log('Testimonials data fetched:', data.length, 'testimonials');

      // Sort by order or date (most recent first)
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<Testimonial>(
      TESTIMONIALS_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Testimonials subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    testimonials: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}

export function useFeaturedTestimonials() {
  const { testimonials, ...rest } = useTestimonials();

  return {
    testimonials: testimonials.filter((testimonial) => testimonial.featured),
    ...rest
  };
}