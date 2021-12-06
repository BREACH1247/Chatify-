import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

 const firebaseConfig = {
    apiKey: "AIzaSyDSc4Uf_EavyC93z9fm8qlHL9y23BLqNDg",
    authDomain: "chatify-f7269.firebaseapp.com",
    projectId: "chatify-f7269",
    storageBucket: "chatify-f7269.appspot.com",
    messagingSenderId: "62719921369",
    appId: "1:62719921369:web:270ddbf8c1928a34c442c8"
}

export const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)


