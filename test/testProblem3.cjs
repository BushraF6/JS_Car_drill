// Importing modules.
const carsData = require('../cars_inventory.cjs');
const problem3 = require('../problem3.cjs');
// extracting details and storing in carsModelNames.
const carModelNames = problem3(carsData);
// Printing model names.
console.log(carModelNames);

