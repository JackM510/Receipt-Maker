// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Used to apply a tax value to all dishes if taxBoolean equals true
function getPrices(taxBoolean) {
    for (const dish of dishData) {
        let finalPrice;
        if (taxBoolean == true) { // taxBoolean true
            finalPrice = dish.price * tax; // Tax value applied
        } 
        else if (taxBoolean == false) { // taxBoolean false
            finalPrice = dish.price; // No tax applied
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

// Used to calculate the total discount based on the number of guests specified    
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean); // Calls the getPrices() function to apply tax to dishes
    if (typeof guests == 'number' && guests > 0 && guests <= 30) {
        let discount = 0; // Discount is 0 by default.
        if (guests <= 5) { 
            discount = 5; // Discount of 5 applied for <=5 guests
        } else if (guests >= 6) {
            discount = 10; //Discount of 10 applied for >=6 guests
        }
        console.log(`Discount is: ${discount}\n`); // Log the discount value to the console
    } else {
        console.log("The second argument must be a number between 0 and 30\n");
    }
}

// Test calls to determine if tax is applied to dishes and total discount value
getDiscount(true, 2); // Returns dishes with tax applied and a discount of 5
getDiscount(false, 10); // Returns dishes with no tax applied and a discount of 10

// Default condition test calls
getDiscount(); // Returns "You need to pass a boolean to the getPrices call!" & "The second argument must be a number between 0 and 30"
getDiscount(null, "hello"); // Returns "You need to pass a boolean to the getPrices call!" & "The second argument must be a number between 0 and 30"
