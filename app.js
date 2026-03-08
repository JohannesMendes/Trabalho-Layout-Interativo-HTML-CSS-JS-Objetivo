const produtos = [
    // --- NIKE ---
    { id: 1, nome: "Air Max Pulse", marca: "Nike", preco: 950, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" },
    { id: 2, nome: "Dunk Low Panda", marca: "Nike", preco: 1100, img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600" },
    { id: 3, nome: "Air Force 1", marca: "Nike", preco: 799, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600" },
    { id: 4, nome: "Air Max 90", marca: "Nike", preco: 850, img: "https://images.unsplash.com/photo-1580906853203-f493cea9ff28?q=80&w=600" },
    { id: 5, nome: "Pegasus 40", marca: "Nike", preco: 750, img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=600" },
    { id: 6, nome: "SB Dunk High", marca: "Nike", preco: 1200, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600" },
    { id: 7, nome: "VaporMax Plus", marca: "Nike", preco: 1400, img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=600" },
    { id: 8, nome: "Cortez Classic", marca: "Nike", preco: 550, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600" },
    { id: 9, nome: "Blazer Mid 77", marca: "Nike", preco: 699, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: 10, nome: "Air Max 270", marca: "Nike", preco: 999, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600" },

    // --- ADIDAS ---
    { id: 11, nome: "Forum Low", marca: "Adidas", preco: 699, img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600" },
    { id: 12, nome: "Ultraboost Light", marca: "Adidas", preco: 1200, img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600" },
    { id: 13, nome: "Samba OG", marca: "Adidas", preco: 750, img: "https://images.unsplash.com/photo-1678122393080-323e16885375?q=80&w=600" },
    { id: 14, nome: "Gazelle Indoor", marca: "Adidas", preco: 650, img: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=600" },
    { id: 15, nome: "NMD R1", marca: "Adidas", preco: 899, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600" },
    { id: 16, nome: "Superstar Classic", marca: "Adidas", preco: 599, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600" },
    { id: 17, nome: "Stan Smith", marca: "Adidas", preco: 550, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600" },
    { id: 18, nome: "Campus 00s", marca: "Adidas", preco: 700, img: "https://images.unsplash.com/photo-1600181516264-3ea807ff4499?q=80&w=600" },
    { id: 19, nome: "Ozweego", marca: "Adidas", preco: 800, img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=600" },
    { id: 20, nome: "Response CL", marca: "Adidas", preco: 750, img: "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?q=80&w=600" },

    // --- JORDAN ---
    { id: 21, nome: "AJ1 Retro High", marca: "Jordan", preco: 1599, img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=600" },
    { id: 22, nome: "AJ4 Black Cat", marca: "Jordan", preco: 2500, img: "https://images.unsplash.com/photo-1597044766714-c944ad8c52ba?q=80&w=600" },
    { id: 23, nome: "AJ3 White Cement", marca: "Jordan", preco: 1800, img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600" },
    { id: 24, nome: "AJ11 Retro", marca: "Jordan", preco: 1900, img: "https://images.unsplash.com/photo-1620138546344-7b2c38516dee?q=80&w=600" },
    { id: 25, nome: "AJ1 Low Royal", marca: "Jordan", preco: 950, img: "https://images.unsplash.com/photo-1611510330399-6150240ff1db?q=80&w=600" },
    { id: 26, nome: "AJ5 Gore-Tex", marca: "Jordan", preco: 1600, img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600" },
    { id: 27, nome: "AJ6 Travis Scott", marca: "Jordan", preco: 3500, img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=600" },
    { id: 28, nome: "AJ1 Mid Grey", marca: "Jordan", preco: 1100, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=600" },
    { id: 29, nome: "AJ12 Royalty", marca: "Jordan", preco: 1400, img: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=600" },
    { id: 30, nome: "AJ Spizike", marca: "Jordan", preco: 1250, img: "https://images.unsplash.com/photo-1611510330399-6150240ff1db?q=80&w=600" },

    // --- YEEZY ---
    { id: 31, nome: "Boost 350 V2", marca: "Yeezy", preco: 1800, img: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=600" },
    { id: 32, nome: "Slide Bone", marca: "Yeezy", preco: 750, img: "https://images.unsplash.com/photo-1628102434685-97996c565d77?q=80&w=600" },
    { id: 33, nome: "Foam Runner", marca: "Yeezy", preco: 900, img: "https://images.unsplash.com/photo-1636633310344-933390886616?q=80&w=600" },
    { id: 34, nome: "700 Wave Runner", marca: "Yeezy", preco: 2200, img: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=600" },
    { id: 35, nome: "500 Blush", marca: "Yeezy", preco: 1500, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600" },
    { id: 36, nome: "Slide Onyx", marca: "Yeezy", preco: 750, img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600" },
    { id: 37, nome: "350 Zebra", marca: "Yeezy", preco: 1900, img: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=600" },
    { id: 38, nome: "Yeezy QNTM", marca: "Yeezy", preco: 1400, img: "https://images.unsplash.com/photo-1620138546344-7b2c38516dee?q=80&w=600" },
    { id: 39, nome: "450 Cloud White", marca: "Yeezy", preco: 1600, img: "https://images.unsplash.com/photo-1636633310344-933390886616?q=80&w=600" },
    { id: 40, nome: "Slide Resin", marca: "Yeezy", preco: 750, img: "https://images.unsplash.com/photo-1628102434685-97996c565d77?q=80&w=600" }
];
