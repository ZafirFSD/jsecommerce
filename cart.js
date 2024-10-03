function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function updateTotalAmount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); 
        totalAmount += price * item.quantity; 
    });

    console.log(`Calculated total amount: ${totalAmount}`); 

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
    const totalAmountElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    let total = 0;

    // Check if the cart is empty
    if (cartItems.length === 0) {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = `
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart to display them here.</p>
            `;
        }
        if (checkoutSection) {
            checkoutSection.style.display = 'none';
        }
        return;
    }

    // Map through cart items and create HTML
    if (cartItemsContainer) {
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
    }

    // Display total price
    if (totalAmountElement) {
        totalAmountElement.textContent = `Total Amount: Rs. ${total.toFixed(2)}`;
    } else {
        console.error('Total amount element not found.');
    }

    if (checkoutSection) {
        checkoutSection.style.display = 'block';
    }

    // Check if the checkout button exists
    if (checkoutButton) {
        updateTotalAmount(); // Update total amount on load
    } else {
        console.error('Checkout button element not found.');
    }
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});
s

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems(); 
});

