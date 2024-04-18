import { auth } from "../config/firebase";

//
// Function to be used globally to check is user is logged in   
//
export function checkAuth(){

    if(auth.currentUser === null) {
        return false;
    } else {
        return true;
    }
}