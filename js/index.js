function background() {

    document.getElementById("main").classList.add("mainindex");

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

// const menuToggle = document.getElementById("menu-toggle");
// const menuNav = document.getElementById("menu-nav");

// const toggleMenu = () => {
//     console.log("called toggleMenu")
//     menuNav.classList.toggle("menu-toggle");
// }

// menuToggle.addEventListener("click", toggleMenu);