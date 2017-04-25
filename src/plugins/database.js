import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBnMoSaMWXeYd6A8hukSreCOrK7ZgavYpY",
    authDomain: "expenses-e7700.firebaseapp.com",
    databaseURL: "https://expenses-e7700.firebaseio.com",
    projectId: "expenses-e7700",
    storageBucket: "expenses-e7700.appspot.com",
    messagingSenderId: "1052021817679"
}
  
const connection = firebase.initializeApp(config)

const DB = connection.database()

export default function install (Vue){
	Object.defineProperties(Vue.prototype, {
		$db: {
			get(){
				return DB
			}
		}
	})
}