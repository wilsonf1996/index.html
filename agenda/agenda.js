<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Agenda</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Adicione estilos específicos para a agenda, se necessário */
        #visualizar-eventos {
            margin-top: 20px;
        }

        #lista-eventos {
            list-style: none;
            padding: 0;
        }

        .evento {
            margin-bottom: 10px;
        }

        .evento button {
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Minha Agenda</h1>
    
    <!-- Seção para Adicionar Eventos -->
    <section id="adicionar-evento">
        <h2>Adicionar Evento</h2>
        <form onsubmit="adicionarEvento(); return false;">
            <label for="nome-evento">Nome do Evento:</label>
            <input type="text" id="nome-evento" required>
            
            <label for="data-evento">Data do Evento:</label>
            <input type="date" id="data-evento" required>
            
            <label for="hora-inicio">Hora de Início:</label>
            <input type="time" id="hora-inicio" required>
            
            <label for="hora-termino">Hora de Término:</label>
            <input type="time" id="hora-termino" required>

            <button type="submit">Adicionar</button>
        </form>
    </section>

    <!-- Seção para Visualizar Eventos -->
    <section id="visualizar-eventos">
        <h2>Eventos</h2>
        <!-- Lista de eventos -->
        <ul id="lista-eventos"></ul>
    </section>

    <!-- Adicione scripts para a lógica da agenda -->
    <script src="agenda.js"></script>
</body>
</html>
