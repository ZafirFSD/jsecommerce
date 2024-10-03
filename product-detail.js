function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayProductDetails(productId) {
    const products = [
        { id: '1', name: 'Kurta Pajama', price: 'Rs.8,700', image: 'images/kurta.png' },
        { id: '2', name: 'Beard Oil', price: 'Rs.800', image: 'images/oil.png' },
        { id: '3', name: 'Footwear', price: 'Rs.6,400', image: 'images/sneak.png' },
        { id: '4', name: 'Suits', price: 'Rs.8,700', image: 'images/formal.png' },
        { id: '5', name: 'Skin Care Kit', price: 'Rs.15,800', image: 'images/acad.png' },
        { id: '6', name: 'Eastern', price: 'Rs.4,800', image: 'images/kameez.png' },
        { id: '7', name: 'ESM', price: 'Rs.2,100', image: 'images/machine.png' },
        { id: '8', name: 'Sandal', price: 'Rs.6,100', image: 'images/sand.png' },
        { id: '9', name: 'Fancy Glasses', price: 'Rs.6,320', image: 'images/gog.png' },
        { id: '10', name: 'Sweat T-Shirt', price: 'Rs.2,500', image: 'images/combo.png' },
        { id: '11', name: 'Mohecan', price: 'Rs.2,100', image: 'images/moh.png' },
        { id: '12', name: 'Black Kurta', price: 'Rs.12,100', image: 'images/kurti.png' },
        { id: '13', name: 'Make-Up', price: 'Rs.1500', image: 'images/makeup.png' },
        { id: '14', name: 'Perfume', price: 'Rs.3500', image: 'images/perfume.png' },
        { id: '15', name: 'Bag', price: 'Rs.5,999', image: 'images/bag.png' },
        { id: '16', name: 'Haudenosaunee', price: 'Rs.18,338.08', image: 'images/shirt.png' },
        { id: '17', name: 'Rosemery', price: 'Rs.8,765', image: 'images/shirt-2.png' },
        { id: '18', name: "Slim Fit Men's", price: 'Rs.1,999', image: 'images/shirt-3.png' },
        { id: '19', name: "Metro Sandle's", price: 'Rs.4,399', image: 'images/shoe.png' },
        { id: '20', name: "Aroma A-13", price: 'Rs.10,600', image: 'images/women-1.png' },
        { id: '21', name: "Unstiched", price: 'Rs.8,900', image: 'images/cotton.png' },
        { id: '22', name: "3PC", price: 'Rs.11,100', image: 'images/3pc.png' },
        { id: '23', name: "BIEGE", price: 'Rs.4,600', image: 'images/ws.png' },
        { id: '24', name: "Abaya", price: 'Rs.5,800', image: 'images/night.png' },
        { id: '25', name: "Pencil", price: 'Rs.3,900', image: 'images/9.png' },
        { id: '26', name: "Men's Suite", price: 'Rs.24,500', image: 'images/suite.png' },
        { id: '27', name: "Strap-Sandal", price: 'Rs.13,800', image: 'images/sandal.png' },
        { id: '28', name: "Shirt with Trouser", price: 'Rs.4,500', image: 'images/women.png' },
        { id: '29', name: "Baggy Cloths", price: 'Rs.8,900', image: 'images/baggy.png' },
    ];
    
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('product-detail').innerHTML = `
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid product-image" alt="${product.name}">
            </div>
            <div class="col-md-6 product-details">
                <h1 class="product-name">${product.name}</h1>
                <p class="product-price">Price: ${product.price}</p>
                <button class="btn btn-outline-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
            </div>
        `;
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
    }
}

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const products = [
        { id: '1', name: 'Kurta Pajama', price: 'Rs.8,700', image: 'images/kurta.png' },
        { id: '2', name: 'Beard Oil', price: 'Rs.800', image: 'images/oil.png' },
        { id: '3', name: 'Footwear', price: 'Rs.6,400', image: 'images/sneak.png' },
        { id: '4', name: 'Suits', price: 'Rs.8,700', image: 'images/formal.png' },
        { id: '5', name: 'Skin Care Kit', price: 'Rs.15,800', image: 'images/acad.png' },
        { id: '6', name: 'Eastern', price: 'Rs.4,800', image: 'images/kameez.png' },
        { id: '7', name: 'ESM', price: 'Rs.2,100', image: 'images/machine.png' },
        { id: '8', name: 'Sandal', price: 'Rs.6,100', image: 'images/sand.png' },
        { id: '9', name: 'Fancy Glasses', price: 'Rs.6,320', image: 'images/gog.png' },
        { id: '10', name: 'Sweat T-Shirt', price: 'Rs.2,500', image: 'images/combo.png' },
        { id: '11', name: 'Mohecan', price: 'Rs.2,100', image: 'images/moh.png' },
        { id: '12', name: 'Black Kurta', price: 'Rs.12,100', image: 'images/kurti.png' },
        { id: '13', name: 'Make-Up', price: 'Rs.1500', image: 'images/makeup.png' },
        { id: '14', name: 'Perfume', price: 'Rs.3500', image: 'images/perfume.png' },
        { id: '15', name: 'Bag', price: 'Rs.5,999', image: 'images/bag.png' },
        { id: '16', name: 'Haudenosaunee', price: 'Rs.18,338.08', image: 'images/shirt.png' },
        { id: '17', name: 'Rosemery', price: 'Rs.8,765', image: 'images/shirt-2.png' },
        { id: '18', name: "Slim Fit Men's", price: 'Rs.1,999', image: 'images/shirt-3.png' },
        { id: '19', name: "Metro Sandle's", price: 'Rs.4,399', image: 'images/shoe.png' },
        { id: '20', name: "Aroma A-13", price: 'Rs.10,600', image: 'images/women-1.png' },
        { id: '21', name: "Unstiched", price: 'Rs.8,900', image: 'images/cotton.png' },
        { id: '22', name: "3PC", price: 'Rs.11,100', image: 'images/3pc.png' },
        { id: '23', name: "BIEGE", price: 'Rs.4,600', image: 'images/ws.png' },
        { id: '24', name: "Abaya", price: 'Rs.5,800', image: 'images/night.png' },
        { id: '25', name: "Pencil", price: 'Rs.3,900', image: 'images/9.png' },
        { id: '26', name: "Men's Suite", price: 'Rs.24,500', image: 'images/suite.png' },
        { id: '27', name: "Strap-Sandal", price: 'Rs.13,800', image: 'images/sandal.png' },
        { id: '28', name: "Shirt with Trouser", price: 'Rs.4,500', image: 'images/women.png' },
        { id: '29', name: "Baggy Cloths", price: 'Rs.8,900', image: 'images/baggy.png' },
    ];
    
    const product = products.find(p => p.id === productId);

    if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1; 
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cart));
        alert('Product added to cart!');
        updateTotalAmount(); 
    } else {
        alert('Product not found!');
    }
}

function updateTotalAmount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); // Convert price to a number
        totalAmount += price * item.quantity; 
    });

    const totalAmountElement = document.getElementById("checkout-button");
    if (totalAmountElement) {
        totalAmountElement.textContent = `Proceed to Checkout - Rs. ${totalAmount.toFixed(2)}`;
    } else {
        console.error('Checkout button element not found.');
    }
}

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutSection = document.getElementById('checkout-section');
    let total = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <h3>Your cart is empty</h3>
            <p>Add some products to your cart to display them here.</p>
        `;
        if (checkoutSection) {
            checkoutSection.style.display = 'none';
        }
        return;
    }

    cartItemsContainer.innerHTML = cartItems.map(item => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
        total += price * item.quantity; 

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <p class="cart-item-price">Price: ${item.price}</p>
                    <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
                    <button class="btn btn-outline-danger cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total').textContent = `Total Amount: Rs. ${total.toFixed(2)}`;
    if (checkoutSection) {
        checkoutSection.style.display = 'block';
    }

    updateTotalAmount(); 
}


function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', () => {
    const productId = getQueryParam('id');
    if (productId) {
        displayProductDetails(productId);
    }
});

