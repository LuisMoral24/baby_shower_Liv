<script setup>
// Enlace para confirmar asistencia por WhatsApp
const whatsappMessage = encodeURIComponent("¡Hola Luis y Nancy! Confirmo mi asistencia al baby shower. Confirmo asistencia");
const whatsappLink = `https://wa.me/5212211959121?text=${whatsappMessage}`;

// Enlace de la mesa de regalos
const giftRegistryLink = "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51596650";

// Galería de fotos (Reemplazar con imágenes reales si lo deseas)
const photoGallery = [
  require("@/assets/Fotos_baby_shower_2.jpg"),
  require("@/assets/Fotos_baby_shower_3.jpg"),
  require("@/assets/Fotos_baby_shower_1.jpg"),
];

// Contador regresivo

import { ref, onMounted } from 'vue';
const countdown = ref('');

function updateCountdown() {
  const eventDate = new Date('2025-02-01T16:00:00');
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.value = "¡El evento ha comenzado! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

</script>

<template>
  <div class="container">
    <div class="card">
      <h1>🌸 ¡Estás invitad@! 🌸</h1>
      <h2>Baby Shower de Livny</h2>
      <img src="./assets/pooh_bebe.png" class="pooh" >
      <p class="font"> ¡Estamos emocionados por celebrar la llegada de nuestra niña!</p>
      <p class="font"> ¡Y queremos que tú formes parte de este gran evento! </p>
      <img src="./assets/pooh_amigos.png" class="pooh" >

      <div class="details">
        <p class="font"> <img src="./assets/calendar_591607.png" class="iconMaps" > <strong>Fecha:</strong> Sábado 1 de febrero de 2025</p>
        <p class="font"> <img src="./assets/clock_741382.png" class="iconMaps" > <strong>Hora:</strong> A partir de las 4:00 p.m.</p>
        <p class="font"> <img src="./assets/map_854952.png" class="iconMaps" > <strong>Dirección:</strong> Calle de las Rotondas #286, Fraccionamiento Campestre Covadonga</p>

<!-- Botón para abrir ubicación en Google Maps -->
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Las+Rotondas+286,+Agrícola+Ignacio+Zaragoza,+72100+Heroica+Puebla+de+Zaragoza,+Pue." 
          target="_blank" 
          class="btn-maps">
          📍 Ver Ubicación 
        </a>

 <!-- Contador regresivo -->
 <div class="countdown">
        <h3>⏳ Cuenta regresiva para el gran día:</h3>
        <p>{{ countdown }}</p>
      </div>


        
      </div>

      <!-- Botón de Confirmar Asistencia -->
      <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
        <img src="./assets/whatsapp_2504957.png" class="iconMaps" > Confirmar Asistencia por WhatsApp
      </a>

      <!-- Botón de Mesa de Regalos -->
      <div class="gift-section">
        <h3>🎁 Nuestra Mesa de Regalos</h3>
        <p class="font">Si deseas hacernos un detalle especial, aquí puedes ver nuestra lista de regalos:</p>
        <a :href="giftRegistryLink" target="_blank" class="btn-gift">
          🛍️ Ver Mesa de Regalos
        </a>
      </div>

      <!-- Sección de Galería de Fotos -->
      <div class="gallery-section">
        <h3>📸 Momentos Especiales</h3>
        <div class="gallery">
          <div v-for="(photo, index) in photoGallery" :key="index" class="photo-frame">
            <img 
              :src="photo" 
              :alt="'Foto ' + (index + 1)"
              :class="{'horizontal-photo': index === 2}" />
          </div>
        </div>
      </div>

      <p class="footer font">¡Te esperamos con mucha alegría! 💖</p>
      <img src="./assets/pooh_todos.jpg" class="pooh" >
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap');



.btn-whatsapp:hover {
  background-color: #1ebe57;
}

.btn-maps:hover {
  background-color: #3367D6;
}






/* Diseño responsivo */
@media (max-width: 2500px){

  /* Títulos */
h1 {
  font-family: 'Pacifico', cursive;
  color: #ff69b4;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h2, h3 {
  font-family: 'Poppins', sans-serif;
  color: #ff4081;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

/* Títulos */
p {
  font-size: 20px;
}

  /* Contenedor principal */
.container {
  background: linear-gradient(135deg, #ffe3e3, #ffc1e3);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Tarjeta principal */
.card {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 600px;
  border: 3px dashed #ff9ac1;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
}

  .pooh{
    width: 70%;
  }

  /* Sección de Galería */
.gallery-section {
  margin-top: 30px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.photo-frame {
  width: 280px;
  height: 500px;
  border: 5px solid #ff9ac1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}


.gallery .photo-frame:nth-child(3) {
  width: 500px;  /* Mayor ancho */
  height: 300px; /* Menor altura */
  margin-top: 25px; 
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-frame:hover {
  transform: scale(1.1);
}



  /* Botón de Mesa de Regalos */
.btn-gift {
  display: inline-block;
  background-color: #ff69b4;
  color: white;
  padding: 27px 30px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 27px;
  width: 80%;
  transition: background-color 0.3s ease;
}

.btn-gift:hover {
  background-color: #ff4081;
}

  /* Botón de WhatsApp */
.btn-whatsapp {
  display: inline-block;
  background-color: #25d366;
  color: white;
  padding: 27px 30px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 27px;
  width: 80%;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

  .font{
    font-size: 25px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

/* Contador regresivo */
.countdown {
  background-color: #fff5f8;
  padding: 15px;
  border-radius: 15px;
  margin: 20px 0;
  font-weight: bold;
  color: #ff69b4;
  border: 2px dashed #ff9ac1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.countdown h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.countdown p {
  font-size: 1.8rem;
  letter-spacing: 1px;
}

  img{
    width: 7%;
  }

  .btn-maps {
  display: inline-block;
  background-color: #4285F4; /* Color característico de Google Maps */
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  font-size: 22px;
}


}



@media (max-width: 600px) {

  /* Títulos */
h1 {
  font-family: 'Poppins', cursive;
  color: #ff69b4;
  font-size: 17px;
  margin-bottom: 10px;
}

h2, h3 {
  font-family: 'Poppins', sans-serif;
  color: #ff4081;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

/* Títulos */
p {
  font-size: 10px;
}

  /* Contenedor principal */
.container {
  background: linear-gradient(135deg, #ffe3e3, #ffc1e3);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

/* Tarjeta principal */
.card {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  margin-top: -30px;
  max-width: 600px;
  border: 3px dashed #ff9ac1;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
}

  /* Sección de Galería */
.gallery-section {
  margin-top: 30px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.photo-frame {
  width: 100px;
  height: 100px;
  border: 3px solid #ff9ac1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-frame:hover {
  transform: scale(1.1);
}

/* Estilo especial para la tercera imagen */
.gallery .photo-frame:nth-child(3) {
  width: 350px;  /* Mayor ancho */
  height: 150px; /* Menor altura */
  margin-top: 5px; /* Opcional: ajusta el espacio superior si lo necesitas */
}

  /* Botón de Mesa de Regalos */
.btn-gift {
  display: inline-block;
  background-color: #ff69b4;
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 17px;
  width: 88%;
  height: 30px;
  transition: background-color 0.3s ease;
}

.btn-gift:hover {
  background-color: #ff4081;
}

  .btn-whatsapp {
  display: inline-block;
  background-color: #25d366;
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.pooh{
  width: 90%;
}

.font{
    font-size: 20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  /* Contador regresivo */
.countdown {
  background-color: #fff5f8;
  /* padding: 15px; */
  border-radius: 15px;
  margin: 20px 0;
  font-weight: bold;
  color: #ff69b4;
  border: 2px dashed #ff9ac1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.countdown h3 {
  margin-bottom: 10px;
  font-size: 14px;
}

.countdown p {
  font-size: 20px;
  letter-spacing: 1px;
}

  .btn-maps {
  display: inline-block;
  background-color: #4285F4; /* Color característico de Google Maps */
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 5px;
  transition: background-color 0.3s ease;
  font-size: 18px;
}

  .photo-frame {
    width: 200px;
    height: 250px;
  }

  h1 {
    font-size: 17px;
  }

  h2, h3 {
    font-size: 20px;
  }

  .btn-whatsapp {
    padding: 10px 15px;
    font-size: 17px;
    width: 92%;
    height: 50px;
  }

  img{
    width: 15%;
  }

  .iconMaps img{
    width: 5%;
  }
}
</style>
