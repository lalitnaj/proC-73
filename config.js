import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAzriu6LI_KhBR4IZOMvDF6zsAKMvqaKic",
  authDomain: "e-library-3c716.firebaseapp.com",
  projectId: "e-library-3c716",
  storageBucket: "e-library-3c716.appspot.com",
  messagingSenderId: "380670574962",
  appId: "1:380670574962:web:bef37400f4b49fbce0ddeb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
