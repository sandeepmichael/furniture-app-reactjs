import firebase from "firebase/compat/app"
import  "firebase/compat/auth"
 
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_APPID, 
  });
  export const auth = app.auth()
  export default app
  