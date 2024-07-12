<template>
    <div class="inicio">
      <!-- Encabezado con información del próximo partido -->
      <div class="header">
        <div class="match-info">
          <h2 class="section-title">Próximo Partido</h2>
          <div class="match-details">
            <div class="team">
              <img :src="matchData.team1.logo" alt="Escudo del Equipo 1" />
              <span class="team-name">{{ matchData.team1.name }}</span>
            </div>
            <span class="vs-text">Vs</span>
            <div class="team">
              <img :src="matchData.team2.logo" alt="Escudo del Equipo 2" />
              <span class="team-name">{{ matchData.team2.name }}</span>
            </div>
          </div>
          <div class="match-time">
            <span class="match-date">{{ matchData.date }}</span>
            <span class="match-hour">{{ matchData.time }}</span>
          </div>
        </div>
      </div>
  
      <!-- Contenedor para partidos en vivo -->
      <div class="live-matches-container">
        <h2 class="section-title">Partido en Vivo</h2>
        <div class="live-matches">
          <div class="live-match">
            <div class="team">
              <img :src="liveMatch.team1.logo" alt="Escudo del Equipo 1" />
              <span class="team-name">{{ liveMatch.team1.name }}</span>
            </div>
            <span class="vs-text">Vs</span>
            <div class="team">
              <img :src="liveMatch.team2.logo" alt="Escudo del Equipo 2" />
              <span class="team-name">{{ liveMatch.team2.name }}</span>
            </div>
          </div>
          <div class="match-time">
            <span class="match-date">{{ liveMatch.date }}</span>
            <span class="match-hour">{{ liveMatch.time }}</span>
          </div>
        </div>
      </div>
  
      <!-- Contenido adicional con opciones de visualización -->
      <div class="content">
        <h2 class="section-title">Información Adicional</h2>
        <div class="options">
          <ul>
            <li @click="toggleLastMatchBar">Ver Último partido</li>
            <li @click="toggleNextMatchBar">Próximo partido</li>
            <li @click="toggleLiveMatchBar">Juegos en Vivo</li>
          </ul>
        </div>
  
        <!-- Barra horizontal para mostrar el último partido -->
        <div v-if="showLastMatchBar" class="last-match-bar">
          <div class="team">
            <img :src="lastMatch.team1.logo" alt="Escudo del Equipo 1" />
            <span class="team-name">{{ lastMatch.team1.name }}</span>
          </div>
          <div class="match-details">
            <span class="goals">{{ lastMatch.team1Score }} - {{ lastMatch.team2Score }}</span>
            <span class="full-time">{{ lastMatch.fullTime ? 'Tiempo Completo' : 'Tiempo Suplementario' }}</span>
            <span class="match-date">{{ lastMatch.date }}</span>
            <span class="match-hour">{{ lastMatch.time }}</span>
          </div>
          <div class="team">
            <img :src="lastMatch.team2.logo" alt="Escudo del Equipo 2" />
            <span class="team-name">{{ lastMatch.team2.name }}</span>
          </div>
        </div>
  
        <!-- Barra horizontal para mostrar el próximo partido -->
        <div v-if="showNextMatchBar" class="next-match-bar">
          <div class="team">
            <img :src="matchData.team1.logo" alt="Escudo del Equipo 1" />
            <span class="team-name">{{ matchData.team1.name }}</span>
          </div>
          <div class="match-details">
            <span class="match-date">{{ matchData.date }}</span>
            <span class="match-hour">{{ matchData.time }}</span>
          </div>
          <div class="team">
            <img :src="matchData.team2.logo" alt="Escudo del Equipo 2" />
            <span class="team-name">{{ matchData.team2.name }}</span>
          </div>
        </div>
  
        <!-- Barra horizontal para mostrar el juego en vivo -->
        <div v-if="showLiveMatchBar" class="live-match-bar">
          <div class="team">
            <img :src="liveMatch.team1.logo" alt="Escudo del Equipo 1" />
            <span class="team-name">{{ liveMatch.team1.name }}</span>
          </div>
          <div class="match-details">
            <span class="match-date">{{ liveMatch.date }}</span>
            <span class="match-hour">{{ liveMatch.time }}</span>
          </div>
          <div class="team">
            <img :src="liveMatch.team2.logo" alt="Escudo del Equipo 2" />
            <span class="team-name">{{ liveMatch.team2.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos de ejemplo para los partidos
  const matchData = ref({
    team1: { name: 'Equipo 1', logo: 'path/to/logo1.png' },
    team2: { name: 'Equipo 2', logo: 'path/to/logo2.png' },
    date: '2024-07-12',
    time: '18:00'
  });
  
  const liveMatch = ref({
    team1: { name: 'Equipo A', logo: 'path/to/logoA.png' },
    team2: { name: 'Equipo B', logo: 'path/to/logoB.png' },
    date: '2024-07-13',
    time: '15:00'
  });
  
  const lastMatch = ref({
    team1: { name: 'Equipo C', logo: 'path/to/logoC.png' },
    team2: { name: 'Equipo D', logo: 'path/to/logoD.png' },
    team1Score: 2,
    team2Score: 1,
    fullTime: true,
    date: '2024-07-10',
    time: '20:00'
  });
  
  // Variables y funciones para controlar la visibilidad de las barras
  const showLastMatchBar = ref(false);
  const showNextMatchBar = ref(false);
  const showLiveMatchBar = ref(false);
  
  const toggleLastMatchBar = () => {
    showLastMatchBar.value = !showLastMatchBar.value;
  };
  
  const toggleNextMatchBar = () => {
    showNextMatchBar.value = !showNextMatchBar.value;
  };
  
  const toggleLiveMatchBar = () => {
    showLiveMatchBar.value = !showLiveMatchBar.value;
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente 'Inicio' */
  .inicio {
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el encabezado */
  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
  
  /* Estilos para la información del partido */
  .match-info {
    width: 100%;
  }
  
  /* Estilos para los detalles del partido */
  .match-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  
  /* Estilos para los equipos */
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Estilos para los logos de los equipos */
  .team img {
    width: 50px; /* Ajusta el tamaño del escudo del equipo según tu diseño */
    height: 50px;
    margin-bottom: 5px;
  }
  
  /* Estilos para los nombres de los equipos */
  .team-name {
    margin-top: 5px;
    font-weight: bold;
  }
  
  /* Estilos para la hora del partido */
  .match-time {
    text-align: center;
    margin-top: 5px;
  }
  
  .match-date,
  .match-hour {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
  
  /* Estilos para el contenedor de partidos en vivo */
  .live-matches-container {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para la lista de partidos en vivo */
  .live-matches {
    margin-top: 10px;
  }
  
  /* Estilos para un partido en vivo */
  .live-match {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  /* Estilos para los detalles del partido en vivo */
  .live-match .team {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .live-match .team span {
    margin-top: 5px;
  }
  
  /* Estilos para el contenido adicional */
  .content {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para las opciones de visualización */
  .options {
    margin-top: 20px;
  }
  
  .options ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  
  .options ul li {
    padding: 10px 20px;
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .options ul li:hover {
    background-color: #40a9ff;
  }
  
  /* Estilos para el título de sección */
  .section-title {
    text-align: center;
    margin-bottom: 10px;
    color: #001529;
  }
  
  /* Estilos para la barra del último partido */
  .last-match-bar,
  .next-match-bar,
  .live-match-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f2f5;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  /* Estilos para los detalles de los partidos */
  .last-match-bar .match-details,
  .next-match-bar .match-details,
  .live-match-bar .match-details {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  /* Estilos para los logos de equipos en las barras de partidos */
  .last-match-bar .team img,
  .next-match-bar .team img,
  .live-match-bar .team img {
    width: 40px; /* Ajusta el tamaño del escudo del equipo según tu diseño */
    height: 40px;
    margin-bottom: 5px;
  }
  
  /* Estilos para los nombres de equipos en las barras de partidos */
  .last-match-bar .team-name,
  .next-match-bar .team-name,
  .live-match-bar .team-name {
    margin-top: 5px;
  }
  
  /* Estilos para el texto 'Vs' */
  .vs-text {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
    color: #000; /* Cambiar el color a negro si es necesario */
  }
  </style>
  