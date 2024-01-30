import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyC5iuqA9SLXEt5_82lovGB-5gUBGflUs0I",
    authDomain: "task-manager-project-9c7ec.firebaseapp.com",
    projectId: "task-manager-project-9c7ec",
    storageBucket: "task-manager-project-9c7ec.appspot.com",
    messagingSenderId: "372833842001",
    appId: "1:372833842001:web:0b88dcc3ce7e5395f2d970",
    measurementId: "G-DV9TKNGV0V"
  };

  const app = initializeApp(firebaseConfig);
  export let db = getFirestore(app);