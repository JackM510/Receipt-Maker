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

/* The getPrices() function is used to apply a tax value of '1.20' to all of the dishes 
in the dishData Array based on whether the parameter taxBoolean is true or false. */
function getPrices(taxBoolean) {
    for (const dish of dishData) {
        let finalPrice;
        if (taxBoolean == true) { // If the taxBoolean parameter is true
            finalPrice = dish.price * tax; // Multiply the price of each dish by the tax value
        } 
        else if (taxBoolean == false) { // Else if the taxBoolean parameter is false
            finalPrice = dish.price; // The price of each dish will have no tax applied
        } else {
            console.log("You need to pass a boolean to the getPrices call!"); // Console log for missing taxBoolean parameter
            return;
        }
        // Each for loop iteration will log the dish name a price to the console
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

/* The getDiscount() function is used to evaluate the total discount value based
on the number of guests specified using the guests parameter. */    
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean); // Calls the getPrices() function to apply tax to dishes
    if (typeof guests == 'number' && guests > 0 && guests < 30) {
        let discount = 0; // Discount is 0 by default.
        if (guests < 5) { 
            discount = 5; // Discount of 5 applied for <5 guests
        } else if (guests >= 5) {
            discount = 10; //Discount of 10 applied for >=5 guests
        }
        console.log(`Discount is: $` + discount); // Log the discount value to the console
    } else {
        console.log("The second argument must be a number between 0 and 30"); // Console log for guests parameter outside the value of 0-30
    }
}

/* Calling getDiscount() to determine if tax is applied to dishes and the discount value */
getDiscount(true, 2); // Returns dishes with tax applied and a discount of 5 for 2 guests
getDiscount(false, 10); // Returns dishes with no tax applied and a discount of 10 for 10 guests
/* A couple of test calls with varying parameters */
getDiscount(); // No parameters passed: returns "You need to pass a boolean to the getPrices call!" & "The second argument must be a number between 0 and 30"
getDiscount(null, "hello"); // Invalid parameters passed: returns "You need to pass a boolean to the getPrices call!" & "The second argument must be a number between 0 and 30"
