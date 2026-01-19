document.addEventListener('DOMContentLoaded', () => {


// --- VERIFICAÇÃO DE IDADE (MODO SESSÃO) ---
const ageGate = document.getElementById('age-gate');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

// Verifica sessionStorage (apaga ao fechar a aba) em vez de localStorage
if (!sessionStorage.getItem('ageVerified')) {
    setTimeout(() => {
        if(ageGate) ageGate.classList.add('active');
    }, 500);
}

if(btnYes) {
    btnYes.addEventListener('click', () => {
        sessionStorage.setItem('ageVerified', 'true'); // Salva apenas nesta sessão
        ageGate.classList.remove('active');
    });
}

    // Objeto de traduções completo e funcional.
    const translations = {
        'pt-br': { navAnoteca: 'A Enoteca', navCarta: 'Nossa Carta', navBlog: 'Diário do Enólogo', navQuemSomos: 'Quem Somos', navContato: 'Fale com o Sommelier', heroTitle: 'Do Mar à Montanha, uma Taça de Cada Vez.', heroSubtitle: 'Seja bem-vindo à nossa curadoria. Aqui, cada rótulo é uma ponte entre a brisa do oceano e a robustez dos picos.', heroButton: 'Explorar a Carta', categoryGridTitle: 'Navegue por nossas categorias', tintosTitle: 'Vinhos Tintos', tintosDesc: 'A alma da Enoteca. Dos frutados e leves aos encorpados e complexos, nossa seleção de tintos representa terroirs icônicos.', brancosTitle: 'Vinhos Brancos', brancosDesc: 'Leveza e frescor que capturam a essência da brisa do mar. Ideais para pratos leves, dias quentes e momentos de relaxamento.', roseTitle: 'Vinhos Rosé', roseDesc: 'A versatilidade em forma de vinho. Nossos rosés vão dos mais pálidos e delicados aos mais intensos e frutados.', espumantesTitle: 'Vinhos Espumantes', espumantesDesc: 'Celebre a vida com a elegância das bolhas. Perfeitos para brindes e harmonizações leves.', laranjaTitle: 'Vinhos Laranja', laranjaDesc: 'Uma viagem a métodos ancestrais. Vinhos brancos feitos como tintos, com cores e sabores únicos.', importadosTitle: 'Vinhos Importados', importadosDesc: 'Uma seleção de terroirs do mundo todo. Explore rótulos clássicos e descobertas de vinícolas renomadas.', semalcoolTitle: 'No & Low Álcool', semalcoolDesc: 'O prazer do vinho para todos os momentos, com teor alcoólico reduzido ou zero.', coolerTitle: 'Cooler de Vinho', coolerDesc: 'Refrescância e descontração para um encontro casual.', buyButton: 'Adicionar à Cesta', blogTitle: 'Diário do Enólogo', post1Title: 'A Arte da Harmonização', post1Excerpt: 'Descubra como combinar vinhos e pratos de forma memorável.', post2Title: 'O que é Terroir?', post2Excerpt: 'Entenda como o clima e solo criam vinhos únicos.', post3Title: 'O Papel do Carvalho', post3Excerpt: 'Como os barris de carvalho transformam a bebida.', readMore: 'Ler Mais →', quemSomosTitle: 'Nossa História: O Encontro dos Terroirs', quemSomosP1: 'A Enoteca Mare Monti nasceu de uma paixão: os melhores vinhos carregam a identidade de onde nasceram. Seja pela brisa salina (Mare), seja pela intensidade das vinhas de altitude (Monti), cada garrafa é um mapa sensorial.', quemSomosP2: 'Nossa missão é ser o seu guia nesta jornada. Cada rótulo em nossa carta foi escolhido a dedo, não apenas pela qualidade, mas pela história que conta. Somos curadores de experiências.', contactTitle: 'Fale com o Sommelier', contactSubtitle: 'Busca um rótulo específico ou deseja uma recomendação? Estamos aqui para guiar sua escolha.', formName: 'Seu Nome', formEmail: 'Seu E-mail', formMessage: 'Sua mensagem ou dúvida', formButton: 'Enviar', chatTitle: 'Sommelier de IA', chatPlaceholder: 'Pergunte sobre vinhos...', chatWelcome: 'Olá! Sou Vico, seu Sommelier Digital. Como posso ajudar?', chatError: 'Desculpe, estou com dificuldades de conexão. Tente novamente.', cartTitle: 'Sua Cesta', cartTotal: 'Total:', cartCheckout: 'Finalizar Compra', cartEmpty: 'Sua cesta está vazia.', footerText: '© 2025 Enoteca Mare Monti. Onde os terroirs se encontram. Um projeto Jokentek.' },
        'en': { navAnoteca: 'The Enoteca', navCarta: 'Our List', navBlog: 'Diary', navQuemSomos: 'About Us', navContato: 'Contact', heroTitle: 'From Sea to Mountain, One Glass at a Time.', heroSubtitle: 'Welcome to our curated selection. Here, each label is a bridge between the ocean breeze and the robustness of the peaks.', heroButton: 'Explore the List', categoryGridTitle: 'Browse our categories', tintosTitle: 'Red Wines', tintosDesc: 'The soul of the Enoteca. From fruity and light to full-bodied and complex, our selection of reds represents iconic terroirs.', brancosTitle: 'White Wines', brancosDesc: 'Lightness and freshness that capture the essence of the sea breeze. Ideal for light dishes, warm days, and moments of relaxation.', roseTitle: 'Rosé Wines', roseDesc: 'Versatility in a wine. Our rosés range from the palest and most delicate to the most intense and fruity.', espumantesTitle: 'Sparkling Wines', espumantesDesc: 'Celebrate life with the elegance of bubbles. Perfect for toasts and light pairings.', laranjaTitle: 'Orange Wines', laranjaDesc: 'A journey into ancestral methods. White wines made like reds, resulting in unique colors and flavors.', importadosTitle: 'Imported Wines', importadosDesc: 'A selection of terroirs from around the world. Explore classic labels and discoveries from renowned wineries.', semalcoolTitle: 'No & Low Alcohol', semalcoolDesc: 'The pleasure of wine for all moments, with reduced or zero alcohol content.', coolerTitle: 'Wine Cooler', coolerDesc: 'Refreshment and relaxation for a casual get-together.', buyButton: 'Add to Basket', blogTitle: 'Enologist\'s Diary', post1Title: 'The Art of Pairing', post1Excerpt: 'Discover how to memorably pair wines and dishes.', post2Title: 'What is Terroir?', post2Excerpt: 'Understand how climate and soil create unique wines.', post3Title: 'The Role of Oak', post3Excerpt: 'How oak barrels transform the beverage.', readMore: 'Read More →', quemSomosTitle: 'Our Story: The Meeting of Terroirs', quemSomosP1: 'Enoteca Mare Monti was born from a passion: the best wines carry the identity of where they were born. Whether by the salty breeze (Mare) or the intensity of high-altitude vines (Monti), each bottle is a sensory map.', quemSomosP2: 'Our mission is to be your guide on this journey. Each label on our list has been handpicked, not only for its quality but for the story it tells. We are curators of experiences.', contactTitle: 'Talk to the Sommelier', contactSubtitle: 'Looking for a specific label or need a recommendation? We are here to guide your choice.', formName: 'Your Name', formEmail: 'Your Email', formMessage: 'Your message or question', formButton: 'Send', chatTitle: 'AI Sommelier', chatPlaceholder: 'Ask about wines...', chatWelcome: 'Hi! I am Vico, your Digital Sommelier. How can I help?', chatError: "Sorry, I'm having connection issues. Please try again.", cartTitle: 'Your Basket', cartTotal: 'Total:', cartCheckout: 'Checkout', cartEmpty: 'Your basket is empty.', footerText: '© 2025 Enoteca Mare Monti. Where terroirs meet. A Jokentek project.' },
        'it': { navAnoteca: 'L\'Enoteca', navCarta: 'La Nostra Carta', navBlog: 'Diario', navQuemSomos: 'Chi Siamo', navContato: 'Contatto', heroTitle: 'Dal Mare alla Montagna, un Calice alla Volta.', heroSubtitle: 'Benvenuto nella nostra selezione. Ogni etichetta è un ponte tra la brezza marina e la robustezza delle vette.', heroButton: 'Esplora la Carta', categoryGridTitle: 'Sfoglia le nostre categorie', tintosTitle: 'Vini Rossi', tintosDesc: 'L\'anima dell\'Enoteca. Dai fruttati e leggeri ai corposi e complessi, la nostra selezione di rossi rappresenta terroir iconici.', brancosTitle: 'Vini Bianchi', brancosDesc: 'Leggerezza e freschezza che catturano l\'essenza della brezza marina. Ideali per piatti leggeri e momenti di relax.', roseTitle: 'Vini Rosati', roseDesc: 'La versatilità in un vino. I nostri rosati spaziano dai più pallidi e delicati ai più intensi e fruttati.', espumantesTitle: 'Vini Spumanti', espumantesDesc: 'Celebra la vita con l\'eleganza delle bollicine. Perfetti per brindisi e abbinamenti leggeri.', laranjaTitle: 'Vini Arancioni', laranjaDesc: 'Un viaggio in metodi ancestrali. Vini bianchi fatti come i rossi, con colori e sapori unici.', importadosTitle: 'Vini Importati', importadosDesc: 'Una selezione di terroir da tutto il mondo. Esplora etichette classiche e scoperte di cantine rinomate.', semalcoolTitle: 'Senza e Basso Alcol', semalcoolDesc: 'Il piacere del vino per tutti i momenti, con un contenuto alcolico ridotto o nullo.', coolerTitle: 'Cooler di Vino', coolerDesc: 'Freschezza e relax per un incontro informale.', buyButton: 'Aggiungi al Carrello', blogTitle: 'Diario dell\'Enologo', post1Title: 'L\'Arte dell\'Abbinamento', post1Excerpt: 'Scopri come abbinare vini e piatti in modo memorabile.', post2Title: 'Cos\'è il Terroir?', post2Excerpt: 'Comprendi come il clima e il suolo creino vini unici.', post3Title: 'Il Ruolo della Quercia', post3Excerpt: 'Come le botti di rovere trasformano la bevanda.', readMore: 'Leggi di più →', quemSomosTitle: 'La Nostra Storia: L\'Incontro dei Terroir', quemSomosP1: 'L\'Enoteca Mare Monti nasce da una passione: i migliori vini portano con sé l\'identità del loro luogo di nascita. Che sia la brezza salina (Mare) o l\'intensità delle vigne d\'alta quota (Monti), ogni bottiglia è una mappa sensoriale.', quemSomosP2: 'La nostra missione è essere la tua guida in questo viaggio. Ogni etichetta sulla nostra carta è stata scelta con cura, non solo per la sua qualità, ma per la storia che racconta. Siamo curatori di esperienze.', contactTitle: 'Parla con il Sommelier', contactSubtitle: 'Cerchi un\'etichetta specifica o desideri una raccomandazione? Siamo qui per guidare la tua scelta.', formName: 'Il Tuo Nome', formEmail: 'La Tua Email', formMessage: 'Il tuo messaggio o domanda', formButton: 'Invia', chatTitle: 'Sommelier IA', chatPlaceholder: 'Chiedi sui vini...', chatWelcome: 'Ciao! Sono Vico, il tuo Sommelier Digitale. Come posso aiutarti?', chatError: 'Spiacente, ho problemi di connessione. Riprova, per favore.', cartTitle: 'Il Tuo Carrello', cartTotal: 'Totale:', cartCheckout: 'Acquista', cartEmpty: 'Il tuo carrello è vuoto.', footerText: '© 2025 Enoteca Mare Monti. Dove i terroir si incontrano. Un progetto Jokentek.' },
        'es': { navAnoteca: 'La Enoteca', navCarta: 'Nuestra Carta', navBlog: 'Diario', navQuemSomos: 'Quiénes Somos', navContato: 'Contacto', heroTitle: 'Del Mar a la Montaña, una Copa a la Vez.', heroSubtitle: 'Bienvenido a nuestra selección. Cada etiqueta es un puente entre la brisa del océano y la robustez de las cumbres.', heroButton: 'Explorar la Carta', categoryGridTitle: 'Navega por nuestras categorías', tintosTitle: 'Vinos Tintos', tintosDesc: 'El alma de la Enoteca. Desde afrutados y ligeros hasta con cuerpo y complejos, nuestra selección de tintos representa terruños icónicos.', brancosTitle: 'Vinos Blancos', brancosDesc: 'Ligereza y frescura que capturan la esencia de la brisa marina. Ideales para platos ligeros y momentos de relax.', roseTitle: 'Vinos Rosados', roseDesc: 'La versatilidad en un vino. Nuestros rosados van desde los más pálidos y delicados hasta los más intensos y afrutados.', espumantesTitle: 'Vinos Espumosos', espumantesDesc: 'Celebra la vida con la elegancia de las burbujas. Perfectos para brindis y maridajes ligeros.', laranjaTitle: 'Vinos Naranjas', laranjaDesc: 'Un viaje a métodos ancestrales. Vinos blancos hechos como tintos, con colores y sabores únicos.', importadosTitle: 'Vinos Importados', importadosDesc: 'Una selección de terruños de todo el mundo. Explora etiquetas clásicas y descubrimientos de bodegas de renombre.', semalcoolTitle: 'Sin y Bajo Alcohol', semalcoolDesc: 'El placer del vino para todos los momentos, con contenido de alcohol reducido o cero.', coolerTitle: 'Cooler de Vino', coolerDesc: 'Refrescante y relajado para un encuentro casual.', buyButton: 'Añadir a la Cesta', blogTitle: 'Diario del Enólogo', post1Title: 'El Arte del Maridaje', post1Excerpt: 'Descubre cómo maridar vinos y platos de forma memorable.', post2Title: '¿Qué es el Terroir?', post2Excerpt: 'Entiende cómo el clima y el suelo crean vinos únicos.', post3Title: 'El Papel del Roble', post3Excerpt: 'Cómo las barricas de roble transforman la bebida.', readMore: 'Leer Más →', quemSomosTitle: 'Nuestra Historia: El Encuentro de los Terruños', quemSomosP1: 'Enoteca Mare Monti nació de una pasión: los mejores vinos llevan la identidad de donde nacieron. Ya sea por la brisa salina (Mare) o por la intensidad de las viñas de altitud (Monti), cada botella es un mapa sensorial.', quemSomosP2: 'Nuestra misión es ser tu guía en este viaje. Cada etiqueta de nuestra carta ha sido seleccionada cuidadosamente, no solo por su calidad, sino por la historia que cuenta. Somos curadores de experiencias.', contactTitle: 'Habla con el Sommelier', contactSubtitle: '¿Buscas una etiqueta específica o necesitas una recomendación? Estamos aquí para guiar tu elección.', formName: 'Tu Nombre', formEmail: 'Tu Email', formMessage: 'Tu mensaje o pregunta', formButton: 'Enviar', chatTitle: 'Sommelier de IA', chatPlaceholder: 'Pregunta sobre vinos...', chatWelcome: '¡Hola! Soy Vico, tu Sommelier Digital. ¿Cómo puedo ayudarte?', chatError: 'Lo siento, tengo problemas de conexión. Por favor, inténtalo de nuevo.', cartTitle: 'Tu Cesta', cartTotal: 'Total:', cartCheckout: 'Finalizar Compra', cartEmpty: 'Tu cesta está vacía.', footerText: '© 2025 Enoteca Mare Monti. Donde los terruños se encuentran. Un proyecto Jokentek.' },
        'pt-pt': { navAnoteca: 'A Enoteca', navCarta: 'A Nossa Carta', navBlog: 'Diário', navQuemSomos: 'Quem Somos', navContato: 'Contacto', heroTitle: 'Do Mar à Montanha, um Copo de Cada Vez.', heroSubtitle: 'Seja bem-vindo à nossa curadoria. Aqui, cada rótulo é uma ponte entre a brisa do oceano e a robustez dos picos.', heroButton: 'Explorar a Carta', categoryGridTitle: 'Navegue pelas nossas categorias', tintosTitle: 'Vinhos Tintos', tintosDesc: 'A alma da Enoteca. Dos frutados e leves aos encorpados e complexos, a nossa seleção de tintos representa terroirs icónicos.', brancosTitle: 'Vinhos Brancos', brancosDesc: 'Leveza e frescura que captam a essência da brisa do mar. Ideais para pratos leves e momentos de relaxamento.', roseTitle: 'Vinhos Rosé', roseDesc: 'A versatilidade em forma de vinho. Os nossos rosés vão dos mais pálidos e delicados aos mais intensos e frutados.', espumantesTitle: 'Vinhos Espumantes', espumantesDesc: 'Celebre a vida com a elegância das bolhas. Perfeitos para brindes e harmonizações leves.', laranjaTitle: 'Vinhos Laranja', laranjaDesc: 'Uma viagem a métodos ancestrais. Vinhos brancos feitos como tintos, com cores e sabores únicos.', importadosTitle: 'Vinhos Importados', importadosDesc: 'Uma seleção de terroirs de todo o mundo. Explore rótulos clássicos e descobertas de adegas de renome.', semalcoolTitle: 'Sem e Baixo Álcool', semalcoolDesc: 'O prazer do vinho para todos os momentos, com teor alcoólico reduzido ou nulo.', coolerTitle: 'Cooler de Vinho', coolerDesc: 'Refrescância e descontração para um encontro casual.', buyButton: 'Adicionar ao Cesto', blogTitle: 'Diário do Enólogo', post1Title: 'A Arte da Harmonização', post1Excerpt: 'Descubra como combinar vinhos e pratos de forma memorável.', post2Title: 'O que é o Terroir?', post2Excerpt: 'Entenda como o clima e o solo criam vinhos únicos.', post3Title: 'O Papel do Carvalho', post3Excerpt: 'Como as barricas de carvalho transformam a bebida.', readMore: 'Ler Mais →', quemSomosTitle: 'A Nossa História: O Encontro dos Terroirs', quemSomosP1: 'A Enoteca Mare Monti nasceu de uma paixão: os melhores vinhos carregam a identidade de onde nasceram. Seja pela brisa salina (Mare), seja pela intensidade das vinhas de altitude (Monti), cada garrafa é um mapa sensorial.', quemSomosP2: 'A nossa missão é ser o seu guia nesta viagem. Cada rótulo na nossa carta foi escolhido a dedo, não só pela sua qualidade, mas pela história que conta. Somos curadores de experiências.', contactTitle: 'Fale com o Sommelier', contactSubtitle: 'Procura um rótulo específico ou deseja uma recomendação? Estamos aqui para guiar a sua escolha.', formName: 'O Seu Nome', formEmail: 'O Seu Email', formMessage: 'A sua mensagem ou dúvida', formButton: 'Enviar', chatTitle: 'Sommelier de IA', chatPlaceholder: 'Pergunte sobre vinhos...', chatWelcome: 'Olá! Sou o Vico, o seu Sommelier Digital. Como posso ajudar?', chatError: 'Desculpe, estou com dificuldades de ligação. Tente novamente.', cartTitle: 'O Seu Cesto', cartTotal: 'Total:', cartCheckout: 'Finalizar Compra', cartEmpty: 'O seu cesto está vazio.', footerText: '© 2025 Enoteca Mare Monti. Onde os terroirs se encontram. Um projeto Jokentek.' }
    };

    // --- LÓGICA DE ANIMAÇÃO DE SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- LÓGICA DO SELETOR DE IDIOMAS ---
    const languageSelector = document.querySelector('.language-switcher');
    const flags = languageSelector.querySelectorAll('img');
    const translatableElements = document.querySelectorAll('[data-key]');
    const changeLanguage = (lang) => {
        const effectiveLang = translations[lang] ? lang : 'pt-br';
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[effectiveLang] && translations[effectiveLang][key]) {
                const translation = translations[effectiveLang][key];
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        localStorage.setItem('language', effectiveLang);
        flags.forEach(flag => {
            flag.classList.remove('active-lang');
            if (flag.getAttribute('data-lang') === effectiveLang) {
                flag.classList.add('active-lang');
            }
        });
    };
    languageSelector.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
        }
    });

    // --- LÓGICA DO CARRINHO DE COMPRAS E CHECKOUT ---
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = cartSidebar.querySelector('#close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutOverlay = document.getElementById('checkout-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal');
    const checkoutForm = document.getElementById('checkout-form');
    let cart = JSON.parse(localStorage.getItem('mareMontiCart')) || [];

    const toggleCart = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    };

    const toggleCheckoutModal = () => {
        checkoutModal.classList.toggle('open');
        checkoutOverlay.classList.toggle('open');
    };

    const renderCart = () => {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let totalItems = 0;
        const currentLang = localStorage.getItem('language') || 'pt-br';
        const effectiveLang = translations[currentLang] ? currentLang : 'pt-br';
        const cartEmptyText = (translations[effectiveLang] && translations[effectiveLang].cartEmpty) || 'Sua cesta está vazia.';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p style="padding: 1rem; text-align: center;">${cartEmptyText}</p>`;
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                totalItems += item.quantity;
                const cartItemEl = document.createElement('div');
                cartItemEl.classList.add('cart-item');
                cartItemEl.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                        <div class="quantity-controls">
                            <button class="quantity-change" data-id="${item.id}" data-change="-1">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-change" data-id="${item.id}" data-change="1">+</button>
                            <button class="remove-item" data-id="${item.id}">🗑️</button>
                        </div>
                    </div>`;
                cartItemsContainer.appendChild(cartItemEl);
            });
        }
        cartTotalPrice.innerText = `R$ ${total.toFixed(2)}`;
        cartCount.innerText = totalItems;
        saveCart();
    };

    const saveCart = () => {
        localStorage.setItem('mareMontiCart', JSON.stringify(cart));
    };

    const addToCart = (id, name, price, img) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price: parseFloat(price), img, quantity: 1 });
        }
        renderCart();
    };

    const updateCart = (id, change) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            if (change === 'remove') {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity += change;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
            }
        }
        renderCart();
    };

    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            toggleCart();
            setTimeout(() => { toggleCheckoutModal(); }, 400);
        } else {
            const currentLang = localStorage.getItem('language') || 'pt-br';
            const alertText = (translations[currentLang] && translations[currentLang].cartEmpty) || 'Sua cesta está vazia!';
            alert(alertText);
        }
    });

    closeModalBtn.addEventListener('click', toggleCheckoutModal);
    checkoutOverlay.addEventListener('click', toggleCheckoutModal);
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const CLIENT_WHATSAPP_NUMBER = '5511997517216'; // <-- INSIRA O NÚMERO AQUI
        const name = document.getElementById('checkout-name').value;
        const address = document.getElementById('checkout-address').value;
        const obs = document.getElementById('checkout-obs').value;
        let orderSummary = `Olá! Gostaria de fazer o seguinte pedido pelo site da Enoteca Mare Monti:\n\n*Cliente:* ${name}\n*Endereço de Entrega:* ${address}\n`;
        if (obs) { orderSummary += `*Observação:* ${obs}\n`; }
        orderSummary += `\n*RESUMO DO PEDIDO:*\n`;
        let total = 0;
        cart.forEach(item => {
            orderSummary += `--------------------\n*Produto:* ${item.name}\n*Qtd:* ${item.quantity}\n*Preço:* R$ ${item.price.toFixed(2)}\n`;
            total += item.price * item.quantity;
        });
        orderSummary += `--------------------\n*TOTAL DO PEDIDO: R$ ${total.toFixed(2)}*\n\nAguardo as instruções para pagamento. Obrigado!`;
        const whatsappUrl = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(orderSummary)}`;
        window.open(whatsappUrl, '_blank');
    });

    document.addEventListener('click', (e) => {
        const buyButton = e.target.closest('.buy-button');
        if (buyButton) { const card = buyButton.closest('.product-card'); const id = card.dataset.id; const name = card.dataset.name; const price = card.dataset.price; const img = card.dataset.img; addToCart(id, name, price, img); if (!cartSidebar.classList.contains('open')) { toggleCart(); } return; }
        const quantityButton = e.target.closest('.quantity-change');
        if (quantityButton) { const id = quantityButton.dataset.id; const change = parseInt(quantityButton.dataset.change); updateCart(id, change); return; }
        const removeButton = e.target.closest('.remove-item');
        if (removeButton) { const id = removeButton.dataset.id; updateCart(id, 'remove'); return; }
    });
    
    // --- LÓGICA DO SOMMELIER DE IA ---
    const fab = document.getElementById('ai-sommelier-fab');
    const chatWindow = document.getElementById('ai-sommelier-chat');
    if (fab && chatWindow) {
        const closeChatBtn = chatWindow.querySelector('#close-chat-ai');
        const chatForm = chatWindow.querySelector('.chat-input-form');
        const chatInput = chatWindow.querySelector('#chat-input');
        const chatMessages = chatWindow.querySelector('.chat-messages');

        const N8N_WEBHOOK_URL = 'https://webhook.oresultador.com.br/webhook/maremonti';

        let chatHistory = JSON.parse(sessionStorage.getItem('aiChatHistory')) || [];

        const updateChatUI = () => { if (!chatMessages) return; chatMessages.innerHTML = ''; chatHistory.forEach(msg => { const messageEl = document.createElement('div'); messageEl.classList.add('chat-message', msg.sender); messageEl.textContent = msg.text; chatMessages.appendChild(messageEl); }); chatMessages.scrollTop = chatMessages.scrollHeight; };
        
        fab.addEventListener('click', () => {
            chatWindow.classList.remove('hidden');
            if (chatHistory.length === 0) {
                const currentLang = localStorage.getItem('language') || 'pt-br';
                const welcomeText = (translations[currentLang] && translations[currentLang].chatWelcome) || 'Olá! Sou Vico, seu Sommelier Digital. Como posso ajudar?';
                const welcomeMessage = { sender: 'ai', text: welcomeText };
                chatHistory.push(welcomeMessage);
                sessionStorage.setItem('aiChatHistory', JSON.stringify(chatHistory));
                updateChatUI();
            }
        });
        closeChatBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;

            chatHistory.push({ sender: 'user', text: userMessage });
            updateChatUI();
            chatInput.value = '';
            
            const loadingEl = document.createElement('div');
            loadingEl.classList.add('chat-message', 'ai');
            loadingEl.textContent = '...';
            chatMessages.appendChild(loadingEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            const masterStock = [
                { id: "lar04", name: "Macerado Ânfora", price: 109.50, img: "assets/img/macerado-anfora.png" },
    { id: "lar05", name: "IAC Ribas Macerado/Barricado", price: 109.50, img: "assets/img/iac-ribas.png" },
    { id: "esp04", name: "Sur Lies Bella Quinta Branco", price: 111.80, img: "assets/img/surlies-branco.png" },
    { id: "esp05", name: "Sur Lies Bella Quinta Rosé", price: 111.80, img: "assets/img/surlies-rose.png" },
    { id: "tin04", name: "Riserva Musical Assemblage", price: 102.50, img: "assets/img/riserva-musical.png" },
    { id: "tin05", name: "Corno Grande Montepulciano DOP", price: 105.50, img: "assets/img/corno-grande.png" },
    { id: "esp06", name: "San Martin Prosecco", price: 38.50, img: "assets/img/san-martin.png" },
    { id: "tin06", name: "Pinot Noir", price: 68.50, img: "assets/img/pinot-noir.png" },
    { id: "tin07", name: "Merlot Aldegheri", price: 54.50, img: "assets/img/merlot-aldegheri.png" },
    { id: "bra04", name: "Aldegheri Branco", price: 54.50, img: "assets/img/aldegheri-branco.png" },
    { id: "ros04", name: "Piscine Al Mare", price: 37.50, img: "assets/img/piscine-almare.png" },
    { id: "tin08", name: "La Passione Segreta IGT", price: 79.50, img: "assets/img/la-passione.png" }, // Ajustar preço
            ];

            try {
                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: userMessage, stock: masterStock })
                });
                if (!response.ok) throw new Error('Falha na rede (possivelmente CORS)');
                
                const data = await response.json();

                if (data.action && data.action === 'addToCart' && data.item) {
                    addToCart(data.item.id, data.item.name, data.item.price, data.item.img);
                    if (!cartSidebar.classList.contains('open')) {
                        toggleCart();
                    }
                }
                
                const aiResponseText = data.text || "Desculpe, a resposta não veio no formato esperado.";
                chatHistory.push({ sender: 'ai', text: aiResponseText });

            } catch (error) {
                console.error("Erro na chamada do Sommelier IA:", error);
                const currentLang = localStorage.getItem('language') || 'pt-br';
                const errorText = (translations[currentLang] && translations[currentLang].chatError) || "Desculpe, estou com dificuldades de conexão. Tente novamente.";
                chatHistory.push({ sender: 'ai', text: errorText });
            } finally {
                loadingEl.remove();
                updateChatUI();
                sessionStorage.setItem('aiChatHistory', JSON.stringify(chatHistory));
            }
        });
        updateChatUI();
    }

        
    // --- INICIALIZAÇÃO FINAL ---
    const savedLangOnLoad = localStorage.getItem('language') || 'pt-br';
    changeLanguage(savedLangOnLoad);
    renderCart();
});

// --- CARREGAMENTO DINÂMICO DOS PRODUTOS (DO CMS) ---
async function carregarProdutosCMS(categoriaAlvo) {
    // 1. Descobre onde desenhar os cards
    // Vamos procurar uma div que tenha id="grid-dinamica"
    const container = document.getElementById('grid-dinamica');
    if (!container) return; // Se não tiver grid nessa página, sai.

    // 2. Tenta ler o arquivo que o cliente salvou
    try {
        const resposta = await fetch('dados/estoque.json');
        if (!resposta.ok) throw new Error("Erro ao ler estoque");
        
        const dados = await resposta.json();
        const listaCompleta = dados.produtos || [];

        // 3. Filtra apenas a categoria dessa página (ex: só tintos)
        const vinhosDaPagina = listaCompleta.filter(p => p.categoria === categoriaAlvo);

        // Se não tiver nada, avisa
        if (vinhosDaPagina.length === 0) {
            container.innerHTML += '<p style="grid-column: 1/-1; text-align: center;">Nenhum vinho cadastrado aqui ainda.</p>';
            return;
        }

        // 4. Cria os cards
        vinhosDaPagina.forEach(vinho => {
            const card = document.createElement('div');
            card.classList.add('product-card'); // Mantém seu estilo
            // Adiciona os dados para o carrinho funcionar
            card.setAttribute('data-id', vinho.id);
            card.setAttribute('data-name', vinho.nome);
            card.setAttribute('data-price', vinho.preco);
            card.setAttribute('data-img', vinho.imagem);

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${vinho.imagem}" alt="${vinho.nome}">
                    </div>
                    <div class="card-back">
                        <h3>${vinho.nome}</h3>
                        <p>${vinho.descricao}</p>
                        <div class="price">R$ ${parseFloat(vinho.preco).toFixed(2).replace('.', ',')}</div>
                        <button class="buy-button">Adicionar à Cesta</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (erro) {
        console.log("Ainda não há dados do CMS ou erro:", erro);
    }
}

// Ativa a função quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Verifica em qual página estamos olhando o nome do arquivo ou ID do body
    const path = window.location.pathname;
    
    if (path.includes('tintos.html')) carregarProdutosCMS('tinto');
    if (path.includes('brancos.html')) carregarProdutosCMS('branco');
    if (path.includes('rose.html')) carregarProdutosCMS('rose');
    if (path.includes('espumantes.html')) carregarProdutosCMS('espumantes');
    if (path.includes('laranja.html')) carregarProdutosCMS('laranja');
    if (path.includes('importados.html')) carregarProdutosCMS('importados');
    if (path.includes('semalcool.html')) carregarProdutosCMS('semalcool');
    if (path.includes('cooler.html')) carregarProdutosCMS('cooler');
});