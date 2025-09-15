// Simulate ordering food
function orderFood(food) {
    return new Promise((resolve, reject) => {
        console.log(`Order received for ${food}. Cooking...`);

        setTimeout(() => {
            const kitchenBusy = true; // imagine kitchen is available
            if (!kitchenBusy) resolve(`${food} is ready! 🍽️`);
            else reject(`Sorry, ${food} can't be prepared right now.`);
        }, 2000); // takes 2 seconds to “cook”
    });
}

// Using the promise
orderFood("Pizza")
    .then(result => {
        console.log(result); // success
        return "Sending delivery boy 🚴";
    })
    .then(delivery => {
        console.log(delivery);
    })
    .catch(error => {
        console.log(error); // failure
    });

console.log("Order placed, waiting for food...");


//promise is a placeholder for future data
//promise is callback but with single catch and better readibility