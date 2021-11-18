let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let togg5 = document.getElementById("togg5");

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
    d1.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "none";
  }
};
togg2.onclick = togg;

togg3.addEventListener("click", () => {
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
      d2.style.display = "none";
      d1.style.display = "none";
      d4.style.display = "none";
      d5.style.display = "none";
    }
  })
  
  function tog4(){
    if(getComputedStyle(d4).display != "none"){
      d4.style.display = "none";
    } else {
      d4.style.display = "block";
      d2.style.display = "none";
      d3.style.display = "none";
      d1.style.display = "none";
      d5.style.display = "none";
    }
  };
  togg4.onclick = tog4;

  togg5.addEventListener("click", () => {
    if(getComputedStyle(d5).display != "none"){
      d5.style.display = "none";
    } else {
      d5.style.display = "block";
      d2.style.display = "none";
      d3.style.display = "none";
      d4.style.display = "none";
      d1.style.display = "none";
    }
  })