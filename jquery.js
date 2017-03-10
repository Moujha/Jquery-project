$(document).ready(function () {

grid();


$("p").hover(function () {
$(this).css("background-color","#B9121B");
},   function(){
 $(this).css("background-color","#B9121B");
  });

$('button').click(function () {
$("p").remove();
grid();
});




});


function grid () {
var height = prompt("Nombre de lignes");
var width = prompt("Nombre de colonnes");
console.log("La fonction a commencée");
for (var i = 0; i < height*width; i++) {
   
  $(".container").append("<p>");
   console.log("on crée des divs");
  };

$("p").height((600/height)-13);
$("p").width((1100/width)-10);
}