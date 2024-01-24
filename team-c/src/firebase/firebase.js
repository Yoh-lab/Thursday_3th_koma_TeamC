import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // ここは本来.envファイルに書くべきもの
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // mesurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCSjmkZ_kNExN1xzpppf0OubC6VvCLSZpA",
  authDomain: "thursday-3th-koma-teamc-503f3.firebaseapp.com",
  projectId: "thursday-3th-koma-teamc-503f3",
  storageBucket: "thursday-3th-koma-teamc-503f3.appspot.com",
  messagingSenderId: "973569668035",
  appId: "1:973569668035:web:3c52d95e5a53a8c6e30376",
  mesurementId: "G-V72D37BSDJ",
};

const app = initializeApp(firebaseConfig);

// 認証周り
// const auth = getAuth(app);
// firestore
const database = getFirestore(app);

const storage = getStorage(app);


// export { database, auth, storage };
export { database, storage };
