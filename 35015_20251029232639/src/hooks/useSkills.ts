import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { readList, subscribeToList } from '@/lib/firebase-utils';
import type { Skill, SkillCategory } from '@/types/firebase';

const SKILLS_PATH = 'skills';
const SKILL_CATEGORIES_PATH = 'skillCategories';

export function useSkills() {
  const query = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      console.log('Fetching skills data...');
      const data = await readList<Skill>(SKILLS_PATH);
      console.log('Skills data fetched:', data.length, 'skills');

      // Sort by order
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return 0;
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<Skill>(
      SKILLS_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Skills subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    skills: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}

export function useSkillCategories() {
  const query = useQuery({
    queryKey: ['skillCategories'],
    queryFn: async () => {
      console.log('Fetching skill categories...');
      const data = await readList<SkillCategory>(SKILL_CATEGORIES_PATH);
      console.log('Skill categories fetched:', data.length, 'categories');

      // Sort by order
      return data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return 0;
      });
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  // Set up real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToList<SkillCategory>(
      SKILL_CATEGORIES_PATH,
      () => {
        query.refetch();
      },
      (error) => {
        console.error('Skill categories subscription error:', error);
      }
    );

    return unsubscribe;
  }, []);

  return {
    categories: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
}

export function useSkillsByCategory() {
  const { skills, isLoading: skillsLoading } = useSkills();
  const { categories, isLoading: categoriesLoading } = useSkillCategories();

  const skillsByCategory = categories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.id || skill.category === category.name)
  }));

  return {
    skillsByCategory,
    isLoading: skillsLoading || categoriesLoading
  };
}