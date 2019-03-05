
$(document).ready(function(){
  var toTop = $('#backToTop');
  var toTopTimer;
  console.log('ghjf');
  $(window).on('scroll', function(){
    if ($(window).scrollTop() >= 100){
      toTop.addClass('top-btn__back-to-top_active');
    } else {
      toTop.removeClass('top-btn__back-to-top_active');
      toTop.removeClass('top-btn__back-to-top_focus');

    }
  });
  toTop.on('click',function(){
    toTop.addClass('top-btn__back-to-top_focus');
    $('html, body').animate({scrollTop:0},1000);
    
  });  

});