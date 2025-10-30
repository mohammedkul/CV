import { initializeApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCUbzDCYbaLFoJULJbqeUd63JFgUJ1Q3Qo",
  authDomain: "mycv-c858b.firebaseapp.com",
  projectId: "mycv-c858b",
  storageBucket: "mycv-c858b.firebasestorage.app",
  messagingSenderId: "100928172971",
  appId: "1:100928172971:web:22702d969be5a49a11d8ee",
  databaseURL: "https://mycv-c858b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database: Database = getDatabase(app);

// Test connection
console.log('Firebase initialized successfully');
console.log('Database URL:', firebaseConfig.databaseURL);

export default app;