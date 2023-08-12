// Importing modules.
const carsData = require('../cars_inventory.cjs');
const problem4 = require('../problem4.cjs');
// extracting details and storing in carYears.
const carYears = problem4(carsData);
// Printing details of each car's year.
console.log(carYears);