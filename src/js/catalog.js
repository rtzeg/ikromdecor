let url = window.location.href;
// если ikromdecor.uz то
let backend_url = `backend.${url}`
let url_id = url.slice(url.lastIndexOf('=') + 1);
axios.get(`https://backend.ikromdecor.uz/category`) // подставить нужно буднт сюда
    .then((e => {
        const t = e.data; console.log(e.data, t),
            create_category(t)
    }))
    .catch((e => console.log(e)));
let doc = document;
var swiper3 = new Swiper(".swiper3",
    {
        spaceBetween: 30,
        autoplay: { delay: 5e3 },
        pagination: { el: ".swiper-pagination", clickable: !0 }
    });
localStorage.setItem("category", '13')
const create_category = e => {
    for (let t of e) {
        let e = doc.querySelector(".All_categories"),
            a = doc.createElement("div"), c = doc.createElement("div"),
            o = doc.createElement("h4"), d = doc.createElement("a"),
            n = doc.createElement("div"), l = doc.createElement("img");
        a.classList.add("category_items"), c.classList.add("left_dicription"),
            o.textContent = t.category,
            d.textContent = "Больше", d.href = `card.html`,
            n.classList.add("line"), l.src = t.img, a.append(c),
            c.append(o), c.append(d), c.append(n),
            a.append(l), e.append(a), console.log(t)
        d.addEventListener("click", (e) => {
            localStorage.setItem("category", `${t.id}`)

        })

    }
};


let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
    window.location.href = "/search.html"
})

