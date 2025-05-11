import { collection, getDoc, getDocs, doc, onSnapshot } from 'firebase/firestore';

  
import { db } from '../../config/firestore';
  
  export const getAllProducts = async () => {
    const collectionRef = collection(db, 'furniture');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };
  
  export const getProductById = async (id) => {
    const docRef = doc(db, 'furniture', id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      throw new Error('Could not find furniture product with id ' + id);
    }
    return { id: snapshot.id, ...snapshot.data() };
  };
  
//   const convertFormValuesToMovie = (formValues) => {
//     const { rating: ratingStr, year: yearStr, ...rest } = formValues;
//     const rating = parseFloat(ratingStr);
//     const year = parseInt(yearStr);
//     return { rating, year, ...rest };
//   };
  
//   export const createProduct = async (productData) => {
//     const collectionRef = collection(db, 'furniture');
//     const product = convertFormValuesToMovie(productData);
//     const docRef = await addDoc(collectionRef, product);
//     return docRef.id;
//   };
  
  export const deleteProductById = async (id) => {
    const docRef = doc(db, 'furniture', id);
    await deleteDoc(docRef);
    return id;
  };
  
//   export const updateProductById = async (id, productData) => {
//     console.log(id);
//     const docRef = doc(db, 'furniture', id);
//     const movie = convertFormValuesToMovie(productData);
//     await updateDoc(docRef, movie);
//     return { id, ...movie };
//   };
  
  export const subscribeToProducts = (callback) => {
    console.log('Subscribe to furniture product data');
    const collectionRef = collection(db, 'furniture');
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      console.log('A furniture product has changed');
      const productData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(productData);
    });
    return unsub;
  };