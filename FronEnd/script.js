document.addEventListener('DOMContentLoaded', function() {
    // Initialize empty cart
    let cart = {};
    let cartCount = 0;
    
    // Update cart counter display
    const cartCountElement = document.querySelector('.cart-count');
    
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
            
            // In a real implementation, this would fetch new dashboard metrics
            console.log("Dashboard timeframe changed to:", button.textContent.trim());
        });
    });
    
    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product info
            const productCard = button.closest('.product-card') || button.closest('.bottle-card');
            const productName = productCard.querySelector('h3') ? 
                                productCard.querySelector('h3').textContent : 
                                productCard.querySelector('h4').textContent;
            
            // Get price
            let price = 0;
            if (productCard.querySelector('.discount-price')) {
                price = parseFloat(productCard.querySelector('.discount-price').textContent.replace('$', ''));
            } else if (productCard.querySelector('.price')) {
                price = parseFloat(productCard.querySelector('.price').textContent.replace('₹', ''));
            }
            
            // Add to cart or increase quantity
            if (!cart[productName]) {
                cart[productName] = {
                    quantity: 1,
                    price: price
                };
            } else {
                cart[productName].quantity += 1;
            }
            
            // Update cart count
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Show add to cart confirmation
            const originalText = button.textContent;
            button.textContent = 'Added to Cart!';
            button.style.backgroundColor = '#76c043';
            
            // Reset button after 1.5 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 1500);
            
            // For debug
            console.log("Cart updated:", cart);
        });
    });
    
    // Cart modal toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.querySelector('.close-cart');
    
    if (cartIcon && cartModal && closeCartBtn) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            updateCartList();
            cartModal.classList.add('show');
        });
        
        closeCartBtn.addEventListener('click', function() {
            cartModal.classList.remove('show');
        });
        
        // Close when clicking outside the modal
        window.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                cartModal.classList.remove('show');
            }
        });
    }
    
    // Function to update cart list in modal
    function updateCartList() {
        const cartItemsList = document.querySelector('.cart-items');
        if (!cartItemsList) return;
        
        cartItemsList.innerHTML = '';
        
        if (Object.keys(cart).length === 0) {
            cartItemsList.innerHTML = '<li class="empty-cart-message">Your cart is empty.</li>';
            document.querySelector('.total-amount').textContent = '$0.00';
            return;
        }
        
        let total = 0;
        
        for (let itemName in cart) {
            const item = cart[itemName];
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${itemName}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-item="${itemName}">-</button>
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-item="${itemName}">+</button>
                    </div>
                    <button class="remove-item" data-item="${itemName}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            cartItemsList.appendChild(li);
        }
        
        // Update total
        document.querySelector('.total-amount').textContent = '$' + total.toFixed(2);
        
        // Add event listeners to the newly created buttons
        addCartItemEventListeners();
    }
    
    // Add event listeners to cart item buttons
    function addCartItemEventListeners() {
        // Increase quantity
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                cart[itemName].quantity += 1;
                cartCount += 1;
                cartCountElement.textContent = cartCount;
                updateCartList();
            });
        });
        
        // Decrease quantity
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                if (cart[itemName].quantity > 1) {
                    cart[itemName].quantity -= 1;
                    cartCount -= 1;
                    cartCountElement.textContent = cartCount;
                    updateCartList();
                }
            });
        });
        
        // Remove item
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                cartCount -= cart[itemName].quantity;
                delete cart[itemName];
                cartCountElement.textContent = cartCount;
                updateCartList();
            });
        });
    }
    
    // Checkout button functionality
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (Object.keys(cart).length === 0) {
                alert('Your cart is empty.');
                return;
            }
            
            alert('Thank you for your order! This is a demo, so no actual checkout will occur.');
            // In a real app, this would redirect to checkout page or process the order
            cart = {};
            cartCount = 0;
            cartCountElement.textContent = cartCount;
            cartModal.classList.remove('show');
        });
    }
    
    // For demo: Dynamic update to environmental impact values on dashboard
    function updateDashboardData(timeFrame) {
        const metrics = document.querySelectorAll('.metric-value');
        if (!metrics.length) return;
        
        // For demo purposes, update values based on timeframe
        if (timeFrame === 'Month') {
            if (metrics[0]) metrics[0].textContent = '24.8 kg';
            if (metrics[1]) metrics[1].textContent = '18';
            if (metrics[2]) metrics[2].textContent = '7.2 kg';
            if (metrics[3]) metrics[3].textContent = '156 L';
        } else if (timeFrame === 'Quarter') {
            if (metrics[0]) metrics[0].textContent = '68.3 kg';
            if (metrics[1]) metrics[1].textContent = '52';
            if (metrics[2]) metrics[2].textContent = '21.5 kg';
            if (metrics[3]) metrics[3].textContent = '410 L';
        } else if (timeFrame === 'Year') {
            if (metrics[0]) metrics[0].textContent = '249.6 kg';
            if (metrics[1]) metrics[1].textContent = '187';
            if (metrics[2]) metrics[2].textContent = '86.4 kg';
            if (metrics[3]) metrics[3].textContent = '1842 L';
        }
    }
    
    // Add current date and username to the page
    document.querySelector('.user-status').textContent = 'DakshVerma11';
    
    // For demo: add hover effect to challenge cards
    const challengeCards = document.querySelectorAll('.challenge-card');
    challengeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});