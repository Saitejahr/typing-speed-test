import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRbG6tuebPcOgsbzvT7CO5ZczoT2onPOE',
  authDomain: 'typing-speed-test-8510e.firebaseapp.com',
  projectId: 'typing-speed-test-8510e',
  storageBucket: 'typing-speed-test-8510e.appspot.com',
  messagingSenderId: '57214213015',
  appId: '1:57214213015:web:1a9c9a60160d5f07b042d2',
  measurementId: 'G-QKLZ07CXFB',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebaseApp.firestore()

export { auth, db }

// <------------------------------------------------------------------->
