import firebase from 'firebase';
import 'firebase/auth';
import config from './firebase.config.js'
class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
    this.numUsers = 20
  }

  async getFoodItemsById(foodId) {
    const foodList = await this.app.database().ref("/userFoodLists/" + foodId).once("value")
    return foodList.val()
  }

  async getRandomUserItems() {
    var randIndex = Math.floor(Math.random() * this.numUsers) - 1
    var randomUser = await this.app.database().ref("/users").orderByKey().startAt(randIndex.toString()).limitToFirst(1).once("child_added")
    return await this.getFoodItemsById(randomUser.val().foodListId)
  }

  userCreate = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  userSignIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  userSignOut = () => this.auth.signOut();

  userPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  userPasswordUpdate = password =>  this.auth.currentUser.updatePassword(password);
}

export default Firebase;