import {
  ref,
  get,
  onValue,
  off,
  DatabaseReference,
  DataSnapshot } from
'firebase/database';
import { database } from './firebase';
import type { FirebaseResponse } from '@/types/firebase';

/**
 * Read data once from a specific path
 */
export async function readData<T>(path: string): Promise<T | null> {
  try {
    const dbRef = ref(database, path);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val() as T;
    }

    console.log(`No data found at path: ${path}`);
    return null;
  } catch (error) {
    console.error(`Error reading data from ${path}:`, error);
    throw new Error(`Failed to read data from ${path}`);
  }
}

/**
 * Read list data and convert to array
 */
export async function readList<T>(path: string): Promise<T[]> {
  try {
    const data = await readData<FirebaseResponse<T>>(path);

    if (!data) {
      return [];
    }

    // Convert Firebase object to array
    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key]
    })) as T[];
  } catch (error) {
    console.error(`Error reading list from ${path}:`, error);
    return [];
  }
}

/**
 * Set up real-time listener for a path
 */
export function subscribeToData<T>(
path: string,
callback: (data: T | null) => void,
errorCallback?: (error: Error) => void)
: () => void {
  try {
    const dbRef = ref(database, path);

    const listener = onValue(
      dbRef,
      (snapshot: DataSnapshot) => {
        if (snapshot.exists()) {
          callback(snapshot.val() as T);
        } else {
          callback(null);
        }
      },
      (error) => {
        console.error(`Error in real-time listener for ${path}:`, error);
        if (errorCallback) {
          errorCallback(error as Error);
        }
      }
    );

    // Return unsubscribe function
    return () => {
      off(dbRef, 'value', listener);
    };
  } catch (error) {
    console.error(`Error setting up listener for ${path}:`, error);
    if (errorCallback) {
      errorCallback(error as Error);
    }
    return () => {}; // Return empty cleanup function
  }
}

/**
 * Set up real-time listener for list data
 */
export function subscribeToList<T>(
path: string,
callback: (data: T[]) => void,
errorCallback?: (error: Error) => void)
: () => void {
  return subscribeToData<FirebaseResponse<T>>(
    path,
    (data) => {
      if (!data) {
        callback([]);
        return;
      }

      // Convert Firebase object to array
      const items = Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
      })) as T[];

      callback(items);
    },
    errorCallback
  );
}

/**
 * Get database reference
 */
export function getDatabaseRef(path: string): DatabaseReference {
  return ref(database, path);
}

/**
 * Check database connection
 */
export async function checkConnection(): Promise<boolean> {
  try {
    const dbRef = ref(database, '.info/connected');
    const snapshot = await get(dbRef);
    return snapshot.val() === true;
  } catch (error) {
    console.error('Error checking database connection:', error);
    return false;
  }
}