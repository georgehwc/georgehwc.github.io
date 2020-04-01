function background() {

    document.getElementById("main").classList.add("mainindex");
    setTimeout(typeWriter, 2500);
    // typeWriter();
    console.log("js is working");
}

function showMenu() {
    var x = document.getElementById("chk");
    var y = document.getElementById("menu");
    if (x.checked) {
        y.style.height = "40vh";
    } else {
        y.style.height = "0";
    }

}

var i = 0;
var txt = ' This page is create 100% by my self manually!'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var i = 1; //  set your counter to 1

function myLoop() { //  create a loop function
    setTimeout(function() { //  call a 3s setTimeout when the loop is called
        alert('hello'); //  your code here
        i++; //  increment the counter
        if (i < 10) { //  if the counter < 10, call the loop function
            myLoop(); //  ..  again which will trigger another 
        } //  ..  setTimeout()
    }, 3000)
}


// const menuToggle = document.getElementById("menu-toggle");
// const menuNav = document.getElementById("menu-nav");

// const toggleMenu = () => {
//     console.log("called toggleMenu")
//     menuNav.classList.toggle("menu-toggle");
// }

// menuToggle.addEventListener("click", toggleMenu);