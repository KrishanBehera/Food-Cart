import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAe2yzaucmrnJqfSWcUoILqcKdE2brVmHA",
  authDomain: "food-authentication-279c6.firebaseapp.com",
  projectId: "food-authentication-279c6",
  storageBucket: "food-authentication-279c6.firebasestorage.app",
  messagingSenderId: "706027833013",
  appId: "1:706027833013:web:03f76b81c6d1f01e5760fc",
  databaseURL: "https://food-authentication-279c6-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
