document.addEventListener('DOMContentLoaded', () => {

    // --- FUNÇÃO 1: CARREGA OS CARDS INFORMATIVOS (SLIDER) ---
    async function carregarCardsCategoria(categoriaPage) {
        const sliderContainer = document.querySelector('.info-slider');
        const cardContainer = document.querySelector('.info-card');
        
        if (!sliderContainer || !cardContainer) return;

        try {
            // Busca o JSON de configurações visuais
            const res = await fetch('dados/categorias.json?t=' + new Date().getTime());
            if (!res.ok) return; // Se não existir arquivo, não faz nada
            
            const dados = await res.json();
            const configs = dados.configs || [];

            // Encontra a configuração desta categoria específica
            const configCategoria = configs.find(c => c.id === categoriaPage);

            if (configCategoria && configCategoria.imagens && configCategoria.imagens.length > 0) {
                // Limpa o slider (tira o texto de exemplo)
                sliderContainer.innerHTML = '';
                
                // Adiciona as imagens que o cliente subiu
                configCategoria.imagens.forEach(imgUrl => {
                    // Ajuste de caminho caso venha com barra inicial
                    let src = imgUrl;
                    if (src.startsWith('/')) src = src.substring(1);

                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = "Info " + categoriaPage;
                    sliderContainer.appendChild(img);
                });

                // Mostra o card (remove o hidden)
                cardContainer.classList.remove('hidden');
            } else {
                // Se não tiver imagens cadastradas para essa categoria, esconde o card
                cardContainer.classList.add('hidden');
            }

        } catch (err) {
            console.log("Card info: Nenhuma configuração encontrada ou erro de leitura.");
            cardContainer.classList.add('hidden');
        }
    }

    // --- FUNÇÃO 2: CARREGA OS PRODUTOS ---
    async function carregarProdutosCMS(categoriaAlvo) {
        const container = document.getElementById('grid-dinamica');
        if (!container) return;

        try {
            const resposta = await fetch('dados/estoque.json?t=' + new Date().getTime());
            if (!resposta.ok) throw new Error("Estoque vazio");
            
            const dados = await resposta.json();
            const lista = dados.produtos || [];
            const produtos = lista.filter(p => p.categoria === categoriaAlvo);

            // Se não tem produtos, mostra aviso
            if (produtos.length === 0) {
                const aviso = document.createElement('p');
                aviso.style.gridColumn = "1/-1";
                aviso.style.textAlign = "center";
                aviso.style.padding = "20px";
                aviso.innerText = "Em breve novidades nesta categoria.";
                container.appendChild(aviso);
                return;
            }

            // Renderiza produtos
            produtos.forEach(vinho => {
                const card = document.createElement('div');
                card.classList.add('product-card');
                
                let imgPath = vinho.imagem;
                if (imgPath && imgPath.startsWith('/')) imgPath = imgPath.substring(1);

                // Atributos para o carrinho
                card.setAttribute('data-id', vinho.id);
                card.setAttribute('data-name', vinho.nome);
                card.setAttribute('data-price', vinho.preco);
                card.setAttribute('data-img', imgPath);

                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${imgPath}" alt="${vinho.nome}">
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
            console.log("Aguardando cadastro de produtos...");
        }
    }

    // --- IDENTIFICAÇÃO DA PÁGINA ---
    // Define qual categoria carregar baseada na URL ou Título
    const path = window.location.pathname;
    let categoriaAtual = '';

    if (path.includes('tintos') || document.title.includes('Tintos')) categoriaAtual = 'tinto';
    else if (path.includes('brancos') || document.title.includes('Brancos')) categoriaAtual = 'branco';
    else if (path.includes('rose') || document.title.includes('Rosé')) categoriaAtual = 'rose';
    else if (path.includes('espumantes') || document.title.includes('Espumantes')) categoriaAtual = 'espumantes';
    else if (path.includes('laranja') || document.title.includes('Laranja')) categoriaAtual = 'laranja';
    else if (path.includes('importados') || document.title.includes('Importados')) categoriaAtual = 'importados';
    else if (path.includes('semalcool') || document.title.includes('Low')) categoriaAtual = 'semalcool';
    else if (path.includes('cooler') || document.title.includes('Cooler')) categoriaAtual = 'cooler';

    if (categoriaAtual) {
        carregarCardsCategoria(categoriaAtual); // Carrega as imagens do topo
        carregarProdutosCMS(categoriaAtual);    // Carrega os vinhos
    }

    // --- RESTANTE DO CÓDIGO (CARRINHO, LOGIN, ETC) ---
    // Mantendo a lógica de login do admin
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }

    // Código do Carrinho (Resumido para não estourar limite, mas mantenha o seu original abaixo daqui)
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const checkoutOverlay = document.getElementById('checkout-modal-overlay');
    const checkoutForm = document.getElementById('checkout-form');
    let cart = JSON.parse(localStorage.getItem('mareMontiCart')) || [];

    function updateCartUI() {
        if(!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `<img src="${item.img}"><div><h4>${item.name}</h4><p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p><button class="rm-btn" data-id="${item.id}">Remover</button></div>`;
            cartItemsContainer.appendChild(div);
        });
        if(cartTotalPrice) cartTotalPrice.innerText = "R$ " + total.toFixed(2);
        const countBadge = document.getElementById('cart-count');
        if(countBadge) countBadge.innerText = count;
        localStorage.setItem('mareMontiCart', JSON.stringify(cart));
    }

    function toggleCart() { 
        if(cartSidebar) { cartSidebar.classList.toggle('open'); cartOverlay.classList.toggle('open'); }
    }

    // Event Listeners Carrinho
    if(cartIcon) cartIcon.addEventListener('click', toggleCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if(cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    document.addEventListener('click', e => {
        if(e.target.classList.contains('buy-button')) {
            const card = e.target.closest('.product-card');
            const exists = cart.find(x => x.id === card.dataset.id);
            if(exists) exists.quantity++;
            else cart.push({id: card.dataset.id, name: card.dataset.name, price: parseFloat(card.dataset.price), img: card.dataset.img, quantity: 1});
            updateCartUI();
            if(!cartSidebar.classList.contains('open')) toggleCart();
        }
        if(e.target.classList.contains('rm-btn')) {
            const id = e.target.dataset.id;
            cart = cart.filter(x => x.id !== id);
            updateCartUI();
        }
    });

    // Checkout Modal
    if(checkoutButton) checkoutButton.addEventListener('click', () => { toggleCart(); if(checkoutModal) checkoutModal.classList.add('open'); if(checkoutOverlay) checkoutOverlay.classList.add('open'); });
    if(closeModalBtn) closeModalBtn.addEventListener('click', () => { checkoutModal.classList.remove('open'); checkoutOverlay.classList.remove('open'); });
    if(checkoutForm) checkoutForm.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('checkout-name').value;
        const endereco = document.getElementById('checkout-address').value;
        const obs = document.getElementById('checkout-obs').value;
        let msg = `Olá, sou ${nome}.\nEndereço: ${endereco}\nObs: ${obs}\n\nPedido:\n`;
        cart.forEach(i => msg += `${i.quantity}x ${i.name}\n`);
        window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`);
    });

    updateCartUI();
});
