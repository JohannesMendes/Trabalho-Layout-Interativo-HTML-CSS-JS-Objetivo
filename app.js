// Estado global
const state = {
  items: [],
  favorites: new Set(),
  filters: { search:'', brand:'', size:'', maxPrice:'', sort:'', onlyFav:false }
};

// Gerador de tênis
function generateSneakers(count = 200) {
  const brands = ["Nike", "Adidas", "Puma", "New Balance", "Asics", "Vans", "Converse"];
  const models = ["Air Max", "Ultraboost", "RS-X", "574", "Gel Nimbus", "Old Skool", "Chuck 70", "Blazer Mid"];
  const items = [];

  for (let i = 1; i <= count; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const size = 37 + Math.floor(Math.random() * 7); // 37–43
    const price = 350 + Math.floor(Math.random() * 500); // R$350–850
    const id = `p-${i.toString().padStart(3, "0")}`;
    const photo = `https://picsum.photos/seed/${brand}-${model}-${i}/400/300`;

    items.push({ id, name: `${brand} ${model}`, brand, size, price, photo });
  }
  return items;
}

// Filtragem
function getVisibleItems() {
  let items = [...state.items];
  const f = state.filters;

  if (f.search) {
    const q = f.search.toLowerCase();
    items = items.filter(it =>
      it.name.toLowerCase().includes(q) || it.brand.toLowerCase().includes(q)
    );
  }
  if (f.brand) items = items.filter(it => it.brand === f.brand);
  if (f.size) items = items.filter(it => String(it.size) === String(f.size));
  if (f.maxPrice) items = items.filter(it => it.price <= Number(f.maxPrice));
  if (f.onlyFav) items = items.filter(it => state.favorites.has(it.id));

  switch (f.sort) {
    case 'price-asc': items.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': items.sort((a,b)=>b.price-a.price); break;
    case 'name-asc': items.sort((a,b)=>a.name.localeCompare(b.name)); break;
    case 'name-desc': items.sort((a,b)=>b.name.localeCompare(a.name)); break;
  }
  return items;
}

// Renderização
function render() {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('emptyState');
  const visible = getVisibleItems();

  grid.innerHTML = '';
  empty.hidden = visible.length > 0;

  visible.forEach(it => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-media"><img src="${it.photo}" alt="${it.name}" /></div>
      <div class="card-body">
        <div>
          <h3>${it.name}</h3>
          <p>${it.brand} • Tam. ${it.size}</p>
          <p class="price">R$ ${it.price.toFixed(2)}</p>
        </div>
        <button class="fav-btn ${state.favorites.has(it.id) ? 'active' : ''}" data-id="${it.id}">♡</button>
      </div>
    `;
    card.querySelector('.fav-btn').addEventListener('click', e => {
      const id = e.currentTarget.dataset.id;
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
        e.currentTarget.classList.remove('active');
      } else {
        state.favorites.add(id);
        e.currentTarget.classList.add('active');
      }
      updateStats();
    });
    grid.appendChild(card);
  });

  updateStats();
}

function updateStats() {
  document.getElementById('visibleCount').textContent = getVisibleItems().length;
  document.getElementById('favCount').textContent = state.favorites.size;
}

// Eventos de filtros
document.getElementById('searchInput').addEventListener('keyup', e => {
  state.filters.search = e.target.value.trim();
  render();
});
document.getElementById('brandSelect').addEventListener('change', e => {
  state.filters.brand = e.target.value;
  render();
});
document.getElementById('sizeSelect').addEventListener('change', e => {
  state.filters.size = e.target.value;
  render();
});
document.getElementById('maxPriceInput').addEventListener('change', e => {
  state.filters.maxPrice = e.target.value;
  render();
});
document.getElementById('sortSelect').addEventListener('change', e => {
  state.filters.sort = e.target.value;
  render();
});
document.getElementById('onlyFavInput').addEventListener('change', e => {
  state.filters.onlyFav = e.target.checked;
  render();
});

// Inicialização automática
window.addEventListener('DOMContentLoaded', () => {
  state.items = generateSneakers(200);
  render();
});
