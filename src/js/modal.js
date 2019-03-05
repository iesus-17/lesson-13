$(document).ready(function(){
  var button = $('#button');
  var close = $('#close');
  var modal = $('#modal');

  button.on('click', function(){
    modal.addClass('modal_active');
   // modalTimer = setTimeout( modal.removeClass('modal_active'), 5000);
  });
  close.on('click',function(){
    modal.removeClass('modal_active');
  });
});