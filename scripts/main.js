// scripts/main.js

// ============================================
// RECURSO JS 1: Intercambio de imágenes
// ============================================
function toggle(img, u1, u2) {
    if (img.src.includes(u1.split('?')[0].split('/').pop().split('-')[0])) {
        img.src = u2;
    } else {
        img.src = u1;
    }
}

// ============================================
// RECURSO JS 2: Campo de texto interactivo
// ============================================
function update() {
    const i = document.getElementById('city').value.trim();
    const d = document.getElementById('display');
    
    if (!i) {
        d.innerHTML = '⚠️ Escribe una ciudad';
        d.style.color = '#d32f2f';
        return;
    }
    
    const c = i.toLowerCase();
    let m;
    
    if (c.includes('aten')) {
        m = `🏛️ ¡${i}! No olvides la Acrópolis`;
    } else if (c.includes('santorin')) {
        m = `🌅 ¡${i}! Mejores puestas de sol`;
    } else if (c.includes('mykonos')) {
        m = `🎉 ¡${i}! Vida nocturna increíble`;
    } else if (c.includes('creta')) {
        m = `🏖️ ¡${i}! Isla más grande`;
    } else if (c.includes('rodas')) {
        m = `🏰 ¡${i}! Casco medieval`;
    } else {
        m = `✈️ ¡${i} será inolvidable!`;
    }
    
    d.innerHTML = m;
    d.style.color = '#1976d2';
}

function clear() {
    document.getElementById('city').value = '';
    document.getElementById('display').innerHTML = '';
}

// Permitir presionar Enter en el input
document.getElementById('city').addEventListener('keypress', e => {
    if (e.key === 'Enter') update();
});

// ============================================
// RECURSO JS 3: Barco animado interactivo
// ============================================
const boat = document.querySelector('.boat');

// Reiniciar animación al hacer clic
boat.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => this.style.animation = 'sail 15s linear infinite', 10);
});

// Pausar animación al pasar el mouse
boat.addEventListener('mouseenter', () => boat.style.animationPlayState = 'paused');

// Reanudar animación al quitar el mouse
boat.addEventListener('mouseleave', () => boat.style.animationPlayState = 'running');

// ============================================
// EXTRA: Smooth scroll para navegación
// ============================================
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
