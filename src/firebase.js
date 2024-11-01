import {initializeApp} from 'firebase/app';
import {getAuth} from  'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCf8pwZA4OumtouTMbfzgaYRcroAwihfYg",
    authDomain: "fir-react-dd81a.firebaseapp.com",
    projectId: "fir-react-dd81a",
    storageBucket: "fir-react-dd81a.appspot.com",
    messagingSenderId: "541132655037",
    appId: "1:541132655037:web:0b5c66a910b9985571aad4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);