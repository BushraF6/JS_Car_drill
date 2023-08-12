function cars33Info(carsData) {

  if (Array.isArray(carsData)) {

    carDetails = carsData[32];
    return (`Car 33 is a ${carDetails.car_year} ${carDetails.car_make} ${carDetails.car_model}`);
  
  }else {
  
    return [];
  
  }
  
}

module.exports = cars33Info;