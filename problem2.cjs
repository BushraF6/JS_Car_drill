function lastCarInfo (carsData) {

    if (Array.isArray(carsData)) {

    carDetails = carsData[carsData.length - 1];
    return (`Last car is a ${carDetails.car_make} ${carDetails.car_model}`);

    }else {

        return [];
    }

}

module.exports = lastCarInfo;

