// Espera a que todo el contenido de la página se cargue
window.addEventListener('DOMContentLoaded', (event) => {

    // Selecciona el elemento de video por su ID
    const video = document.getElementById('background-video');

    // Agrega un "escuchador" para el evento de scroll en la ventana
    window.addEventListener('scroll', () => {
        // Obtiene la posición actual del scroll vertical
        const scrollPosition = window.scrollY;

        // Define a partir de qué punto de scroll el video comenzará a desaparecer
        // Puedes ajustar este valor. Un valor más alto hará que tarde más en desaparecer.
        const fadeOutPoint = 500; 

        // Calcula la nueva opacidad.
        // Será 1 cuando el scroll sea 0, y 0 cuando el scroll llegue a fadeOutPoint.
        let opacity = 1 - (scrollPosition / fadeOutPoint);

        // Aplica la nueva opacidad al estilo del video, asegurando que no sea negativa
        video.style.opacity = Math.max(0, opacity);
    });
});
