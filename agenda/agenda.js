// Simulação de dados da agenda
const eventsData = [
    { id: 1, title: 'Reunião de equipe', date: '2023-12-15', time: '14:00' },
    { id: 2, title: 'Almoço com cliente', date: '2023-12-18', time: '12:30' },
    // Adicione mais eventos conforme necessário
];

document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const calendar = document.getElementById('calendar');
    const eventDetails = document.getElementById('event-details');

    // Função para renderizar os eventos no calendário
    function renderEvents() {
        // Limpar conteúdo atual
        calendar.innerHTML = '';

        // Renderizar eventos
        eventsData.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('calendar-event');
            eventElement.innerText = event.title;

            // Adicionar manipulador de evento para exibir detalhes
            eventElement.addEventListener('click', () => showEventDetails(event));

            calendar.appendChild(eventElement);
        });
    }

    // Função para exibir detalhes do evento
    function showEventDetails(event) {
        eventDetails.innerHTML = `<h2>${event.title}</h2>
                                  <p>Data: ${event.date}</p>
                                  <p>Hora: ${event.time}</p>`;
    }

    // Renderizar eventos iniciais
    renderEvents();
});

