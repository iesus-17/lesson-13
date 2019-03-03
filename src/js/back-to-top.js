
$(document).ready(function(){
  var toTop = $('#backToTop');
  var toTopTimer;
  console.log('ghjf');
  $(window).on('scroll', function(){
    if ($(window).scrollTop() >= 400){
      toTop.addClass('back-to-top_active');
    } else {
      toTop.removeClass('back-to-top_active');
      toTop.removeClass('back-to-top_focus');

    }
  });
  toTop.on('click',function(){
    toTop.addClass('back-to-top_focus');
    $('html, body').animate({scrollTop:0},1000);
    
  });  

});