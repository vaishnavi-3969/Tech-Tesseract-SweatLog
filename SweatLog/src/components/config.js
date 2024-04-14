import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBgPP5GPBKeNnd8O_9G06PDAVGNm5PkM00",
    authDomain: "sweatlog-3eca2.firebaseapp.com",
    projectId: "sweatlog-3eca2",
    storageBucket: "sweatlog-3eca2.appspot.com",
    messagingSenderId: "458513441334",
    appId: "1:458513441334:web:74cea6ba1135ec24716e97",
    measurementId: "G-DBD7MTJDY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db
}