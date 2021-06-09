import app from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from './config'

class Firebase{
  constructor(){
    // Initialize Firebase
    app.initializeApp(firebaseConfig);
    this.firestore = app.firestore();
  }
}

const firebase =new Firebase()

export default firebase;



