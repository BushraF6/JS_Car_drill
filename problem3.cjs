function carModels (carsData) {
    if (Array.isArray(carsData)) {

        modelNames = [];

        for (number = 0; number < carsData.length; number ++){
            modelNames.push(carsData[number].car_model);
        }

        return modelNames.sort();
        
    }else {
    
    return [];
    
    }
}

module.exports = carModels;


