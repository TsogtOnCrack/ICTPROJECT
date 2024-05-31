
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPc65i28k2abj3qlmeBOhz6nvrcitMn1E",
  authDomain: "ictgroupmakes.firebaseapp.com",
  projectId: "ictgroupmakes",
  storageBucket: "ictgroupmakes.appspot.com",
  messagingSenderId: "751408219592",
  appId: "1:751408219592:web:78afd6cedfe531961fecfd",
  measurementId: "G-PGDEGVZVDE",
};
const app = initializeApp(firebaseConfig);
export default getFirestore();