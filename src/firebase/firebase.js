import firebase from "firebase/compat/app";
import "firebase/auth";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpZ71aLvxTtoPXJXE3K1kGK877yHfwpA4",
  authDomain: "flowmusic-20cf4.firebaseapp.com",
  projectId: "flowmusic-20cf4",
  storageBucket: "flowmusic-20cf4.appspot.com",
  appId: "1:940438045424:web:68e07e5e3902c6ffe57835",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage, ref, uploadBytes, uploadBytesResumable };
