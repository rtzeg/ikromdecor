let url = window.location.href;

var swiper3 = new Swiper(".swiper3",
    {
        spaceBetween: 30,
        autoplay: { delay: 5e3 },
        pagination: { el: ".swiper-pagination", clickable: !0 }
    });
// если ikromdecor.uz то
let backend_url = `backend.${url}`
let url_id = url.slice(url.lastIndexOf('=') + 1);

axios.get(`https://backend.ikromdecor.uz/subcategory`)
    .then((e => {
        const a = e.data;
        const c = localStorage.getItem("category")
        const b = a.filter(item => item.category === +c);
        
        
     
        console.log(a);
        console.log(b);

            create_card(b)
    }))
    .catch((e => console.log(e)));
let doc = document, card_category_all = doc.querySelector(".card_category_all");
console.log(card_category_all);
let create_card = e => {
    for (let a of e) {
        let e = doc.createElement("div"),
            t = doc.createElement("img"),
            c = doc.createElement("button"),
            o = doc.createElement("span");
        e.classList.add("card_category_item"),
            c.classList.add("btn_card_item")
        card_category_all.append(e),
            e.append(c),
            t.src = a.img,
            e.append(t),
            e.append(c),
            c.append(o),
            o.textContent = a.title,
            o.href = `${window.location}?id=${a.id}`
        c.addEventListener("click", (function () { window.location.href = `services.html?id=${a.id}` }));
    }
};



let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
  window.location.href = "/search.html"
})

