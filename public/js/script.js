/*Header при скролле*/

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });
});

/*Выпадающее меню*/

$(document).ready(function() {
  $('.header_hamburger').click(function(){
    if ($('.sidebar').hasClass('active')){
      $('.header_hamburger').removeClass('active');
      $('.sidebar').removeClass('active');
      $('body').removeClass('ov-hid');
    } else{
      $('.header_hamburger').addClass('active');
      $('.sidebar').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});