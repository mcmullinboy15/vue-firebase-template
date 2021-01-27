import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//https://firebase.google.com/docs/web/setup#node.js-apps 
//  Initialize the cloud db to get variables and to copy data,
//  And then Use the emulator db in test
import { firebaseConfig } from "../config";

// Initialize Firebase
fb.initializeApp(firebaseConfig);

// utils
const db = fb.firestore();
const auth = fb.auth();

// collection references
const usersRef = db.collection("users");
const varsRef = db.collection("variables");

// const { Timestamp, GeoPoint } = fb.firestore;

// export utils/refs
export { fb, db, auth, usersRef, varsRef };

import { setVars } from "./variables";
if (process.env.NODE_ENV === "development") {
  setVars(varsRef);
}
