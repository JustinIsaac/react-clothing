import firebase from "firebase/compat";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('NGSEVsIXUN4wnnkSYis5')
	.collection('cartItems')
	.doc('gHPkdnoVAt9civGuqxce')
firestore.doc('/users/NGSEVsIXUN4wnnkSYis5/cartItems/gHPkdnoVAt9civGuqxce');
firestore.collection('/users/NGSEVsIXUN4wnnkSYis5/cartItems');