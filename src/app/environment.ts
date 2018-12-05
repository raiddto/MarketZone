export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA1EJ1mkrYVJy9WkQU9ik1hXMzzFACBy8w",
    authDomain: "fir-crud-df12a.firebaseapp.com",
    databaseURL: "https://fir-crud-df12a.firebaseio.com",
    projectId: "fir-crud-df12a",
    storageBucket: "fir-crud-df12a.appspot.com",
    messagingSenderId: "298106228484"
  };

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });
  return returnArray;
}