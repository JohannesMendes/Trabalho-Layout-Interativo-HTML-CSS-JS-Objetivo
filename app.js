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

// Popular catálogo com 200 tênis
state.items = generateSneakers(200);
render();
