// Búsqueda en tiempo real
document.querySelector('input[type="text"]').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const images = document.querySelectorAll('.grid-item');

    images.forEach(image => {
        const altText = image.querySelector('img').alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});

// Modal para mostrar imagen y descripción
function showDescription(text, imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = imgSrc;
    modalDescription.textContent = text;

    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
}

// Función de "Me gusta"
function likeImage(button) {
    event.stopPropagation();
    const likeCount = button.querySelector('.like-count');
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
}

// Función para guardar imágenes
function saveImage() {
    event.stopPropagation();
    alert('¡Imagen guardada!');
}

// Función para compartir imágenes
function shareImage() {
    event.stopPropagation();
    alert('¡Has compartido esta imagen!');
}

// Inicializar Swiper para el carrusel
var swiper = new Swiper('.swiper-container', {
    loop: true, // Repetir las imágenes
    autoplay: {
        delay: 4000, // Cambiar cada 4 segundos
        disableOnInteraction: false, // Seguir el autoplay después de la interacción
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



