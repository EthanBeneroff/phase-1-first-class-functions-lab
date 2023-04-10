// Code your solution in this file!
const returnFirstTwoDrivers = function(nameArray){
   const newArray = nameArray.slice(0,2);
   return newArray;
}

const returnLastTwoDrivers = function(nameArray){
    const newArray = nameArray.slice(-2)
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){return multiplier*fare}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, driverFunction){
    return driverFunction(names);
}