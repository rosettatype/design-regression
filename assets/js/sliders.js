window.addEventListener("load", function () {

    let sliders = document.querySelectorAll(".slideshow")

    if (sliders.length === 0) {
        return
    }

    sliders.forEach(s => {
        let slider = tns({
            container: s,
            items: 1,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            onInit: function (s) {
                console.log("init", s)
                s.container.addEventListener("click", function () {
                    console.log("next")
                    slider.goTo('next')
                })
            }
        });
    })
})