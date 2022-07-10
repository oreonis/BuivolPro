$(function(){

  $('.product__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img class="arrow-img" src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="arrow-img" src="images/arrow-right.svg" alt=""></button>'
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });


  $(".menu a, .go-top, .header__icon").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);

  });
  /*  $(document).scroll(function () {
     if ($(document).scrollTop() > $('header').height () + 10)
       $('.header__top').addClass('header__top--fixed');
     else
       $('.header__top').removeClass('header__top--fixed');

   }); */



  new WOW().init();

 
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!\nНаш консультант свяжится с Вами в ближайшее время.");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  }); 

 
 

});

