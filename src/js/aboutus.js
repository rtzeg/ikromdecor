let doc = document
let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
    window.location.href = "/search.html"
})

var swiper = new Swiper(".swiper",
    {
        watchSlidesProgress: !0,
        slidesPerView: 6,
        spaceBetween: 0,
        loop: !0,
        breakpoints: {
            320: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 6 }
        }
    })