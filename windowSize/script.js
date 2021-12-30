const body = document.querySelector("body");

function ColorByRize(){
  if(window.innerWidth<400){
    body.className="";
    body.classList.add("sizeS");
  }
  else if (window.innerWidth>=400 && window.innerWidth<600){
    body.className="";
    body.classList.add("sizeM");
  }else if(window.innerWidth>=600)
  {
    body.className="";
    body.classList.add("sizeL");
  }
}

window.addEventListener("resize", ColorByRize);