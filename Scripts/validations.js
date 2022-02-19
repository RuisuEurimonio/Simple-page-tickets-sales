function dataLength(cityO, cityD, date, hour, placeN, id, name){
    let cityOL = cityO.length;
    let cityDL = cityD.length;
    let dateL = date.length;
    let hourL = hour.length;
    let idL = id.length;
    let nameL = name.length;

    if(cityOL > 0 && cityOL < 30 && cityDL > 0 && cityDL < 30 
        && dateL > 0 && hourL > 0 && placeN > 0 && placeN < 80 
        && idL > 5 && idL < 13 && nameL > 10 && nameL < 51){
            return true;
        } else {
            return false;
        }
}

function validationStr(cityOrigin, cityDestiny, name){
    let origins = new RegExp('[a-zA-Z ]{4,30}', 'g');
    let destinies = new RegExp('[a-zA-Z ]{4,30}', 'g');
    let names = new RegExp('[a-zA-Z ]{10,50}', 'g');

    let res1 = origins.test(cityOrigin);
    let res2 = destinies.test(cityDestiny);
    let res3 = names.test(name);

    if(res1 && res2 && res3){
        return true;
    } else {
        return false;
    }
}

function validationInt(placeNumber, identificacion){
    let numbers = new RegExp('[0-9]{1,80}','g');
    let idRegExp = new RegExp('[0-9]{5,12}','g');

    let res1 = numbers.test(placeNumber);
    let res2 = idRegExp.test(identificacion);

    if(res1 && res2){
        return true;
    } else {
        return false;
    }
}