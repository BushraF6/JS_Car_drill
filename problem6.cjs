function carsBA (carsData) {
    if (Array.isArray(carsData)) {
        carInfo = [];
        for (number = 0; number < carsData.length; number ++){

            if (carsData[number].car_make==='BMW' || carsData[number].car_make==='Audi'){
                carInfo.push(carsData[number]);
            }    
        }
    
        return JSON.stringify(carInfo);
        
    }else {
    
    return [];
    
    }
      
}

module.exports = carsBA;
