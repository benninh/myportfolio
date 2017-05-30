import firebase from 'firebase';

const config = {
  apiKey: 'INSERT KEY HERE',
  authDomain: 'INSERT KEY HERE',
  databaseURL: 'INSERT KEY HERE',
  storageBucket: 'INSERT KEY HERE'
};

var firebaseApp = firebase.initializeApp(config);

export default firebaseApp;