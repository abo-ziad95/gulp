
;$(function() {
  var width=$('.slider-box').width();                     // Ширина слайдера.
      interval = 4000;                                    // Интервал смены слайдов.

  $('.slider img:last').clone().prependTo('.slider');     // Копия последнего слайда помещается в начало.
  $('.slider img').eq(1).clone().appendTo('.slider');     // Копия первого слайда помещается в конец.
  $('.slider').css('margin-left', -width);                // Контейнер .slider сдвигается влево на ширину одного слайда.
  setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
});
function animation(){

  var margin = parseInt($('.slider').css('marginLeft'));  // Текущее смещение блока .slider
      width=$('.slider-box').width(),                     // Ширина слайдера.
      slidersAmount=$('.slider').children().length;       // Количество слайдов в слайдере.
  if(margin!=(-width*(slidersAmount-1)))                  // Если текущий слайд не последний,
  {
    margin=margin-width;                                  // то значение margin уменьшается на ширину слайда.
  }else{                                                  // Если показан последний слайд,
    $('.slider').css('margin-left', -width);              // то блок .slider возвращается в начальное положение,
    margin=-width*2;
  }
  $('.slider').animate({marginLeft:margin},1000);          // Блок .slider смещается влево на 1 слайд.
};
//
;$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
$(document).ready(function(){
    $("#form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
      e.preventDefault()
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "../send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            }});
        })
  });
