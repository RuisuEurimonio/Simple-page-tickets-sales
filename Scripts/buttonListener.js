var button = document.getElementById("sendInfo");
button.addEventListener("click", getData);

function getData(){
    document.preventDefault();
    let cityOrigin = document.getElementById("cityOrigin");
    let cityDestiny = document.getElementById("cityDestiny");
    let date = document.getElementById("date");
    let hour = document.getElementById("hour");
    let placeNumber = document.getElementById("placeNumber");
    let identification = document.getElementById("identification");
    let name = document.getElementById("name");

    let strings = validationStr(cityOrigin, cityDestiny, name);
    let numbers = validationInt(placeNumber, identification);

    if(strings && numbers && (date.length() > 0) && (hour.length() > 0)){
        console.log("sisas");
    } else {
        console.log("nokas");
    }
}