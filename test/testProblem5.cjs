// Importing modules.
const carsData = require('../cars_inventory.cjs');
const problem4 = require('../problem4.cjs');
const problem5 = require('../problem5.cjs');
// extracting details and storing in yearsList and oldCarYears.
const yearsList = problem4(carsData);
const oldCarYears = problem5(yearsList);
// Printing oldCarYears list length.
console.log(oldCarYears.length);