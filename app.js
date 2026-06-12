// ============================================
// RUTINA REAL CONFIGURADA
// ============================================

const RUTINAS = {
    lunes: {
        titulo: "Lunes - Pierna 🦵",
        emoji: "🦵",
        ejercicios: [
            {
                nombre: "Pierna Sentadilla Smith",
                series: "4",
                repeticiones: "10 - 12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/sentadilla-smith.mp4"
            },
            {
                nombre: "Pierna Leg Press (Prensa)",
                series: "4",
                repeticiones: "12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/leg-press.mp4"
            },
            {
                nombre: "Pierna Leg Extension",
                series: "3",
                repeticiones: "12 - 15",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/leg-extension.mp4"
            },
            {
                nombre: "Glúteo Patada Máquina",
                series: "3",
                repeticiones: "12 c/p",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/patada-maquina.mp4"
            },
            {
                nombre: "Glúteo Máquina (Aductor/Abductor)",
                series: "4",
                repeticiones: "15",
                descansoSeries: "60 seg",
                descansoEjercicio: "Terminaste 💕",
                videoSrc: "videos/aductor-abductor.mp4"
            }
        ]
    },
    martes: {
        titulo: "Martes - Espalda, Bíceps y Antebrazo 🔙💪",
        emoji: "🔙",
        ejercicios: [
            {
                nombre: "Espalda Jalones Frontales",
                series: "4",
                repeticiones: "10 - 12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/jalones-frontales.mp4"
            },
            {
                nombre: "Espalda Remo Sentado Máquina",
                series: "4",
                repeticiones: "12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/remo-sentado.mp4"
            },
            {
                nombre: "Espalda Jalones Cerrado o Alto",
                series: "3",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/jalones-cerrado.mp4"
            },
            {
                nombre: "Espalda Remo a una Mano Mancuerna",
                series: "3",
                repeticiones: "10 c/l",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/remo-mancuerna.mp4"
            },
            {
                nombre: "Bíceps Curl con Mancuerna",
                series: "3",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "Terminaste 💕",
                videoSrc: "videos/curl-mancuerna.mp4"
            }
        ]
    },
    miercoles: {
        titulo: "Miércoles - Abdomen, HIIT y Cardio 🔥",
        emoji: "🔥",
        ejercicios: [
            {
                nombre: "Abdomen Elevación Piernas al Pecho (Baja)",
                series: "4",
                repeticiones: "15 - 20",
                descansoSeries: "45 seg",
                descansoEjercicio: "90 segundos",
                videoSrc: "videos/elevacion-piernas.mp4"
            },
            {
                nombre: "Abdomen Banco Elevación Tronco (Alta)",
                series: "4",
                repeticiones: "15 - 20",
                descansoSeries: "45 seg",
                descansoEjercicio: "90 segundos",
                videoSrc: "videos/elevacion-tronco.mp4"
            },
            {
                nombre: "Abdomen Giros Sentados (Oblicuos)",
                series: "3",
                repeticiones: "20 c/l",
                descansoSeries: "45 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/giros-oblicuos.mp4"
            },
            {
                nombre: "Circuito HIIT Elíptica/Spinning",
                series: "1",
                repeticiones: "15 min (30s máx / 1min suave)",
                descansoSeries: "N/A",
                descansoEjercicio: "3 minutos",
                videoSrc: "videos/hiit-cardio.mp4"
            },
            {
                nombre: "Caminadora Cardio Moderado",
                series: "1",
                repeticiones: "20 min constantes",
                descansoSeries: "N/A",
                descansoEjercicio: "Terminaste 💕",
                videoSrc: "videos/caminadora.mp4"
            }
        ]
    },
    jueves: {
        titulo: "Jueves - Pierna (Femoral, Glúteo y Pantorrilla) 🍑",
        emoji: "🍑",
        ejercicios: [
            {
                nombre: "Peso Muerto con Mancuernas (Glúteo)",
                series: "4",
                repeticiones: "10 - 12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "PesoMuertoMancuernas.mp4"
            },
            {
                nombre: "Pierna Leg Curl (Femoral Tumbado)",
                series: "4",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "CurlFemoral.mp4"
            },
            {
                nombre: "Glúteo Extensión Polea o Invertido",
                series: "3",
                repeticiones: "12 c/p",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "GluteoPolea.mp4"
            },
            {
                nombre: "Pierna Tijera (Zancadas)",
                series: "3",
                repeticiones: "10 - 12 pasos c/p",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "Zancadas.mp4"
            },
            {
                nombre: "Pierna Pantorrilla Sentado",
                series: "4",
                repeticiones: "15",
                descansoSeries: "45 seg",
                descansoEjercicio: "Terminaste 💕",
                videoSrc: "Sentada.mp4"
            }
        ]
    },
    viernes: {
        titulo: "Viernes - Pecho, Hombro y Tríceps 💪",
        emoji: "💪",
        ejercicios: [
            {
                nombre: "Pecho Deck (Mariposa Máquina)",
                series: "4",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/deck-mariposa.mp4"
            },
            {
                nombre: "Pecho Press Banco Inclinado",
                series: "3",
                repeticiones: "10 - 12",
                descansoSeries: "90 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/press-inclinado.mp4"
            },
            {
                nombre: "Hombro Press en Máquina o Mancuernas",
                series: "4",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/press-hombro.mp4"
            },
            {
                nombre: "Hombro Laterales Mancuernas (Vuelos)",
                series: "3",
                repeticiones: "12 - 15",
                descansoSeries: "60 seg",
                descansoEjercicio: "2 minutos",
                videoSrc: "videos/vuelos-laterales.mp4"
            },
            {
                nombre: "Tríceps Extensión Polea Soga/Barra",
                series: "4",
                repeticiones: "12",
                descansoSeries: "60 seg",
                descansoEjercicio: "Terminaste 💕",
                videoSrc: "videos/extension-triceps.mp4"
            }
        ]
    }
};

// Mensajes personalizados por día (celebración)
const MENSAJES_FINALES = {
    lunes: "¡Piernas de acero, mi amor! 🦵💕 Eres increíble",
    martes: "¡Espalda poderosa y bíceps fuertes! 💪🔙 Te amo",
    miercoles: "¡Abdomen de guerrera y cardio completado! 🔥👑 Orgulloso de ti",
    jueves: "¡Glúteo y femoral dominados! 🍑💕 Sigue brillando",
    viernes: "¡Pecho, hombro y tríceps listos! 💪💖 Fin de semana con fuerza"
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let diaActual = null;
let ejerciciosCompletados = new Set();
let animacionConfetti = null;
let mensajesRemotos = {};
let videosActivos = {};

// ============================================
// NAVEGACIÓN
// ============================================

function abrirDia(dia) {
    diaActual = dia;
    ejerciciosCompletados.clear();
    videosActivos = {};
    
    const rutina = RUTINAS[dia];
    document.getElementById('titulo-rutina').textContent = rutina.titulo;
    
    generarEjercicios(rutina.ejercicios);
    actualizarBotonTerminar();
    
    document.getElementById('pagina-principal').classList.remove('activa');
    document.getElementById('pagina-rutina').classList.add('activa');
    
    const scrollContainer = document.getElementById('rutina-scroll-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;
}

function volverPrincipal() {
    pausarTodosLosVideos();
    
    document.getElementById('pagina-rutina').classList.remove('activa');
    document.getElementById('celebracion').classList.add('oculto');
    document.getElementById('pagina-principal').classList.add('activa');
    
    if (animacionConfetti) {
        cancelAnimationFrame(animacionConfetti);
        animacionConfetti = null;
    }
    
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    diaActual = null;
    videosActivos = {};
}

// ============================================
// GENERAR EJERCICIOS - CORREGIDO PARA VIDEOS LOCALES
// ============================================

function generarEjercicios(ejercicios) {
    const contenedor = document.getElementById('rutina-contenedor');
    contenedor.innerHTML = '';
    
    ejercicios.forEach((ej, index) => {
        const card = document.createElement('div');
        card.className = 'ejercicio-card';
        card.dataset.index = index;
        
        // Crear el HTML base del ejercicio
        const inner = document.createElement('div');
        inner.className = 'ejercicio-inner';
        
        inner.innerHTML = `
            <div class="ejercicio-header">
                <div class="numero-ejercicio">Ejercicio ${index + 1} de ${ejercicios.length}</div>
                <div class="nombre-ejercicio">${ej.nombre}</div>
            </div>
            
            <div class="ejercicio-detalles">
                <div class="detalle">
                    <div class="detalle-label">Repeticiones</div>
                    <div class="detalle-valor">${ej.repeticiones}</div>
                </div>
                <div class="detalle">
                    <div class="detalle-label">Series</div>
                    <div class="detalle-valor">${ej.series}</div>
                </div>
                <div class="detalle">
                    <div class="detalle-label">Descanso</div>
                    <div class="detalle-valor">${ej.descansoSeries}</div>
                </div>
            </div>
            
            <div class="video-container video-pausado" id="video-container-${index}">
                <div class="video-placeholder" id="placeholder-${index}">
                    <span>▶️</span>
                    <p>Toca para reproducir</p>
                </div>
                <div class="play-overlay" id="play-overlay-${index}">▶</div>
                <div class="pause-hint" id="pause-hint-${index}">⏸</div>
            </div>
            
            <div class="btn-check-container">
                <button class="btn-check" id="check-${index}" onclick="toggleCheck(${index})">
                    ✓ Marcar como hecho
                </button>
            </div>
            
            <div class="descanso-ejercicios">
                <div class="descanso-label">⏱️ Descansa antes del siguiente ejercicio</div>
                <div class="descanso-tiempo">${ej.descansoEjercicio}</div>
            </div>
        `;
        
        card.appendChild(inner);
        contenedor.appendChild(card);
        
        // 🔑 AHORA creamos el video con JavaScript y lo agregamos al DOM
        if (ej.videoSrc) {
            const videoContainer = document.getElementById(`video-container-${index}`);
            
            const video = document.createElement('video');
            video.id = `video-${index}`;
            video.src = ej.videoSrc;
            video.preload = 'metadata';
            video.playsInline = true;
            video.muted = true;
            video.loop = true;
            
            // Estilos para que se vea bien
            video.style.position = 'absolute';
            video.style.top = '0';
            video.style.left = '0';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'contain';
            video.style.backgroundColor = '#000';
            
            // Insertar el video ANTES del placeholder (detrás visualmente)
            videoContainer.insertBefore(video, videoContainer.firstChild);
            
            // Agregar el evento click al contenedor
            videoContainer.addEventListener('click', function() {
                toggleVideo(index);
            });
        }
    });
    
    inicializarObservadorVideos();
}

// ============================================
// CONTROL DE VIDEO - CORREGIDO
// ============================================

function toggleVideo(index) {
    const video = document.getElementById(`video-${index}`);
    const container = document.getElementById(`video-container-${index}`);
    const placeholder = document.getElementById(`placeholder-${index}`);
    
    if (!video || !container) {
        console.log('No se encontró el video o el contenedor para el índice:', index);
        return;
    }
    
    console.log('Video encontrado:', video.src);
    console.log('Estado actual - paused:', video.paused);
    
    if (video.paused) {
        // REPRODUCIR
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video reproduciendo');
                container.classList.remove('video-pausado');
                container.classList.add('video-reproduciendo');
                if (placeholder) placeholder.classList.add('oculto');
                videosActivos[index] = video;
            }).catch(error => {
                console.error('Error al reproducir:', error);
            });
        }
    } else {
        // PAUSAR
        video.pause();
        console.log('Video pausado');
        container.classList.remove('video-reproduciendo');
        container.classList.add('video-pausado');
        
        // Mostrar hint de pausa brevemente
        container.classList.add('mostrando-pausa');
        setTimeout(() => {
            container.classList.remove('mostrando-pausa');
        }, 800);
    }
}

function pausarYReiniciarVideo(index) {
    const video = document.getElementById(`video-${index}`);
    const container = document.getElementById(`video-container-${index}`);
    const placeholder = document.getElementById(`placeholder-${index}`);
    
    if (!video) return;
    
    video.pause();
    video.currentTime = 0;
    
    if (container) {
        container.classList.remove('video-reproduciendo');
        container.classList.add('video-pausado');
    }
    
    if (placeholder) {
        placeholder.classList.remove('oculto');
    }
    
    delete videosActivos[index];
}

function pausarTodosLosVideos() {
    Object.keys(videosActivos).forEach(index => {
        pausarYReiniciarVideo(index);
    });
    videosActivos = {};
}

function inicializarObservadorVideos() {
    const container = document.getElementById('rutina-scroll-container');
    if (!container) return;
    
    const videos = container.querySelectorAll('video');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const index = video.id.replace('video-', '');
            
            if (!entry.isIntersecting) {
                if (!video.paused) {
                    pausarYReiniciarVideo(index);
                }
            }
        });
    }, {
        root: container,
        threshold: 0.3
    });
    
    videos.forEach(video => observer.observe(video));
}

// ============================================
// CHECK DE EJERCICIOS
// ============================================

function toggleCheck(index) {
    const btn = document.getElementById(`check-${index}`);
    
    if (ejerciciosCompletados.has(index)) {
        ejerciciosCompletados.delete(index);
        btn.classList.remove('completado');
        btn.innerHTML = '✓ Marcar como hecho';
    } else {
        ejerciciosCompletados.add(index);
        btn.classList.add('completado');
        btn.innerHTML = '✓ ¡Completado!';
        
        btn.style.transform = 'scale(1.05)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
    }
    
    actualizarBotonTerminar();
}

function actualizarBotonTerminar() {
    const rutina = RUTINAS[diaActual];
    const btn = document.getElementById('btn-terminar');
    const totalEjercicios = rutina.ejercicios.length;
    const completados = ejerciciosCompletados.size;
    
    if (completados === totalEjercicios && totalEjercicios > 0) {
        btn.disabled = false;
        btn.innerHTML = `✅ ¡Terminar Rutina!`;
        btn.style.background = 'linear-gradient(135deg, #C1E1C1, #B0E0E6)';
        btn.style.color = '#2d5a2d';
    } else {
        btn.disabled = true;
        btn.innerHTML = `✅ Terminar Rutina (${completados}/${totalEjercicios})`;
        btn.style.background = '';
        btn.style.color = '';
    }
}

// ============================================
// TERMINAR RUTINA Y CELEBRACIÓN
// ============================================

function terminarRutina() {
    pausarTodosLosVideos();
    
    const mensajeDefault = MENSAJES_FINALES[diaActual] || "¡Lo lograste, mi amor! 💕";
    const mensajeRemoto = mensajesRemotos[diaActual] || "";
    const mensajeRemotoEl = document.getElementById('mensaje-remoto-celebracion');
    
    if (mensajeRemoto) {
        mensajeRemotoEl.innerHTML = `"${mensajeRemoto}"`;
        mensajeRemotoEl.style.display = 'block';
    } else {
        mensajeRemotoEl.innerHTML = `"${mensajeDefault}"`;
        mensajeRemotoEl.style.display = 'block';
    }
    
    document.getElementById('celebracion').classList.remove('oculto');
    iniciarConfetti();
}

// ============================================
// CONFETTI
// ============================================

function iniciarConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colores = ['#F4C2C2', '#E8A0BF', '#C1E1C1', '#B0E0E6', '#FFDAB9', '#E6E6FA', '#D8BFD8', '#FADADD', '#FFB6C1', '#98FB98'];
    const particulas = [];
    const cantidad = 180;
    
    for (let i = 0; i < cantidad; i++) {
        particulas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 4,
            color: colores[Math.floor(Math.random() * colores.length)],
            velocidadY: Math.random() * 3 + 1.5,
            velocidadX: Math.random() * 3 - 1.5,
            rotacion: Math.random() * 360,
            rotacionVel: Math.random() * 6 - 3,
            forma: Math.random() > 0.5 ? 'rect' : 'circ'
        });
    }
    
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particulas.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotacion * Math.PI) / 180);
            
            ctx.fillStyle = p.color;
            
            if (p.forma === 'rect') {
                ctx.beginPath();
                ctx.roundRect(-p.size/2, -p.size/3, p.size, p.size/1.5, 3);
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size/2.5, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();
            
            p.y += p.velocidadY;
            p.x += p.velocidadX;
            p.rotacion += p.rotacionVel;
            
            if (p.y > canvas.height + 20) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
        
        animacionConfetti = requestAnimationFrame(animar);
    }
    
    animar();
}

// ============================================
// MAGNETISMO + BOTÓN STICKY
// ============================================

function inicializarMagnetismo() {
    const container = document.getElementById('rutina-scroll-container');
    const footer = document.getElementById('rutina-footer');
    if (!container || !footer) return;
    
    let scrollTimeout;
    let isTouching = false;
    
    container.addEventListener('touchstart', () => {
        isTouching = true;
        clearTimeout(scrollTimeout);
    }, { passive: true });
    
    container.addEventListener('touchend', () => {
        isTouching = false;
        scrollTimeout = setTimeout(() => {
            intentarAjustarAlCentro(container);
            actualizarStickyBoton(container, footer);
        }, 150);
    }, { passive: true });
    
    container.addEventListener('scroll', () => {
        actualizarStickyBoton(container, footer);
        
        if (isTouching) return;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            intentarAjustarAlCentro(container);
        }, 200);
    }, { passive: true });
}

function actualizarStickyBoton(container, footer) {
    const scrollRestante = container.scrollHeight - container.scrollTop - container.clientHeight;
    const umbral = 350;
    
    if (scrollRestante < umbral) {
        if (!footer.classList.contains('sticky')) {
            footer.classList.add('sticky');
        }
    } else {
        if (footer.classList.contains('sticky')) {
            footer.classList.remove('sticky');
        }
    }
}

function intentarAjustarAlCentro(container) {
    const cards = container.querySelectorAll('.ejercicio-card');
    if (cards.length === 0) return;
    
    const scrollRestante = container.scrollHeight - container.scrollTop - container.clientHeight;
    const estaCercaDelFinal = scrollRestante < 250;
    
    if (estaCercaDelFinal) {
        return;
    }
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;
    
    const zonaCentralMitad = containerRect.height * 0.20;
    const zonaSuperior = containerCenter - zonaCentralMitad;
    const zonaInferior = containerCenter + zonaCentralMitad;
    
    let mejorCard = null;
    let mejorPuntuacion = -1;
    
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        
        if (cardCenter >= zonaSuperior && cardCenter <= zonaInferior) {
            const distanciaAlCentro = Math.abs(containerCenter - cardCenter);
            const puntuacion = 1 - (distanciaAlCentro / zonaCentralMitad);
            
            if (puntuacion > mejorPuntuacion) {
                mejorPuntuacion = puntuacion;
                mejorCard = card;
            }
        }
    });
    
    if (mejorCard && mejorPuntuacion > 0.3) {
        const targetScroll = mejorCard.offsetTop - (container.clientHeight - mejorCard.offsetHeight) / 2;
        
        container.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: 'smooth'
        });
    }
}

// ============================================
// MENSAJE REMOTO (Google Sheets)
// ============================================

async function cargarMensajesRemotos() {
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRreWm8sxUjQyFM2-LjLe-b8ij9AV4jROh7KVeB7m9X2TeBU7VfsngKtw5t9ihBX04PZbk_DHJ5Atj/pub?gid=0&single=true&output=csv';
    
    const mensajesDefault = {
        lunes: "¡Piernas de acero, mi amor! 🦵💕 Eres increíble",
        martes: "¡Espalda poderosa y bíceps fuertes! 💪🔙 Te amo",
        miercoles: "¡Abdomen de guerrera y cardio completado! 🔥👑 Orgulloso de ti",
        jueves: "¡Glúteo y femoral dominados! 🍑💕 Sigue brillando",
        viernes: "¡Pecho, hombro y tríceps listos! 💪💖 Fin de semana con fuerza"
    };
    
    try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        const lineas = csvText.trim().split('\n').slice(1);
        
        mensajesRemotos = {};
        
        lineas.forEach(linea => {
            const partes = linea.split(',');
            const dia = partes[0].replace(/"/g, '').trim().toLowerCase();
            const mensaje = partes.slice(1).join(',').replace(/"/g, '').trim();
            if (dia && mensaje) {
                mensajesRemotos[dia] = mensaje;
            }
        });
        
        if (Object.keys(mensajesRemotos).length === 0) {
            mensajesRemotos = { ...mensajesDefault };
        }
        
    } catch (error) {
        console.log('Error cargando mensajes remotos, usando locales:', error);
        mensajesRemotos = { ...mensajesDefault };
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    cargarMensajesRemotos();
    inicializarMagnetismo();
    
    window.addEventListener('resize', () => {
        const canvas = document.getElementById('confetti-canvas');
        if (canvas && animacionConfetti) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });
});