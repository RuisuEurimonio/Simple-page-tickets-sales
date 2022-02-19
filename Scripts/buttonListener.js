var button = document.getElementById("sendInfo");
button.addEventListener("click", getData);

function getData(event){
    event.preventDefault();
    let cityOrigin = document.getElementById("cityOrigin").value;
    let cityDestiny = document.getElementById("cityDestiny").value;
    let date = document.getElementById("date").value;
    let hour = document.getElementById("hour").value;
    let placeNumber = document.getElementById("placeNumber").value;
    let identification = document.getElementById("identification").value;
    let name = document.getElementById("name").value;

    let length = dataLength(cityOrigin, cityDestiny,date,hour,placeNumber, identification, name);

    if(length){
        let strings = validationStr(cityOrigin, cityDestiny, name);
        let numbers = validationInt(placeNumber, identification);
        if(strings && numbers){
            cleanInputs();
            alertSuccessfull();
        } else {
            alert("Hay datos que no cumplen con la forma solicitada.")
        }
    } else {
        alert("Hay datos que faltan o que no cumplen con el tamaño ideal.");
    }
}

function cleanInputs(){
    document.getElementById("cityOrigin").value = "";
    document.getElementById("cityDestiny").value = "";
    document.getElementById("date").value = "";
    document.getElementById("hour").value = "";
    document.getElementById("placeNumber").value = "";
    document.getElementById("identification").value = "";
    document.getElementById("name").value = "";
}

function alertSuccessfull(){
    let alert = document.getElementById("alertForm");
    alert.classList.toggle("invisible");
    alert.classList.toggle("visible");
    setTimeout(()=>{
        alert.classList.toggle("invisible");
        alert.classList.toggle("visible");
    }, 6000);
}