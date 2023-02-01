import { AppDispatch } from '.';
import { actions } from './userSlice'
import { db } from '../services/firebaseConf'
import { collection, deleteDoc, getDocs, getDoc, doc, where, query, updateDoc } from "firebase/firestore";


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
        await deleteDoc(doc(db, "users", id))

    } catch (error) {
        console.log(error);
    }
};

export const editUser = async (id: string, data: {}) => {
    try {

        const userRef = doc(db, "users", id);
        await updateDoc(userRef, data)

    } catch (error) {
        console.log(error);

    }
};

export const stateUser = (email: string) => async (dispatch: AppDispatch) => {
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


export const getUser = async (id: string) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", id));
        const docID = querySnapshot.id;
        // const { email, role } = querySnapshot.data()
        return { id: docID, ...querySnapshot.data() }

    } catch (error) {
        console.log(error);

    }
};

