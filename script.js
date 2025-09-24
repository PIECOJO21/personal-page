// Espera a que todo el contenido de la página se cargue
window.addEventListener('DOMContentLoaded', () => {

    const videoElement = document.getElementById('background-video');

    // Buena práctica: Asegurarse de que el elemento de video existe antes de continuar.
    if (!videoElement) {
        console.error("Error: No se encontró el elemento de video con id 'background-video'.");
        return; // Detiene la ejecución del script si no se encuentra el video.
    }

    // --- LÓGICA PARA LA LISTA DE VIDEOS ---

    // 1. Define tu lista de videos. ¡Asegúrate de que las rutas sean correctas!
    const videoPlaylist = [
        "videos/video-2.mp4",
        "videos/video-3.mp4",
        "videos/video-4.mp4",
        "videos/video-5.mp4",
        "videos/video-6.mp4",
        "videos/video-7.mp4",
    ];

    let currentVideoIndex = 0;

    // 2. Función para cambiar al siguiente video
    function playNextVideo() {
        // Avanza al siguiente video en la lista. El operador % hace que vuelva al inicio.
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        videoElement.src = videoPlaylist[currentVideoIndex];
        videoElement.play();
    }

    // 3. Escucha el evento 'ended' para saber cuándo ha terminado un video
    videoElement.addEventListener('ended', playNextVideo);

    // 4. Inicia la reproducción con el primer video de la lista
    videoElement.src = videoPlaylist[currentVideoIndex];

    // --- LÓGICA PARA EL DESVANECIMIENTO CON SCROLL ---

    window.addEventListener('scroll', () => {
        // Calcula la posición de desplazamiento vertical
        const scrollPosition = window.scrollY;
        const fadeOutPoint = 500; // Ajusta este valor si lo necesitas
        let opacity = 1 - (scrollPosition / fadeOutPoint);

        // Aplica la opacidad, asegurando que no sea menor a 0
        videoElement.style.opacity = Math.max(0, opacity);
    });
});
