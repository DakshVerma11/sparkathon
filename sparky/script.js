// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Product Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter products
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Time Filter for Dashboard
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(button => {
        button.addEventListener('click', () => {
            timeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateDashboardData(button.textContent.trim());
        });
    });

    // Initialize cart from localStorage
    const cartCount = document.querySelector('.cart-count');
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    let currentCartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    cartCount.textContent = currentCartCount;

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product info
            const productCard = button.closest('.product-card') || button.closest('.bottle-card');
            const productName = productCard.querySelector('h3') ? 
                productCard.querySelector('h3').textContent : 
                productCard.querySelector('h4').textContent;

            // Update cart data
            if (!cart[productName]) {
                cart[productName] = 0;
            }
            cart[productName]++;
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update cart count
            currentCartCount++;
            cartCount.textContent = currentCartCount;

            // Show add to cart confirmation
            const originalText = button.textContent;
            button.textContent = 'Added to Cart!';
            button.style.backgroundColor = '#76c043';

            // Reset button after 1.5 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 1500);
        });
    });

    // Cart modal toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.querySelector('.close-cart');

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        updateCartList();
        cartModal.classList.add('show');
    });

    closeCartBtn.addEventListener('click', function() {
        cartModal.classList.remove('show');
    });

    // Function to update cart list in modal
    function updateCartList() {
        const cartItemsList = document.querySelector('.cart-items');
        cartItemsList.innerHTML = '';
        if (Object.keys(cart).length === 0) {
            cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        } else {
            for (let item in cart) {
                let li = document.createElement('li');
                li.textContent = item + ' - Quantity: ' + cart[item];
                cartItemsList.appendChild(li);
            }
        }
    }

    // Placeholder for dashboard data update
    function updateDashboardData(timeFrame) {
        // Demo placeholder - in real app, would fetch new dashboard metrics
    }
});
