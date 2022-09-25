var xml;
function readFile() {
var files = button.files;
var reader = new FileReader();
var file = files[0];
reader.readAsText(file);
reader.onload = function (e) {
xml = e.target.result;
}
}
function print() {
if (window.DOMParser) {
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml, "text/xml");
} else {
xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = false;
xmlDoc.loadXML(xml);
}
console.log(xmlDoc);
var name = xmlDoc.getElementsByTagName("name");
var ball = xmlDoc.getElementsByTagName("ball");
var date = xmlDoc.getElementsByTagName("date");
var surname = xmlDoc.getElementsByTagName("surname");
var newElement = document.createElement("div");
newElement.innerHTML = "имя: " + name[0].innerHTML + "<br /> фамилия: " + surname[0].innerHTML + "<br /> балл: " + ball[0].innerHTML + "<br /> дата рождения : " + date[0].innerHTML + "<br />";
parent.appendChild(newElement);
}
var parent = document.getElementById("parent"); 
var button = document.getElementById("button");
var printButton = document.getElementById("print");
button.addEventListener("change", readFile);
printButton.addEventListener("click", print);