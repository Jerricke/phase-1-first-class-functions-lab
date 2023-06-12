// Code your solution in this file!

function returnFirstTwoDrivers(driverList) {
    const newList = [...driverList];
    return newList.splice(0,2)
}

function returnLastTwoDrivers(driverList) {
    const newList = [...driverList];
    return newList.splice(2,2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (mult) => {
    function fareMult(fare) {
        return fare * mult
    }
    return fareMult;
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (arrayOfDrivers, aFunction) => {
    return aFunction(arrayOfDrivers)
}