/*кнопки для открытия формы*/
var button = document.querySelectorAll('.orange-button');

/* получение блока формы */
var form = document.querySelector('.form');

/* получение кнопки для закрытия формы */
var from_close_button = document.querySelector('.form span');
/*кнопка отправки дынных формы */
var send_button = document.querySelector('#send_data');

/* закрытие формы */
from_close_button.onclick = function(){
    $(form).fadeOut(400);
    /*menu_wrapper.style.display = 'block';*/
};

/* функция получения координат */
function getCoords(elem){
    var box = elem.getBoundingClientRect();
    var res = 0;
    return res = box.top + pageYOffset + 100;
}

/* открытие формы при нажатии на кнопку */
for(var i = 0; i < button.length; i++){
    button[i].onclick = function(){
        var form_coord = Math.round(getCoords(this));
        var top_coord = $(this).offset().top;
        $('body, html').animate({scrollTop: top_coord - 400}, 1000);
        /*menu_wrapper.style.display = 'none';*/
        form.style.top = form_coord + 'px';
        form.style.display = "block";
    };
}

var menu_buttons = document.querySelectorAll('.navigation li')

/*меню плавного перехода к нужному блоку*/
$(menu_buttons[0]).click(function(){
    var top_project = $('#services').offset().top;
    $('body, html').animate({scrollTop: top_project}, 1000);
});

$(menu_buttons[1]).click(function(){
    var top_project = $('#our-works').offset().top;
    $('body, html').animate({scrollTop: top_project}, 1000);
});
