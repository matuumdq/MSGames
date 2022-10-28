import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoc9DSIiwnm55WdxOPxTFyRHFQCOHu46I",
  // apiKey: import.meta.env.APIKEY,
  authDomain: "salinas-page.firebaseapp.com",
  projectId: "salinas-page",
  storageBucket: "salinas-page.appspot.com",
  messagingSenderId: "462820825703",
  appId: "1:462820825703:web:488527c34741effff112c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app