import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDTmPOif_aCmN3g8V20nIzZYUD_xjns2cQ',
	authDomain: 'breshow-d6298.firebaseapp.com',
	projectId: 'breshow-d6298',
	storageBucket: 'breshow-d6298.appspot.com',
	messagingSenderId: '871902688658',
	appId: '1:871902688658:web:8119112aa6b49a28343d4b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

function idGenerator() {
	let timestamp = new Date();

	let id =
		timestamp.getHours().toString() +
		timestamp.getMinutes().toString() +
		timestamp.getSeconds().toString() +
		timestamp.getMilliseconds().toString();

	return id;
}
export { db, idGenerator };
