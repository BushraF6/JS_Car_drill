function carYears (carsData) {
    if (Array.isArray(carsData)) {
        yearsList = [];

        for (number = 0; number < carsData.length; number ++){
            yearsList.push(carsData[number].car_year);
        }

        return yearsList.sort();
        
    }else {
      
        return [];
      
    }      
}

module.exports = carYears;


