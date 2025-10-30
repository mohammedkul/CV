import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readList, subscribeToList } from '@/lib/firebase-utils';
import type { Project } from '@/types/firebase';

const PROJECTS_PATH = 'projects';

export function useProjects() {
  const query = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      console.log('Fetching projects data...');
      const data = await readList<Project>(PROJECTS_PATH);
      console.log('Projects data fetched:', data.length, 'projects');

      // Sort by order or createdAt
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return (b.createdAt || 0) - (a.createdAt || 0);
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<Project>(
      PROJECTS_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Projects subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    projects: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}

export function useFeaturedProjects() {
  const { projects, ...rest } = useProjects();

  return {
    projects: projects.filter((project) => project.featured),
    ...rest
  };
}