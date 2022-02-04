import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhDXYIkCIvfMjl_glvQyRKwuCPusKhwYE",
  authDomain: "issue-tracking-app.firebaseapp.com",
  projectId: "issue-tracking-app",
  storageBucket: "issue-tracking-app.appspot.com",
  messagingSenderId: "893829998256",
  appId: "1:893829998256:web:6f569b9280b9bc4033fd75",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
