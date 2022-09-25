function geoposition() {
navigator.geolocation.getCurrentPosition(showCoordinates); //определение текущего местоположения
}
function showCoordinates(position) {
document.getElementById('latitude').append(position.coords.latitude); //определение широты
document.getElementById('longitude').append(position.coords.longitude);//определение долготы
}


function printInfo() {
    let email = document.getElementById('inputEmail').value; //вывод значения элемента по его id
    document.getElementById('emailInfo').append(email);//вставка содержимого,  заданного параметром
    let name = document.getElementById('inputName').value;//вывод значения элемента по его id
    document.getElementById('nameInfo').append(name);//вставка содержимого,  заданного параметром
    let phone = document.getElementById('inputPhone').value;//вывод значения элемента по его id
    document.getElementById('phoneInfo').append(phone);//вставка содержимого,  заданного параметром
    let course = document.getElementById('inputCourse').value;//вывод значения элемента по его id
    document.getElementById('courseInfo').append(course);//вставка содержимого,  заданного параметром
}
