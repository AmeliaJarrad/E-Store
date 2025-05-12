import { collection, getDoc, getDocs, doc, onSnapshot, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';

  
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
  
  const convertFormValuesToProduct = (formValues) => {
    const { Price: priceStr, Quantity: quantityStr, ...rest } = formValues;
    const Price = parseInt(priceStr);
    const Quantity = parseInt(quantityStr);
    return { Price, Quantity, ...rest };
  };
  
  export const createProduct = async (productData) => {
    const collectionRef = collection(db, 'furniture');
    const product = convertFormValuesToProduct(productData);
    const docRef = await addDoc(collectionRef, product);
    return docRef.id;
  };
  
  export const deleteProductById = async (id) => {
    const docRef = doc(db, 'furniture', id);
    await deleteDoc(docRef);
    return id;
  };
  
  export const updateProductById = async (id, productData) => {
    console.log(id);
    const docRef = doc(db, 'furniture', id);
    const product = convertFormValuesToProduct(productData);
    await updateDoc(docRef, product);
    return { id, ...product };
  };
  
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