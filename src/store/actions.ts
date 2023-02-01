import { AppDispatch } from '.';
import { actions } from './userSlice'
import { db } from '../services/firebaseConf'
import { collection, deleteDoc, getDocs, getDoc, doc, where, query } from "firebase/firestore";


const userRef = collection(db, "users");

export const fetchUsers = async () => {
    try {
        const querySnapshot = await getDocs(userRef)
        const data: { [x: string]: any; }[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data

    } catch (error) {
        console.log(error);

    }
};

export const deleteUser = async (id: string) => {
    try {
        console.log(id);

        const querySnapshot = await deleteDoc(doc(db, "users", id))
        console.log(querySnapshot);

    } catch (error) {
        console.log(error);

    }
};

export const getUser = (email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(actions.startLoading());

        const getUserQuery = query(userRef, where("email", "==", email));
        const querySnapshot = await getDocs(getUserQuery);
        const data: { [x: string]: any; }[] = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
        }));

        if (!data[0]) dispatch(actions.getUserFailure());
        dispatch(actions.getUserSuccess(data[0]));
        
    } catch (error) {
        dispatch(actions.getUserFailure());
    }
};

