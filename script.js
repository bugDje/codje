let navBar = document.querySelector("nav");
let menuBar = document.querySelector(".menu");
let scrollDown = navBar.querySelectorAll("li .scroll-down");

let scrollPrevious = window.scrollY;

window.onscroll = function () {
  let scrollCurrent = window.scrollY;
  if (scrollPrevious > scrollCurrent) {
    navBar.style.top = "0px";
    menuBar.style.bottom = "-90px";
  } else {
    navBar.style.top = "-90px";
    menuBar.style.bottom = "0px";
  }
  scrollPrevious = scrollCurrent;
};
imgFull.addEventListener("click", () => {
  scroll(0, 100);
});

menuFooter.addEventListener("click", () => {
  scroll(0, 0);
});

scrollDown.forEach(function(user){
  user.addEventListener("click", ()=>{
    scroll(0, 100);
  })
});
