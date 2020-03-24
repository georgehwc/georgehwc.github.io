console.log("hello js is working");



function showMenu() {
    var x = document.getElementById("chk");
    var y = document.getElementById("menu");
    if (x.checked) {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }

}

window.onscroll = function() { navBarsettop() };

var navbar = document.getElementById("top_menu");
//var main = document.getElementById("main");

var sticky = navbar.offsetTop;

function navBarsettop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.getElementById("main").style.margin = "60px 0 0 0";

    } else {
        navbar.classList.remove("sticky");
        document.getElementById("main").style.margin = "0 0 0 0";
    }

}



function background() {

    var searchIndex = window.location.href.search("About.html");

    if (searchIndex > -1) {
        document.getElementById("main").classList.add("mainAbout");

    }


    document.getElementById("bot_footer").style.position = "relative";


}