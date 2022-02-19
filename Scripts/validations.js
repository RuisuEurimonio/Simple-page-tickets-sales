function validationStr(cityOrigin, cityDestiny, name){
    let cities = new RegExp('[a-zA-Z ]{4,30}', 'g');
    let names = new RegExp('[a-z ]{10,50}', 'gi');

    if(cities.test(cityOrigin) && cities.test(cityDestiny) && names.test(name)){
        return true;
    } else {
        return false;
    }
}

function validationInt(placeNumber, identificacion){
    let numbers = new RegExp('[0-9]{1,80}','g');
    let idRegExp = new RegExp('[0-9]{5,12}','g');

    if(numbers.test(placeNumber) && idRegExp.test(identificacion)){
        return true;
    } else {
        return false;
    }
}