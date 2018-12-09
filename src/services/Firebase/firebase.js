import firebase from 'firebase';
import 'firebase/auth';
import config from './firebase.config.js'
const PATHS = {
  FOOD_LIST: '/foodList'
};

const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

class Firebase {
  constructor() {
    this.app = firebase.initializeApp( config );
    this.auth = this.app.auth();
    this.numUsers = 20;
  }

  async getFoodItemsById( foodId ) {
    const foodList = await this.app.database().ref( '/userFoodLists/' + foodId ).once( 'value' );
    return foodList.val();
  }

  async getRandomUserItems() {
    var randIndex = Math.floor( Math.random() * this.numUsers ) - 1;
    var randomUser = await this.app.database().ref( '/users' ).orderByKey().startAt( randIndex.toString() ).limitToFirst( 1 ).once( 'child_added' );
    return await this.getFoodItemsById( randomUser.val().foodListId );
  }

  userCreate = ( email, password ) => this.auth.createUserWithEmailAndPassword( email, password );

  userSignIn = ( email, password ) => this.auth.signInWithEmailAndPassword( email, password );

  userSignOut = () => this.auth.signOut();

  userPasswordReset = email => this.auth.sendPasswordResetEmail( email );

  userPasswordUpdate = password =>  this.auth.currentUser.updatePassword(password);

  async createFoodItem (uid, { name, category, isPurchased, datePurchased }) {
    const foodList = await firebase.database().ref(`${PATHS.FOOD_LIST}/${uid}`).once('value')
    const itemId = uuidv4();
    const itemData = { name, category, isPurchased, datePurchased }
    if (!foodList.val().length) {
      firebase.database().ref('foodList/' + uid).set({
          [itemId]: itemData
      });
      return true;
    }
    // fridgeItems[itemId] = {
    //   name: fridgeNames[index],
    //   category: fridgeCategories[index],
    //   dateAdded: randomDate(new Date(Date.parse(users[uid].dateCreated)), new Date()).toString(),
    //   isPurchased: !!Math.floor(Math.random() * 2)

    // }

    // firebase.database().ref('foodList/' + foodListId).set({
    //   userId: uid,
    //   items: fridgeItems
    // });
  }
}

export default Firebase;