var foto = document.querySelectorAll("img");
var tv = document.querySelector("tv");

foto.forEach((item) => {
  item.addEventListener("click", start);
  
      function start() {

    this.classList.toggle("aktive");
                
  }
});

function tvOpen(){
    result.classList.toggle("span2");

}