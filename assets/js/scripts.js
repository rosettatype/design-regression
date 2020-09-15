function toggleClass(node, cls) {
    if (node.className.indexOf(cls) !== -1) {
        node.className = node.className.replace(cls, "")
    } else {
        node.className += " " + cls + " "
    }

}

window.addEventListener("load", function () {

    var toggleMenu = document.querySelectorAll(".toggle-menu"),
        menu = document.getElementById("menu"),
        header = document.getElementById("header")

    for (var i = 0; i < toggleMenu.length; i++) {
        toggleMenu[i].addEventListener("click", function () {
            toggleClass(menu, "open")
            toggleClass(header, "menu-open")
            toggleClass(body, "menu-open")
        })
    }   


})