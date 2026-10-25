const MENU_COLUMNS = [
  {
    sections: [
      {
        title: 'Rollos Tradicionales',
        description: 'Todos nuestros rollos llevan al centro aguacate, pepino, zanahoria y Philadelphia. Elige res, pollo, camarón o surimi.',
        items: [
          { name: 'California', description: 'Alga por fuera.', price: '$110' },
          { name: 'Empanizado', description: 'Rollo empanizado por fuera.', price: '$110' },
          { name: 'Philadelphia', description: 'Por fuera, cama de Philadelphia.', price: '$110' },
          { name: 'Avocado', description: 'Envuelto en aguacate por fuera.', price: '$110' },
          { name: 'Banana Roll', description: 'Rollo envuelto en plátano frito.', price: '$110' },
          { name: 'Ajonjolí', description: 'Cubierto de ajonjolí.', price: '$110' },
          { name: 'Kani Roll', description: 'Surimi por fuera.', price: '$110' }
        ]
      },
      {
        title: 'Rollos Especiales',
        items: [
          { name: 'Hamashi', description: 'Envuelto en aguacate, coronado con ensalada y trocitos de camarón empanizado y aderezo.', price: '$170' },
          { name: 'Hamashi Chicken', description: 'Rollo vegetariano, cubierto de aguacate, pollo empanizado y bañado en aderezo.', price: '$160' },
          { name: 'Yeiko', description: 'Envuelto en aguacate, surimi, aderezo y trocitos de camarón empanizado.', price: '$170' },
          { name: 'Zeus', description: 'Envuelto en Philadelphia, coronado con salmón a la plancha y pasta wonton.', price: '$180' },
          { name: 'Ebi Roll', description: 'Envuelto en camarón.', price: '$140' },
          { name: 'Kenay', description: 'Rollo solo arroz crujiente, coronado con queso manchego y atún spicy.', price: '$170' },
          { name: 'Philadelphia Empanizado', description: 'Empanizado y coronado con ensalada kani.', price: '$130' },
          { name: 'Kani Roll Especial', description: 'Empanizado y coronado con ensalada kani.', price: '$170' },
          { name: 'Terramar', description: 'Empanizado, cerdo, carne de res y camarón.', price: '$140' },
          { name: 'Philadelphia Especial', description: 'Philadelphia con aguacate, ajonjolí dulce bañado en salsa de anguila.', price: '$140' }
        ]
      }
    ]
  },
  {
    sections: [
      {
        title: 'Rollos Especiales',
        items: [
          { name: 'Ebi Roll Especial', description: 'Envuelto en camarón, coronado con aderezo especial y trozos de camarón empanizado.', price: '$180' },
          { name: 'Kimo Roll', description: 'Rollo envuelto en aguacate con Philadelphia, aderezo spicy y camarón empanizado al centro.', price: '$150' },
          { name: 'Tampi Roll', description: 'Empanizado, mitad con queso gratinado y mitad ensalada de surimi.', price: '$170' },
          { name: 'Siake Roll', description: 'Envuelto en salmón.', price: '$160' },
          { name: 'Filete de Atún', description: 'Envuelto en atún.', price: '$160' },
          { name: 'Bufecito', description: '2 bocados empanizados, 2 de ajonjolí, 2 de surimi, 2 de aguacate y 2 de Philadelphia.', price: '$160' },
          { name: 'Colimense', description: 'Envuelto en aguacate, coronado con ensalada de surimi, salmón, anguila y un trocito de limón.', price: '$200' },
          { name: 'Carmelita Roll', description: 'Envuelto de atún, salmón y surimi.', price: '$170' },
          { name: '3 Quesos', description: 'Philadelphia, manchego, amarillo y carne a elegir.', price: '$150' },
          { name: 'Manchego', description: 'Empanizado, cubierto con queso gratinado y carne a elegir.', price: '$160' }
        ]
      }
    ]
  },
  {
    sections: [
      {
        title: 'Rollos Especiales',
        items: [
          { name: 'Arcoiris', description: 'Relleno de pepino, y aguacate, forrado de camaron, kani, salmon, atun y masago.', price: '$150' },
          { name: 'Empanizado Especial', description: 'Empanizado por fuera, pulpo, aguacate y ensalada.', price: '$175' },
          { name: 'Tempura Spicy', description: 'Rollo capeado con tempura picante, coronado con ensalada de camarón, salsa de almeja y aderezo chipotle.', price: '$170' },
          { name: 'Explosión', description: 'Rollo de plátano por fuera, al centro ensalada de camarón y pepino, coronado con camarón picante y queso manchego gratinado.', price: '$210' },
          { name: 'Rollo Gruñudo', description: 'Al centro camarón empanizado, pepino y aguacate; coronado con ensalada kani.', price: '$160' },
          { name: 'Avocado Especial', description: 'Envuelto en aguacate y camarón empanizado; al centro pepino, Philadelphia, zanahoria y aguacate.', price: '$150' },
          { name: 'Tempura Especial', description: '4 rollitos de camarón con ensalada kani, capeados en tempura.', price: '$155' },
          { name: 'Banana Especial', description: 'Envuelto en Philadelphia y plátano frito; al centro Philadelphia, zanahoria, aguacate, pepino y carne a elegir.', price: '$150' },
          { name: 'California Especial', description: 'Philadelphia, zanahoria, aguacate y pepino; coronado con aderezo especial, queso manchego horneado y camarón empanizado.', price: '$165' }
        ]
      }
    ]
  },
  {
    sections: [
      {
        title: 'Rollos de Temporada',
        items: [
          { name: 'Vegano Roll', description: 'Al centro zanahoria, pepino y aguacate; coronado de aguacate y cambray, sin alga.', price: '$120' },
          { name: 'Fresa Roll', description: 'Al centro Philadelphia, zanahoria, pepino y aguacate; cubierto de fresa.', price: '$120' },
          { name: 'Mango Roll', description: 'Al centro Philadelphia, zanahoria, pepino, aguacate y carne a elegir; cubierto de mango.', price: '$130' }
        ]
      }
    ]
  },
  {
    sections: [
      {
        title: 'Otras Delicias',
        items: [
          { name: 'Yakisoba', description: 'Zanahoria, calabaza, morrón rojo y pasta. Elige pollo, camarón, res o mixto.', price: 'Pollo $140 · Mixto $150' },
          { name: 'Ensalada de Mariscos', description: 'Pepino, camarón, kani, atún y callo de almeja con aguacate.', price: 'Orden Media $90 · Completa $140' },
          { name: 'Chow Mein', description: 'Cebolla, apio, zanahoria y pasta. Elige pollo, camarón, res o mixto.', price: '$140' },
          { name: 'Ramen Base de Puerco', description: 'Pasta, zanahoria, calabaza, naruto, aguacate, elote amarillo, huevo, cebollín y carne a elegir.', price: '$160' },
          { name: 'Tepa Udon', description: 'Verduras a la plancha con pasta udon y carne a elegir: pollo, camarón, res o mixto.', price: '$170' },
          { name: 'Ramen Base de Puerco y Pollo', description: 'Pasta, zanahoria, calabaza, naruto, aguacate, elote amarillo, huevo, cebollín y carne a elegir.', price: '$160' },
          { name: 'Pollo a la Naranja', description: 'Pollo sobre arroz con pollo a la naranja, ajonjolí y una pizca de cebollín.', price: '$140' },
          { name: 'Verduras Tempura', description: 'Zanahoria, calabaza, morrón, cebolla y carne a elegir.', price: 'Res o pollo $130 · Camarón o mixto $140' },
          { name: 'Ramen Picante Base de Puerco y Pollo', description: 'Pasta, zanahoria, calabaza, naruto, aguacate, elote amarillo, huevo, cebollín y carne a elegir.', price: '$176 · mixto 176' }
        ]
      }
    ]
  }
];

const MENU_ITEMS = MENU_COLUMNS.flatMap(column =>
  column.sections.flatMap(section =>
    section.items.map(item => ({
      ...item,
      category: section.title,
      categoryDescription: section.description || ''
    }))
  )
);

const CATEGORY_TITLES = {
  Todos: 'Menú completo',
  'Rollos Tradicionales': 'Rollos tradicionales',
  'Rollos Especiales': 'Rollos especiales',
  'Rollos de Temporada': 'Rollos de temporada',
  'Otras Delicias': 'Otras delicias'
};

let activeCategory = 'Todos';

function createProductCard(item) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const category = document.createElement('span');
  category.className = 'product-category';
  category.textContent = item.category;

  const title = document.createElement('h2');
  title.className = 'product-title';
  title.textContent = item.name;

  const description = document.createElement('p');
  description.className = 'product-description';
  description.textContent = item.description || item.categoryDescription;

  const footer = document.createElement('div');
  footer.className = 'product-card-footer';

  const price = document.createElement('span');
  price.className = 'product-price';
  price.textContent = item.price;
  footer.appendChild(price);

  card.append(category, title, description, footer);
  return card;
}

function renderMenu() {
  const grid = document.getElementById('products-grid');
  const query = document.getElementById('menu-search').value.trim().toLocaleLowerCase('es');
  const filtered = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const searchableText = `${item.name} ${item.description} ${item.price} ${item.category}`
      .toLocaleLowerCase('es');
    return matchesCategory && searchableText.includes(query);
  });

  document.getElementById('section-heading').textContent = CATEGORY_TITLES[activeCategory];
  document.getElementById('item-counter').textContent =
    `${filtered.length} ${filtered.length === 1 ? 'platillo' : 'platillos'}`;

  if (filtered.length === 0) {
    const emptyState = document.createElement('p');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No encontramos platillos con esa búsqueda.';
    grid.replaceChildren(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach(item => fragment.appendChild(createProductCard(item)));
  grid.replaceChildren(fragment);
}

function setCategory(category) {
  if (!Object.hasOwn(CATEGORY_TITLES, category)) return;

  activeCategory = category;
  document.querySelectorAll('[data-category]').forEach(button => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    if (button.classList.contains('nav-btn')) {
      button.setAttribute('aria-current', isActive ? 'true' : 'false');
    }
  });
  renderMenu();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menu-search').addEventListener('input', renderMenu);

  document.addEventListener('click', event => {
    const control = event.target.closest('[data-category]');
    if (control) {
      event.preventDefault();
      setCategory(control.dataset.category);
    }
  });

  renderMenu();
});
