import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpn6BOc8byX-Qb1jXWWwuiDFCrDArryKU",
  authDomain: "faceboook-clone-f7570.firebaseapp.com",
  projectId: "faceboook-clone-f7570",
  storageBucket: "faceboook-clone-f7570.appspot.com",
  messagingSenderId: "639271234250",
  appId: "1:639271234250:web:4068607d720d24b655e233",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
