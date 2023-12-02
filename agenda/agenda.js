// Seu código Firebase aqui
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Seu web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIp-rFuZZsBCNVJ3pSge4TE-XUuwYygrI",
  authDomain: "agenda-6accc.firebaseapp.com",
  projectId: "agenda-6accc",
  storageBucket: "agenda-6accc.appspot.com",
  messagingSenderId: "794262176773",
  appId: "1:794262176773:web:9bcd82e5cffd858adc086c",
  measurementId: "G-QS6WRF6Y6L"
};

// Inicialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicialize Firestore
const db = getFirestore(app);

// Inicialize Authentication (se necessário)
const auth = getAuth(app);

function redirectToIndex() {
    // Adicione o redirecionamento para o Index aqui
}

// Funções para manipular o banco de dados Firestore
async function fetchEvents() {
    const eventsCollection = collection(db, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    const events = eventsSnapshot.docs.map(doc => doc.data());
    return events;
}

async function addEvent(eventData) {
    const eventsCollection = collection(db, 'events');
    const newEventRef = await addDoc(eventsCollection, eventData);
    return newEventRef.id;
}

// Adicione outras funções conforme necessário

