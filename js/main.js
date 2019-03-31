 var quadra = document.querySelector('.quadra');

 quadra.addEventListener('click', function() {
 		var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    var randomColor='#' + r + g + b;
    quadra.style.cssText = "background-color: " + randomColor; 
 })