/**
 * Simple vanilla helpers
 */


function toggleClass(node, cls) {
    if (!node || !cls) {
        console.warn("node or cls undefined in toggleClass()")
        return
    }
    if (node.className.indexOf(cls) !== -1) {
        removeClass(node, cls)
    } else {
        addClass(node, cls)
    }
}

function addClass(node, cls) {
    if (!node || !cls) {
        console.warn("node or cls undefined in addClass()")
        return
    }

    if (node.className.indexOf(cls) === -1) {
        node.className += " " + cls + " "
        trimClass(node)
    }
}

function removeClass(node, cls) {
    if (!node || !cls) {
        console.warn("node or cls undefined in removeClass()")
        return
    }

    if (node.className.indexOf(cls) !== -1) {
        node.className = node.className.replace(cls, "")
        trimClass(node)
    }

}

function trimClass(node) {
    if (!node) {
        console.warn("node undefined in trimClass()")
        return
    }

    // Replace any spaces at the beginning or end, or more than one space
    // anywhere in the className
    node.className = node.className.trim().replace(/\s{2,}/, " ")
}


/**
 * Page scripts
 */
window.addEventListener("load", function () {

    var toggleMenu = document.querySelectorAll(".toggle-menu"),
        menu = document.getElementById("menu"),
        body = document.getElementsByTagName("body")[0],
        html = document.getElementsByTagName("html")[0]

    // Showing and hiding the menu
    function onToggleMenu() {
        toggleClass(menu, "open")
        toggleClass(body, "menu-open")
    }

    for (var i = 0; i < toggleMenu.length; i++) {
        toggleMenu[i].addEventListener("click", onToggleMenu)
    }

    // Hiding the menu button tagline on scroll
    var frontpageRight = document.querySelector(".split main")
    if (frontpageRight) {
        frontpageRight.addEventListener("scroll", function () {
            if (frontpageRight.scrollTop > 30) {
                addClass(body, "scrolled")
            } else {
                removeClass(body, "scrolled")
            }
        })
    }

})