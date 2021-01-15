//NAVIGATION
var count=0;
function openNav() {
  if(count==0){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("Navicon").innerHTML = "&#9874;";
  if(document.getElementById("logo").style.color = "#000"){
  document.getElementById("logo").style.color = "#fff";
  }
  count++;
}else{
document.getElementById("Navicon").innerHTML = "&#9776;";
document.getElementById("mySidenav").style.width = "0";
count=0;
}
}


//SCROLL EVENT
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  document.getElementById("Navicon").style.color = "#000";
  document.getElementById("Navicon").style.borderColor = "#000";
  if(document.getElementById("mySidenav").style.width == "250px"){
  document.getElementById("logo").style.color = "#fff";
  }else{
    document.getElementById("logo").style.color = "#000";
    
    
  }}else{
  document.getElementById("logo").style.color = "#fff";
  document.getElementById("Navicon").style.color = "#fff";
   document.getElementById("Navicon").style.borderColor = "#fff";
  }
}


//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


