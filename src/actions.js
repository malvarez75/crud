import { db } from "./config/firebase";
import { getDocs, collection, addDoc, doc, updateDoc, getDocFromCache, deleteDoc} from "firebase/firestore";

export const getcollection = async (nom_col) => {
    const result = {statusResponse : false, data : null, error : null}
    const CollectionRef = collection(db, nom_col)

    try {
        const data = await getDocs(CollectionRef)
        const arrayData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        result.statusResponse = true
        result.data = arrayData
    } catch (error) {
        result.error = error
    }
    return result
  }

  export const addDocument = async (nom_col, data) => {
    const result = {statusResponse : false, data : null, error : null}
    const CollectionRef = collection(db, nom_col)

    try {
        const docRef  = await addDoc(CollectionRef, data)
        result.statusResponse = true
        result.data = docRef.id;
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        result.error = error
    }
    return result
  }

  export const getDocument = async (nom_col, id) => {
    console.log('inicio')
    const result = {statusResponse : false, data : null, error : null}
    try {
        const documentRef = doc(db, nom_col, id);
        const doc = await getDocFromCache(documentRef);
        console.log("Cached document data:", doc.data());

        console.log('doc : ', doc.data)
        console.log('id : ', doc.data.id)
        console.log('name : ')
        /*const docRef  = await addDoc(CollectionRef, data)
        result.statusResponse = true
        result.data = docRef.id;
        console.log("Document written with ID: ", docRef.id);*/
    } catch (error) {
        result.error = error
        console.log(error)
    }
    return result
  }

  export const updateDocument = async (nom_col, id, data) => {
    const result = {statusResponse : false, error : null}
    const documentRef = doc(db, nom_col, id);
    try {
        await updateDoc(documentRef, data)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
  }

  export const deleteDocument = async (nom_col, id) => {
    const result = {statusResponse : false, error : null}
    const documentRef = doc(db, nom_col, id);
    try {
        await deleteDoc(documentRef)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
  }