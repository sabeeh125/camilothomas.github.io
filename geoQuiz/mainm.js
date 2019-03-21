let paragraph = document.querySelector('p');




/*
TOUCH EVENTS
*/
let mousePos;
document.addEventListener("touchstart") = function(e) {
  paragraph.textContent = 'Maria Angeles';;
};
/*
canvas.ontouchup = function() {
  pressed = false;
};

// update mouse pointer coordinates

document.ontouchmove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? 
    document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ?
    document.documentElement.scrollTop : document.body.scrollTop);
} */