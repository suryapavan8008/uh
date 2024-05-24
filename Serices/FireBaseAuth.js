// Import the functions you need from the SDKs you need
import { initializeApp,getApps} from "firebase/app";
import { initializeAuth,getReactNativePersistence, getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARoTa3_eCeaXR__9KAQ7LVnX0bt-Ihans",
    authDomain: "auth-b4109.firebaseapp.com",
    projectId: "auth-b4109",
    storageBucket: "auth-b4109.appspot.com",
    messagingSenderId: "830646750601",
    appId: "1:830646750601:web:c2a024d6414c4a731fa558",
    measurementId: "G-HYWC3LXF8K"
};
let auth;
if(getApps().length==0){
    const app = initializeApp(firebaseConfig);

auth=initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});
}else{
    auth=getAuth();
}

export default auth;