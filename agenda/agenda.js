// agenda.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import dayjs from 'dayjs';
firebaseConfig from "../js/firebaseConfig.js";

// Seu código JS da agenda aqui


// agenda.js
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Verifica se o usuário está autenticado
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Redireciona para a página de login se o usuário não estiver autenticado
        window.location.href = "login.html";
    }
});

// Referência para a coleção de eventos
const eventsCollection = collection(getFirestore(), "events");

// Função para criar um evento
const createEvent = async (title, start, end) => {
    try {
        await addDoc(eventsCollection, {
            title: title,
            start: start,
            end: end,
            userId: auth.currentUser.uid,
        });
        alert("Evento criado com sucesso!");
        closeModal();
    } catch (error) {
        console.error("Erro ao criar evento: ", error);
    }
};

// Função para buscar eventos do usuário autenticado
const getEvents = async () => {
    const q = query(eventsCollection, where("userId", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
    });
    return events;
};

// Função para deletar um evento
const deleteEvent = async (eventId) => {
    try {
        await deleteDoc(doc(eventsCollection, eventId));
        alert("Evento excluído com sucesso!");
    } catch (error) {
        console.error("Erro ao excluir evento: ", error);
    }
};

// Função para atualizar um evento
const updateEvent = async (eventId, title, start, end) => {
    try {
        await updateDoc(doc(eventsCollection, eventId), {
            title: title,
            start: start,
            end: end,
        });
        alert("Evento atualizado com sucesso!");
        closeModal();
    } catch (error) {
        console.error("Erro ao atualizar evento: ", error);
    }
};

// Função para pesquisar eventos
const searchEvents = async () => {
    const events = await getEvents();
    const searchTerm = prompt("Digite um termo de pesquisa:");
    const filteredEvents = events.filter((event) => event.title.includes(searchTerm));
    console.log("Eventos encontrados: ", filteredEvents);
};

// Função para ir para a página principal
const goToIndex = () => {
    window.location.href = "index.html";
};

// Função para abrir o modal de criação de evento
const openCreateEventModal = () => {
    openModal();
    document.getElementById("edit-event-form").reset();
    document.getElementById("edit-event-form").onsubmit = function (event) {
        event.preventDefault();
        const title = document.getElementById("event-title").value;
        const start = document.getElementById("event-start").value;
        const end = document.getElementById("event-end").value;
        createEvent(title, start, end);
    };
};

// Função para abrir o modal de edição de evento
const openEditEventModal = () => {
    const eventId = prompt("Digite o ID do evento que deseja editar:");
    const events = getEvents();
    const eventToEdit = events.find((event) => event.id === eventId);
    if (eventToEdit) {
        openModal();
        document.getElementById("event-title").value = eventToEdit.title;
        document.getElementById("event-start").value = eventToEdit.start;
        document.getElementById("event-end").value = eventToEdit.end;
        document.getElementById("edit-event-form").onsubmit = function (event) {
            event.preventDefault();
            const title = document.getElementById("event-title").value;
            const start = document.getElementById("event-start").value;
            const end = document.getElementById("event-end").value;
            updateEvent(eventId, title, start, end);
        };
    } else {
        alert("Evento não encontrado!");
    }
};

// Função para abrir o modal
const openModal = () => {
    document.getElementById("edit-event-modal").style.display = "block";
};

// Função para fechar o modal
const closeModal = () => {
    document.getElementById("edit-event-modal").style.display = "none";
};

// Inicialização do calendário
const calendar = new FullCalendar.Calendar(document.getElementById("calendar"), {
    initialView: "dayGridMonth",
    events: getEvents,
    eventClick: (info) => {
        const eventDetails = document.getElementById("event-details");
        eventDetails.innerHTML = `<h2>${info.event.title}</h2>
        <p><strong>Data de Início:</strong> ${info.event.start.toLocaleString()}</p>
        <p><strong>Data de Término:</strong> ${info.event.end.toLocaleString()}</p>`;
        eventDetails.style.display = "block";
    },
});

// Renderização do calendário
calendar.render();

// agenda.js

// Your code here...

// Function to navigate to the calculator page
function goToCalculator() {
  window.location.href = "calculadora/calculadora.html";
}

// Function to navigate to the main menu
function goToMainMenu() {
  window.location.href = "index.html";
}

// Initialize Firebase (move this part to the top)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIp-rFuZZsBCNVJ3pSge4TE-XUuwYygrI",
  authDomain: "agenda-6accc.firebaseapp.com",
  projectId: "agenda-6accc",
  storageBucket: "agenda-6accc.appspot.com",
  messagingSenderId: "794262176773",
  appId: "1:794262176773:web:9bcd82e5cffd858adc086c",
  measurementId: "G-QS6WRF6Y6L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to retrieve events from Firestore
async function getEvents() {
  const eventsCollection = collection(db, "events");
  const eventsSnapshot = await getDocs(eventsCollection);
  const events = [];
  eventsSnapshot.forEach((doc) => {
    events.push({ id: doc.id, ...doc.data() });
  });
  return events;
}

// Other functions...

// Example usage
getEvents().then((events) => {
  console.log(events);
});

