export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCyVTClW9I9PsrGQ7B9RfgL2QyUUQ779Cc",
  authDomain: "marketzone-422a4.firebaseapp.com",
  databaseURL: "https://marketzone-422a4.firebaseio.com",
  projectId: "marketzone-422a4",
  storageBucket: "marketzone-422a4.appspot.com",
  messagingSenderId: "227372913105"
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