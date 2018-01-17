//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
<<<<<<< HEAD
  $('img').on('load', function() {
      $( this ).addClass('tasty');
=======
  $('img.tasty').on('load', function() {
      $( this ).css( "border", "red" );
>>>>>>> 4eaa5889a6e00ecbedb4d6765d0ecfda075f0c8f
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt() {
$("form").on("submit", function() {
<<<<<<< HEAD
    alert('Your form is going to be submitted now.')});
=======
    alert('your form is going to be submitted now')});
>>>>>>> 4eaa5889a6e00ecbedb4d6765d0ecfda075f0c8f
}

$(document).ready(function(){
// call functions here
});
