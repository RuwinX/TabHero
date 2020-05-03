 const firebaseConfig = {
    apiKey: "AIzaSyDSBSxj_n22ODupU_ScYCLB5PSKbukrl7U",
    authDomain: "tab-hero-60b93.firebaseapp.com",
    databaseURL: "https://tab-hero-60b93.firebaseio.com",
    projectId: "tab-hero-60b93",
    storageBucket: "tab-hero-60b93.appspot.com",
    messagingSenderId: "484181131928",
    appId: "1:484181131928:web:f157797100450f403406ed",
    measurementId: "G-KYKGZQCQE1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize CLoud Firebase DB
var db = firebase.firestore();