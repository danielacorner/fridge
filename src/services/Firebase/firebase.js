import firebase from 'firebase';
import 'firebase/auth';
import config from './firebase.config.js';

class Firebase {
  PATHS = {
    FOOD_LIST: '/foodLists'
  }

  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
    this.numUsers = 20;
  }

  userCreate = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  userSignIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  userSignOut = () => this.auth.signOut();

  userPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  userPasswordUpdate = password =>  this.auth.currentUser.updatePassword(password);

  async createFoodItemWithUid(uid, { name, category, isPurchased, datePurchased }) {
    firebase.database().ref(`${ this.PATHS.FOOD_LIST }/${ uid }`).push({ name, category, isPurchased, datePurchased });
  }
}

export default Firebase;