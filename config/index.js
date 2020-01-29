var firebaseConfig = {
  apiKey: "AIzaSyD7rFujCMWlV--jc58CEUI418Ah8bDh1AM",
  authDomain: "school-fee-payment.firebaseapp.com",
  databaseURL: "https://school-fee-payment.firebaseio.com",
  projectId: "school-fee-payment",
  storageBucket: "school-fee-payment.appspot.com",
  messagingSenderId: "74315811341",
  appId: "1:74315811341:web:73e3c5d37087451870a344",
  measurementId: "G-WKL6C7NE2C"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();