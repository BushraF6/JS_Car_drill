// Importing modules.
const carsData = require('../cars_inventory.cjs');
const problem2 = require('../problem2.cjs');
// extracting details and storing in lastCarDetails.
const lastCarDetails = problem2(carsData);
// Printing details of last car.
console.log(lastCarDetails);
