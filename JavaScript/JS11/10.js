jQuery(document).ready(function () {
    $("#task1").mouseover(function () { //ф-я при наведении курсора
        $("#task1").css('color', 'red');
    });
    $('#task1').mouseout(function () {
        $('#task1').css('color', 'black'); //при убирании курсора с объекта
    });
    $('#task2').click(function () {
        $('#task2').css('fontSize', '20px'); //при нажатии на объект
    });
    $('#task3').click(function () {
        $('#task3').attr('src', '2.jpg');
    });
    $('#task4').mouseover(function () {
        $('#task4').html('<img src="1.jpg">');
    });
    $('#task4').mouseout(function () {
        $('#task4').html('смена текста на картинку при наведении мыши');
    });
    $('#task5').mouseover(function () {
        $('#task5').css('width', '500px').css('height', '500px');
    });
    $('#task5').mouseout(function () {
        $('#task5').css('width', '300px').css('height', '300px');
    });
    $('p.last').dblclick(function () {//двойной щелчок по объекту
        $('p.last').css('border', '5px dashed red');
    });


    //Задание 2
    square.onclick = function () { //вып-е функции при нажатии мыши
        let start = Date.now(); //начало старта
        let timer = setInterval(function () { //вып-е кода до остановки clear int
            let timePassed = Date.now() - start; 
            square.style.left = timePassed / 5 + 'px'; //движение вправо
            if (timePassed > 4000) //установка в 4000 пикс 
                clearInterval(timer);//возвр в исх
        }, 10);
    }

});