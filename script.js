const products = [
  {
    name: 'ProPower Rack',
    price: 2499,
    category: 'men',
    badge: 'Men',
    emoji: '🏋️',
    description: 'Heavy-duty power rack for squats, presses, and serious strength training.'
  },
  {
    name: 'CoreBurn Dumbbell Set',
    price: 899,
    category: 'women',
    badge: 'Women',
    emoji: '🏆',
    description: 'Compact dumbbells designed for tone, control, and functional workouts.'
  },
  {
    name: 'Endura Treadmill',
    price: 3299,
    category: 'women',
    badge: 'Women',
    emoji: '🏃',
    description: 'Smooth cardio machine built for low-impact endurance and weight loss routines.'
  },
  {
    name: 'FlexBench Pro',
    price: 1899,
    category: 'unisex',
    badge: 'Unisex',
    emoji: '🧘',
    description: 'Adjustable bench for bench presses, core work, and full-body conditioning.'
  },
  {
    name: 'IronGrip Kettlebell',
    price: 649,
    category: 'men',
    badge: 'Men',
    emoji: '💪',
    description: 'High-performance kettlebell set for strength, stability, and explosive power.'
  },
  {
    name: 'FlexCycle Bike',
    price: 2199,
    category: 'women',
    badge: 'Women',
    emoji: '🚴',
    description: 'Gentle, consistent cardio training for lean muscle and stamina building.'
  },
  {
    name: 'Storm Cable Machine',
    price: 4599,
    category: 'unisex',
    badge: 'Unisex',
    emoji: '🛠️',
    description: 'Multi-function cable trainer for pull-ups, rows, curls, and total-body workouts.'
  },
  {
    name: 'Battle Rope Kit',
    price: 1199,
    category: 'men',
    badge: 'Men',
    emoji: '🔥',
    description: 'Explosive conditioning gear that boosts endurance, grip, and shoulder strength.'
  }
];

const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function formatPrice(value) {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    maximumFractionDigits: 0
  }).format(value);
}

function renderProducts(filter = 'all') {
  const visibleProducts = filter === 'all'
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-visual">
        <span class="product-emoji">${product.emoji}</span>
      </div>
      <div class="product-info">
        <span class="product-badge ${product.category}">${product.badge}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="meta-row">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="buy-btn">Add to cart</button>
        </div>
      </div>
    </article>
  `).join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
