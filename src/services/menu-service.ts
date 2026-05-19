
import { 
  collection, 
  onSnapshot, 
  doc, 
  updateDoc, 
  query, 
  getDocs, 
  setDoc, 
  writeBatch 
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { MENU_DATA, MenuItem } from "@/app/lib/menu-data";

const MENU_COLLECTION = "menu";

export const initializeMenu = async () => {
  const q = query(collection(db, MENU_COLLECTION));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    const batch = writeBatch(db);
    MENU_DATA.forEach((item) => {
      const docRef = doc(collection(db, MENU_COLLECTION), item.id);
      batch.set(docRef, item);
    });
    await batch.commit();
  }
};

export const subscribeToMenu = (callback: (menu: MenuItem[]) => void) => {
  return onSnapshot(collection(db, MENU_COLLECTION), (snapshot) => {
    const items = snapshot.docs.map(doc => doc.data() as MenuItem);
    callback(items);
  });
};

export const updateMenuItem = async (id: string, updates: Partial<MenuItem>) => {
  const docRef = doc(db, MENU_COLLECTION, id);
  await updateDoc(docRef, updates);
};
