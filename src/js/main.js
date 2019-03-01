var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var modalTimer; 

function closeModalDialog(){
  try{
    modal.classList.remove('modal_active');
  } catch (error){
    console.log("Диалоговое окно не открыто");
  } 
}

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
  modalTimer = setTimeout(closeModalDialog, 5000);
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});