const grid = document.getElementById('grid');
const visibleCount = document.getElementById('visibleCount');

// Lista de modelos para simular dados
const modelos = ['Air Max', 'Old Skool', 'Ultraboost', 'Forum Low', 'RS-X', 'Gel-Nimbus', 'Chuck Taylor'];
const marcas = ['Nike', 'Vans', 'Adidas', 'Puma', 'Asics', 'Converse'];

// 1. Gerar dados de exemplo
let produtos = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  nome: `${marcas[i % marcas.length]} ${modelos[i % modelos.length]}`,
  marca: marcas[i % marcas.length],
  preco: Math.floor(Math.random() * 600) + 200,
  tamanho: 37 + (i % 5),
  // A URL abaixo busca fotos reais de SNEAKERS (tênis)
  imagem: `https://loremflickr.com/400/400/sneaker,shoes?lock=${i}`
}));

// 2. Função para renderizar os cards
function renderizar(itens) {
  grid.innerHTML = itens.map(p => `
    <div class="card">
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="card-info">
        <h3>${p.nome}</h3>
        <p>Tam: ${p.tamanho} • R$ ${p.preco.toFixed(2)}</p>
      </div>
    </div>
  `).join('');
  visibleCount.innerText = itens.length;
}

// Inicializar
renderizar(produtos);

// Lógica básica de filtro (Exemplo)
document.getElementById('filtersForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const busca = document.getElementById('searchInput').value.toLowerCase();
  
  const filtrados = produtos.filter(p => 
    p.nome.toLowerCase().includes(busca)
  );
  
  renderizar(filtrados);
});
