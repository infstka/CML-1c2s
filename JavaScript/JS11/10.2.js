$(document).ready(function () { //вып-е функции при полн загрузке Dom

});

function draw() {
    var cw = 300, //ширина формы
        ch = 300;//высота
    var ctx = document.getElementById('canvas').getContext('2d');//возвр эл-а по айди + контекста рисования
    var m = 25;
    for (x = -cw / 2 / m; x < cw / 2 / m; x += 1 / m) {
        eval(document.forms['one'].elements['s'].value);//вып-е кода, предс строкой
        ctx.fillRect(x * m + cw / 2, ch - (y * m + ch / 2), 1, 1);//заливка прямоугольника
        ctx.fillStyle = document.getElementById('h').value;//стиль заливки
}
    }
}