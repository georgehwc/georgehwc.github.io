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