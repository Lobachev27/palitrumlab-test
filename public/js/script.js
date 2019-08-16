/*Header при скролле*/

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 350) {
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

/*Параллакс*/

(function($){
  $.fn.bgscroll=function(options){
    var x=$.extend({bgpositionx:50,direction:"bottom",debug:!1,min:0,max:100},options);
    var a=$(document).height()-$(window).height(),b=a-(this.offset().top+this.height());
    this.offset().top<a&&(b=0);
    var c=(this.offset().top+this.height());
    if($(window).scrollTop()>b && $(window).scrollTop()<c){
      var d=($(window).scrollTop()-b)/(c-b)*100;
      "top"==x.direction&&(d=100-d),d>x.max&&(d=x.max),d<x.min&&(d=x.min);
      if(x.debug)console.log('Element background position: '+d+' %');
    }
    return this.css({
      backgroundPosition: x.bgpositionx+'% '+d+'%'
    });
  };
}(jQuery));

$(window).scroll(function(){
  $('.intro').bgscroll();
});
