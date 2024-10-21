let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    const items = document.querySelectorAll('.gallery-item');
    const totalImages = items.length;
    
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    items[currentIndex].classList.add('active');
}

// Inicializar la galería mostrando la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    if (items.length > 0) {
        items[currentIndex].classList.add('active');
    }
});

// AUTOPLAY
let autoplayInterval = null;

function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {
        navigate(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
// document.querySelectorAll('.nav-button').forEach(button => {
//     button.addEventListener('click', stopAutoplay);
// });


//  ACÁ VA SLIDER DE MARCAS
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// locutores scroll
const rootLocutores = document.documentElement;
const locutoresElementsDisplayed = getComputedStyle(rootLocutores).getPropertyValue("--locutores-elements-displayed");
const marqueeContentLocutores = document.querySelector("div.marquee-content-locutores");

rootLocutores.style.setProperty("--locutores-elements", marqueeContentLocutores.children.length);

for(let i=0; i<locutoresElementsDisplayed; i++) {
    marqueeContentLocutores.appendChild(marqueeContentLocutores.children[i].cloneNode(true));
}

