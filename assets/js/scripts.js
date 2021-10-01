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

    window.addEventListener("scroll", function () {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scroll > 30) {
            addClass(body, "scrolled")
        } else {
            removeClass(body, "scrolled")
        }
    })

    if (frontpageRight) {
        frontpageRight.addEventListener("scroll", function () {
            if (frontpageRight.scrollTop > 30) {
                addClass(body, "scrolled")
            } else {
                removeClass(body, "scrolled")
            }
        })
    }

    /**
     * Placeing sidenotes next to their markers
     */
    var sidenotes = document.querySelectorAll("aside[id^='sn:']"),
        markers = document.querySelectorAll("a[href^='#sn:']"),
        lastDocumentHeight = 0;

        console.log(sidenotes, markers)
    if (sidenotes) {
        window.addEventListener("resize", onResize)

        // Try wait for the webfonts to load before doing any initial
        // positioning
        var textFont = new FontFaceObserver("AdapterPEVF"),
            monoFont = new FontFaceObserver("AdapterMonoVF")
        Promise.all([textFont.load(), monoFont.load()]).then(function () {
            console.debug("fonts loaded")
            onResize()
        }, function () {
            console.debug("fonts timed out")
            onResize()
        })

        markers.forEach(function (marker) {
            marker.addEventListener("click", function (e) {

                // On desktop just flash the sidebote, on mobile use default
                // behaviour and scroll to
                if (window.innerWidth > 1024) {
                    e.preventDefault()

                    var anchor = marker.href.substr(marker.href.indexOf("#") + 1),
                        note = document.querySelector("aside[id='" + anchor + "']")

                    note.className += " flash"
                    setTimeout(function () {
                        note.className = note.className.replace(/\sflash/, "")
                    }, 500)
                }
            })
        })
    }

    function onResize() {
        var previousNoteEnd = 0

        sidenotes.forEach(function (note) {
            note.style.transform = "";
            note.style.opacity = "0";
        })

        if (window.innerWidth > 1024) {
            sidenotes.forEach(function (note) {
                try {
                    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                        marker = document.querySelector("a[href='#" + note.id + "']"),
                        marker_top = scroll + marker.getBoundingClientRect().top,
                        note_top = scroll + note.getBoundingClientRect().top,
                        note_height = note.getBoundingClientRect().height,
                        top = (Math.max(previousNoteEnd, marker_top) - note_top)

                    console.debug(marker.href.substr(marker.href.indexOf("#")), 
                        document.body.scrollTop, marker_top, note_top, "translate", top)

                    note.style.transform = "translateY(" + top + "px)"
                    note.style.opacity = "1";

                    previousNoteEnd = note_top + top + note_height
                } catch (e) {
                    console.error(e)
                }
            })
        } else {
            sidenotes.forEach(function (note) {
                note.style.opacity = "1";
            })
        }

        // Crude, but: while the document keeps changing lenth we assume new
        // assets are being loaded and rendered, so keep on updating the
        // positions
        var h = document.querySelector("body").getBoundingClientRect().height
        if (h !== lastDocumentHeight) {
            lastDocumentHeight = h
            setTimeout(onResize, 500)
        }
    }
})
