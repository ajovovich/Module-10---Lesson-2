//Task 1: Implement a Conditional Statement

let isLoggedIn = true;

function addToCart(product) {
    if (isLoggedIn) {
        // Logic to add the product to the cart
        console.log(`${product} added to the cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}

//Task 2: Use a Loop to Display Products

let products = ['Apple', 'Banana', 'Orange', 'Grapes'];
let cart = [];

function displayProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]}`);
    }
}

function chooseProduct(index) {
    if (index >= 0 && index < products.length) {
        addToCart(products[index]);
        cart.push(products[index]);
    } else {
        console.log("Invalid product selection.");
    }
}

displayProducts();
chooseProduct(0); // Adds Apple to the cart
chooseProduct(2); // Adds Orange to the cart

//Task 3: Calculate the Total Cost

let prices = {
    'Apple': 1.00,
    'Banana': 0.50,
    'Orange': 0.75,
    'Grapes': 2.00
};

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += prices[cart[i]];
    }
    console.log(`Total cost: $${total.toFixed(2)}`);
}

calculateTotal(); // Calculates total cost of items in the cart

