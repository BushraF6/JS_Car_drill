// Importing modules.
const carsData = require('../cars_inventory.cjs');
const problem6 = require('../problem6.cjs');
// extracting details and storing in carYears.
const carBmwAudi = problem6(carsData);
// Printing details of each car's year.
console.log(carBmwAudi);
