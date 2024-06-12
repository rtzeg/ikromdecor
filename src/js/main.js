let doc = document,
    category_container = doc.querySelector(".category_container");
var swiper = new Swiper(".swiper",
    {
        slidesPerView: 6,
        spaceBetween: 0,
        loop: !0,
        breakpoints: {
            1440: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            320: { slidesPerView: 3 },

        }
    }),
    swiper2 = new Swiper(".swiper2",
        {
            slidesPerView: 6, loop: !0,
            spaceBetween: 94.69, autoplay: { delay: 2e3 },
            breakpoints: {
                1440: { slidesPerView: 6 }, 768: { slidesPerView: 4 },
                630: { slidesPerView: 3 }, 390: { slidesPerView: 2, spaceBetween: 10 }
            }
        }),
    swiper3 = new Swiper(".swiper3",
        {
            spaceBetween: 30, pagination: {
                el: ".swiper-pagination", clickable: !0
            }
        }),
    swiper4 = new Swiper(".swiper4",
        {
            slidesPerView: 3,
            spaceBetween: 30,
            breakpoints: {
                1024: { slidesPerView: 3 },
                600: {
                    slidesPerView: 2,
                    centeredSlides: !0
                },
                320: { slidesPerView: 1 }
            }
        });
let video = document.querySelector("video"),
    button = document.querySelector(".video_btn");
video.addEventListener("click", (function () { video.paused ? (video.play(), button.style.display = "none") : (video.pause(), button.style.display = "block") })), button.addEventListener("click", (function () {
    video.paused ? (video.play(), button.style.display = "none") : (video.pause(), button.style.display = "block")
}));


