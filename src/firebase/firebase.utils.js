import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDN-1z9KnDnyXlVwy_5fTXZ63rS-zSinE4",
    authDomain: "clothing-db-552f5.firebaseapp.com",
    projectId: "clothing-db-552f5",
    storageBucket: "clothing-db-552f5.appspot.com",
    messagingSenderId: "121728572132",
    appId: "1:121728572132:web:5cc6978c57e8cc95006af1",
    measurementId: "G-4023V5FQS9"
};

export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;