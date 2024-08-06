let navbar = document.querySelector("nav");
let scrollPrevious = window.scrollY;

window.onscroll = function(){
    let scrollCurrent = window.scrollY;
    if(scrollPrevious > scrollCurrent ){
        navbar.style.top = "0px"
    }else{
        navbar.style.top = "-90px"
    }
    scrollPrevious = scrollCurrent ;
}
