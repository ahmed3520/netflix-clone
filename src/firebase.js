// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAjwuv7yTCOwsKPGJVchkvdJsw9eqaif7M",
    authDomain: "inf-test-7b854.firebaseapp.com",
    databaseURL: "https://inf-test-7b854.firebaseio.com",
    projectId: "inf-test-7b854",
    storageBucket: "inf-test-7b854.appspot.com",
    messagingSenderId: "222346628564",
    appId: "1:222346628564:web:5d99cd897ecb77102cda41",
    measurementId: "G-KLL6LD9ZQL"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth};
  export default db;