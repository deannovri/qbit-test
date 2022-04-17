import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDxvSSjdPCk9lwMOZdb9sZ3K61_Zmt7qRE',
  authDomain: 'qbit-test.firebaseapp.com',
  projectId: 'qbit-test',
  storageBucket: 'qbit-test.appspot.com',
  messagingSenderId: '126517614229',
  appId: '1:126517614229:web:c41b301b8274c73a6d6d9c'
})

export const auth = app.auth()
export default app