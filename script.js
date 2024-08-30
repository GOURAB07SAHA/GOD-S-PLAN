
function searchProducts() {
    let searchTerm = document.getElementById("searchBar").value.toLowerCase();
    let items = document.getElementsByClassName('category-item');

    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].innerText.toLowerCase();
        if (itemText.includes(searchTerm)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }

    }
}

function showMoreItems() {
    // Select all hidden items
    const hiddenItems = document.querySelectorAll('.category-item.hidden');
    
    // Loop through the hidden items and display them
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });

    // Hide the "SEE MORE ITEMS" button after all items are shown
    const seeMoreBtn = document.querySelector('.see-more-btn');
    if (seeMoreBtn) {
        seeMoreBtn.style.display = 'none';
    }
}

// Add event listener for the "SEE MORE ITEMS" button
document.querySelector('.see-more-btn').addEventListener('click', showMoreItems);



// script.js

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Handle the form submission, e.g., send data to the server or display a confirmation message
    alert('Thank you for your review!');
    
    // Optionally reset the form
    document.getElementById('review-form').reset();
});


// JavaScript to handle "See More" functionality
document.getElementById('see-more-button').addEventListener('click', function() {
    const hiddenReviews = document.querySelector('.hidden-reviews');
    hiddenReviews.style.display = 'flex';  // Show hidden reviews
    this.style.display = 'none';  // Hide the "See More" button
});


// JavaScript to handle "Read More" functionality
document.getElementById('read-more-button').addEventListener('click', function() {
    const moreText = document.getElementById('more-text');
    moreText.style.display = 'inline';  // Show the additional text
    this.style.display = 'none';  // Hide the "Read More" button
});


// JavaScript to handle "Add to Cart" functionality
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        alert(`Product with ID ${productId} added to cart.`);
        
        // Implement your add to cart logic here, e.g., updating the cart UI or sending data to the server
    });
});











// JavaScript to handle "Add to Cart" functionality and update the cart
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const productName = this.getAttribute('data-product-name');
        const productPrice = parseFloat(this.getAttribute('data-product-price'));

        addToCart(productId, productName, productPrice);
    });
});

let cart = [];
let total = 0;

function addToCart(productId, productName, productPrice) {
    // Check if product is already in cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    total += productPrice;
    updateCartUI();
}

function addToCart(event) {
    const item = event.target.closest('.category-item');
    const itemName = item.querySelector('h3').innerText;
    const itemPrice = item.querySelector('p').innerText; // This will include the INR symbol
    const itemImage = item.querySelector('img').src;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${itemImage}" alt="${itemName}" />
        <div>
            <h4>${itemName}</h4>
            <p>${itemPrice}</p> <!-- Price with INR symbol -->
        </div>
    `;

    document.querySelector('.cart-items').appendChild(cartItem);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});







