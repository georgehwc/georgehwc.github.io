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

    } else {
        //alert("test1");
        var searchIndex = window.location.href.search("school.html");
        if (searchIndex > -1) {

            //alert("test2");
            document.getElementById("main").classList.add("mainSchool");
        } else {

            var searchIndex = window.location.href.search("mypet.html");
            if (searchIndex > -1) {

                document.getElementById("main").classList.add("mainPet");
            }
        }
    }
    document.getElementById("bot_footer").style.position = "relative";
}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img1 = document.getElementById("szetoho");
img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var img2 = document.getElementById("dmu");
img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}