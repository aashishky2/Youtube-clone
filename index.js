var menuicon =document.querySelector(".menu_icon");
var sidebar =document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function(){
    sidebar.classList.toggle("small_sidebar");
    container.classList.toggle("large_container")
}