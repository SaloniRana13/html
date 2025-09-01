var data = {
    categories: {
        "1": { "name": "Vegetables & Fruits" },
        "2": { "name": "Dairy & Breakfast" },
        "3": { "name": "Munchies" },
        "4": { "name": "Cold Drinks & Juices" },
        "5": { "name": "Instant & Frozen Food" }
    },
    products: {
        "101": {
            "name": "Tomato",
            "price": 50,
            "image": "tomato.jpg",
            "category_id": 1,
            "description": "Fresh organic tomato"
        },
        "102": {
            "name": "Apple",
            "price": 150,
            "image": "apple.jpg",
            "category_id": 1,
            "description": "Juicy red apple"
        },
        "201": {
            "name": "Milk",
            "price": 55,
            "image": "milk.jpg",
            "category_id": 2,
            "description": "Fresh cow milk"
        },
        "202": {
            "name": "Cereal",
            "price": 500,
            "image": "cereal.jpg",
            "category_id": 2,
            "description": "Breakfast cereal"
        },
        "301": {
            "name": "Chips",
            "price": 100,
            "image": "chips.jpg",
            "category_id": 3,
            "description": "Crunchy potato chips"
        },
        "401": {
            "name": "Cola",
            "price": 40,
            "image": "cola.jpg",
            "category_id": 4,
            "description": "Refreshing cola drink"
        },
        "502": {
            "name": "Frozen Fries",
            "price": 60,
            "image": "fries.jpg",
            "category_id": 5,
            "description": "Frozen french fries"
        }
    },
    category_products: {
        "1": [101, 102],
        "2": [201, 202],
        "3": [301],
        "4": [401],
        "5": [502]
    }
}

function renderHeader(app) {
    var header =` <header>Quick Commerce</header>`;
    app.innerHTML += header;
}

function filterProductsByCategory(categoryId) {
    const productIds = data.category_products[categoryId] || [];
    renderProducts(productIds);
}

function renderSearchBar(app) {
    var searchSection = `
        <div class="search">
            <input type="text" id="search" placeholder="Search products...">
            <button id="clearSearch">Clear</button>
        </div>
    `;
    app.innerHTML += searchSection;
}

function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    //data.categories is an object storing category IDs as keys and category details as values
    //Object.keys(data.categories) extracts only the keys (i.e., category IDs) from this object and returns them as an array:

    Object.keys(data.categories).forEach((categoryId) => {
        const category = data.categories[categoryId];
        const li =` <li onclick="filterProductsByCategory('${categoryId}')">${category.name}</li>`;
        categoryList.innerHTML += li;
    });
}

function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    if (products.length === 0) {
        productList.innerHTML = '<p>No products available</p>';
        return;
    }

    productList.innerHTML += products.map(productId => {
        const product = data.products[productId];
        return  `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price.toFixed(2)}</div>
                <div class="description">${product.description}</div>
            </div>
        `;
    }).join('');
}

function renderMainContent(app) {
    var mainContent = `
        <div class="main-content">
            <div class="categories" id="categoryList"></div>
            <div class="products" id="productList"></div>
        </div>
    `;
    app.innerHTML += mainContent;
    renderCategories();
    renderProducts(Object.keys(data.products));
}

function searchProducts(query) {
    const filteredProducts = Object.keys(data.products).filter(productId => {
        const product = data.products[productId];
        return product.name.toLowerCase().includes(query.toLowerCase());
    });
    renderProducts(filteredProducts);
}

function bindEvents() {
    const searchInput = document.getElementById('search');
    const clearSearchButton = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        if (query) {
            clearSearchButton.style.display = 'inline-block';
            searchProducts(query);
        } else {
            clearSearchButton.style.display = 'none';
            renderProducts(Object.keys(data.products));
        }
    });

    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchButton.style.display = 'none';
        renderCategories();
        renderProducts(Object.keys(data.products));
    });
}



function initializeApp(){
    var app = document.querySelector('#app');
    renderHeader(app);
    renderSearchBar(app);
    renderMainContent(app);
    bindEvents();
}
initializeApp();