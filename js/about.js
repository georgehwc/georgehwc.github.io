console.log("hello js is working");



function showMenu() {
    var x = document.getElementById("chk");
    var y = document.getElementById("menu");
    if (x.checked) {
        y.style.height = "0";

    } else {
        // y.style.display = "flex";
        y.style.height = "300px";
    }

}

window.onscroll = function() { navBarsettop() };

var navbar = document.getElementById("top_menu");
var main = document.getElementById("main");

var sticky = navbar.offsetTop;

function navBarsettop() {
    var x = document.getElementById("chk");
    var y = document.getElementById("menu");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.getElementById("main").style.margin = "65px 0 0 0";
        y.style.marginTop = "55px";
        y.style.position = "fixed";
        // if (x.checked) {
        //     y.style.position = "fixed";

        // }

    } else {
        navbar.classList.remove("sticky");
        document.getElementById("main").style.margin = "0 0 0 0";

        y.style.position = "flex";
        y.style.marginTop = "0px";

    }

}

function background() {
    var test = window.location.pathname.split("/").pop()

    var page;
    switch (test) {
        case "About.html":
            document.getElementById("main").classList.add("mainAbout");
            showimg(test);
            showmore();
            break;
        case "school.html":
            document.getElementById("main").classList.add("mainSchool");
            showimg(test);
            showmore();
            break;
        case "mypet.html":
            document.getElementById("main").classList.add("mainPet");
            showimg(test);
            break;

        case "index.html":
            document.getElementById("main").classList.add("mainindex");
            setTimeout(typeWriter, 2500);
            break;

        default:
            alert("You went to a wrong page?");
            break;

    }
}

var i = 0;
var txt = ' This page is create 100% by my self manually!';
var speed = 70;

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var i = 1;

function myLoop() {
    setTimeout(function() {
        alert('hello');
        i++;
        if (i < 10) {
            myLoop();
        }
    }, 3000)
}

function showmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("Btnmore");

    btnText.onclick = function() {

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }


}

//-----------show img
function showimg(page) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
    switch (page) {
        case "About.html":

            var img1 = document.getElementById("mta-logo");
            img1.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            break;
        case "school.html":

            var img1 = document.getElementById("szetoho");
            img1.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;

                }
                // document.getElementById("body").scroll = "no";
                // alert("test start");
            var img2 = document.getElementById("dmu");
            img2.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }


            break;

        case "mypet.html":
            var pet1 = document.getElementById("pet1");
            pet1.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var pet2 = document.getElementById("pet2");
            pet2.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var pet3 = document.getElementById("pet3");
            pet3.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
                // var pet4 = document.getElementById("pet9");
                // pet4.onclick = function() {
                //     modal.style.display = "block";
                //     modalImg.src = this.src;
                //     captionText.innerHTML = this.alt;
                // }
            var pet5 = document.getElementById("pet5");
            pet5.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var pet6 = document.getElementById("pet6");
            pet6.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var pet7 = document.getElementById("pet7");
            pet7.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var pet8 = document.getElementById("pet8");
            pet8.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }

            break;

    }

}