
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
  
const firebaseConfig = {
    apiKey: "AIzaSyDBrBf2x-Q1bTvFPxp-tI9LHtICAA-34fI",
    authDomain: "todo-list-vuetify-firebase.firebaseapp.com",
    projectId: "todo-list-vuetify-firebase",
    storageBucket: "todo-list-vuetify-firebase.appspot.com",
    messagingSenderId: "238679277201",
    appId: "1:238679277201:web:f889710596890e14b00930"
};
  
firebase.initializeApp(firebaseConfig)
  
const db = firebase.firestore()
const auth = firebase.auth()
  
const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')
  
export {
    db, auth, profileCollection, tasksCollection
}
