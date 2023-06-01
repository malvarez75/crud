import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* const firebaseConfig = {
    apiKey: "AIzaSyB0kTiPFKXLAdbL-DlAC73HGtf-DVuD0yY",
    authDomain: "fir-course-7c876.firebaseapp.com",
    projectId: "fir-course-7c876",
    storageBucket: "fir-course-7c876.appspot.com",
    messagingSenderId: "597429749333",
    appId: "1:597429749333:web:829dff0fde41e7b830f6dc",
    measurementId: "G-PJCNL5BL8Q"
  }; */

  /* const firebaseConfig = {
    apiKey: "AIzaSyDtO8DS3gUc0Qo3R7JP7ze2xwOABg4VLKQ",
    authDomain: "crud-f2c27.firebaseapp.com",
    projectId: "crud-f2c27",
    storageBucket: "crud-f2c27.appspot.com",
    messagingSenderId: "107783822046",
    appId: "1:107783822046:web:08f36c862c300a8eb0804f"
  }; */

  const firebaseConfig = {
    apiKey: "AIzaSyBx6Yk6mJQynHXFIADowqp9vbRtNWZxF3U",
    authDomain: "curso-crud-94891.firebaseapp.com",
    projectId: "curso-crud-94891",
    storageBucket: "curso-crud-94891.appspot.com",
    messagingSenderId: "807791232995",
    appId: "1:807791232995:web:ffcf85236fc393c15142d6",
    measurementId: "G-K0KYF7X5XJ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)