const colors = ["green", "blue", "purple", "orange", "black"];
const h2 = document.querySelector("h2");

function titleMouseEnter(){
  h2.innerText = "The mouse is here!";
  h2.style.color = colors[0];
}
function titleMouseLeave(){
  h2.innerText = "The mouse is gone!";
  h2.style.color = colors[1];
}
function windowResize(){
  h2.innerText = "You just resized!";
  h2.style.color = colors[2];
}

function windowRightClick(){
    h2.innerText = "That was a right click!";
    h2.style.color = colors[3];
}

h2.addEventListener("mouseenter", titleMouseEnter);
h2.addEventListener("mouseleave", titleMouseLeave);
window.addEventListener("resize", windowResize);
window.addEventListener("mousedown", (event)=>{
  if(event.button == 2){
    windowRightClick();
  }
  else{
    h2.innerText = "Hello!";
    h2.style.color = colors[4];
  }
});
