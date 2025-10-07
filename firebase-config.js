import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8RUdke8Cl1MHsA5ULo-Bh-ePJCQFbQIQ",
  authDomain: "manifesto-78d39.firebaseapp.com",
  projectId: "manifesto-78d39",
  storageBucket: "manifesto-78d39.appspot.com",  // fix typo here too!
  messagingSenderId: "975903100261",
  appId: "1:975903100261:web:c48b873eb36de23fd4258c",
  measurementId: "G-7N6VRLZM01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
