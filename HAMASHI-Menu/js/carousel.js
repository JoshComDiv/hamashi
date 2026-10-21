document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  if (!app) {
    return;
  }

  const slides = [
    {
      tag: 'Especial del día',
      title: 'Sushi clásico',
      description: 'Fresco, equilibrado y perfecto para comenzar con sabores tradicionales japoneses.'
    },
    {
      tag: 'Premium',
      title: 'Rolls premium',
      description: 'Combinación de sabores suaves, mariscos frescos y un toque elegante para cada ocasión.'
    },
    {
      tag: 'Cocción',
      title: 'Tempura',
      description: 'Crujiente por fuera y delicado por dentro, ideal para acompañar con salsa y limón.'
    },
    {
      tag: 'Snack',
      title: 'Onigiri',
      description: 'Bolitas de arroz rellenas con ingredientes sabrosos y muy fáciles de disfrutar.'
    }
  ];

  let currentIndex = 0;

  app.innerHTML = `
    <h1>Hamashi Menu</h1>
    <p>Un menú visual para explorar las opciones más populares de la casa.</p>

    <div class="carousel" aria-label="Carrusel de platillos">
      <div class="carousel-viewport">
        <div class="carousel-track">
          ${slides
            .map(
              (slide) => `
                <article class="carousel-slide">
                  <div>
                    <span class="slide-badge">${slide.tag}</span>
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-description">${slide.description}</p>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>

      <div class="carousel-controls">
        <button class="carousel-btn prev" type="button" aria-label="Anterior">&#10094;</button>
        <div class="carousel-dots">
          ${slides
            .map(
              (_, index) =>
                `<button class="dot ${index === currentIndex ? 'active' : ''}" data-index="${index}" type="button" aria-label="Ir al slide ${index + 1}"></button>`
            )
            .join('')}
        </div>
        <button class="carousel-btn next" type="button" aria-label="Siguiente">&#10095;</button>
      </div>
    </div>
  `;

  const track = app.querySelector('.carousel-track');
  const dots = [...app.querySelectorAll('.dot')];
  const prevBtn = app.querySelector('.prev');
  const nextBtn = app.querySelector('.next');

  function renderCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot) => {
      const isActive = Number(dot.dataset.index) === currentIndex;
      dot.classList.toggle('active', isActive);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    renderCarousel();
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => goToSlide(Number(dot.dataset.index)));
  });

  renderCarousel();
});
