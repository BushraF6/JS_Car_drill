function oldCar (yearsList) {
    if (Array.isArray(yearsList)) {

        old = [];

        for (num = 0; num < yearsList.length; num ++){
    
            if (yearsList[num] < 2000){
                old.push(yearsList[num]);
            }
        }
        return old;
      
    }else {
    
    return [];
    
    }
      
}

module.exports = oldCar;
