function geoposition() {
navigator.geolocation.getCurrentPosition(showCoordinates); //определение текущего местоположения
}
function showCoordinates(position) {
document.getElementById('latitude').append(position.coords.latitude); //определение широты
document.getElementById('longitude').append(position.coords.longitude);//определение долготы
}
