import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import { app, db } from './firebaseConf'
import { addDoc, collection } from "firebase/firestore";

const auth = getAuth(app);

export const signUp = async (email: string, password: string, role: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
            role
        });
        return true
    } catch (error: any) {
        return { error: error.message }
    }
};

export const userSignOut = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
};

