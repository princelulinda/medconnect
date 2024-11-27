import { FirebaseError} from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";
import auth, {db} from '@/lib/firebase/.config'
import { doc, setDoc, updateDoc } from "firebase/firestore";


const handleError = (error: FirebaseError): string => {
  return error?.message || "Une erreur s'est produite.";
};


export const addHealthProfessionalData = async (
  userId: string,
  healthData: { [key: string]: any }
): Promise<void> => {
  try {
    const userDocRef = doc(db, "users", userId);

    await updateDoc(userDocRef, {
      ...healthData,
      isHealthProfessional: true, 
      updatedAt: new Date().toISOString(),
    });

    console.log("Informations mises à jour avec succès !");
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", handleError(error as FirebaseError));
    throw new Error(handleError(error as FirebaseError));
  }
};
export const registerUser = async (
    email: string, 
    password: string, 
    additionalData: { [key: string]: any }
  ): Promise<User | null> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        uid: user.uid,
        ...additionalData,
        createdAt: new Date().toISOString()
      });
  
      return user;
    } catch (error) {
      console.error("Erreur d'inscription :", handleError(error));
      throw new Error(handleError(error));
    }
  };

// Fonction de connexion
export const loginUser = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erreur de connexion :", handleError(error));
    throw new Error(handleError(error));
  }
};

// Fonction de déconnexion
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erreur de déconnexion :", handleError(error));
    throw new Error(handleError(error));
  }
};

// Fonction pour surveiller l'état de l'utilisateur
export const observeUser = (callback: (user: User | null) => void): (() => void) => {
  return onAuthStateChanged(auth, callback);
};

// Fonction pour obtenir l'utilisateur actuel
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
