//used firebase for login thought of sending the username to the pastecode as a param but it didn't work

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYd28AnRhxR79SgVGjF8OHiT2-flC3peE",
  authDomain: "code-editor-fea3f.firebaseapp.com",
  projectId: "code-editor-fea3f",
  storageBucket: "code-editor-fea3f.appspot.com",
  messagingSenderId: "102178580817",
  appId: "1:102178580817:web:98ad5d11f3ac9b1b094b70",
  measurementId: "G-CZWQNRELTM"
  
   
});

const db=firebaseApp.firestore();  
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export {provider,auth};
export default db ;
