import firebase from "firebase";

const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getAllTraductions = () => {
  return db.collection('traduction')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().bt}`);
      });
    });
    ;
};

export const getBeteTraduction = (mot) => {
  return db.collection("traduction").where("fr", "==", mot.toLowerCase())
    .get()
}



