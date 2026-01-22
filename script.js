// Comentario: Lógica básica para la interactividad y funciones de accesibilidad.

// Función para simular la reproducción de audio (requiere archivos de audio reales).
function reproducirAudio(src) {
    // Comentario: Uso de API de audio para proporcionar retroalimentación auditiva.
    const audio = new Audio(src);
    audio.play();
}

// Lógica para cambiar de actividad (simulación).
function siguienteActividad() {
    // Comentario: Lógica simple para mover al usuario a la siguiente sección.
    alert("Pasando a la siguiente actividad...");
    // Aquí iría el código para cargar nuevos datos (imagen, audio, nombre del color, etc.)
}

// Manejador del botón de inicio.
document.getElementById('start-btn').addEventListener('click', function() {
    // Comentario: Oculta la sección de bienvenida y muestra la lección.
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('leccion-1').style.display = 'block';
    // Mueve el foco a la nueva sección para los usuarios de teclado/lector de pantalla.
    document.getElementById('imagen-color').focus(); 
});

// Manejador del botón de configuración para cambiar el tamaño de la fuente.
document.getElementById('config-btn').addEventListener('click', function() {
    // Comentario: Una función de accesibilidad simple (ej. alternar fuente grande).
    document.body.classList.toggle('large-font');
    alert("Tamaño de fuente cambiado.");
});

// Comentario: Lógica adicional de JavaScript para navegación con teclado y lectura de pantalla (requiere implementación más compleja con ARIA).
// Por ejemplo, manejar eventos keydown para moverse entre botones y elementos interactivos.
