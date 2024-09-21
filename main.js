onload = () => {
        // Remover la clase "container" del body al cargar la página
        document.body.classList.remove("container");
    
        var audio = document.getElementById("background-audio");
    
        // Intentar reproducir el audio automáticamente
        audio.play().catch(() => {
            console.log("Reproducción automática bloqueada. Esperando interacción del usuario.");
    
            // Agregar evento de clic para desmutear y reproducir el audio cuando el usuario haga clic
            window.addEventListener('click', function() {
                audio.muted = false; // Desactivar silencio
                audio.play(); // Reproducir el audio
            });
        });
    };    