document.getElementById('nav').onmouseover = function (event) {
    //отслеживает нахождение мыши внутри блока
    var target = event.target;
    //отслеживаем клик
    if (target.className == 'menu-item') {
    var s = target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display='block'; 
    //массив, содерж ложное меню
    }
    };
    document.onmouseover=function (event) { //при наведении на объект = вып-е функции
    var target = event.target;//содерж элемент на котором сработало событие
    console.log(event.target);//вывод сообщения
    if (target.className != 'menu-item' && target.className!='submenu') {
    closeMenu();  //если не открыто 1 или 2 = закрыть меню
    }
    }
    function closeMenu(){
    var menu = document.getElementById('nav'); //возвр эл-а по айди
    var subm = document.getElementsByClassName('submenu');//возвращает массив
    for (var i=0; i <subm.length; i++){
    subm[i].style.display ="none";
    }
    }