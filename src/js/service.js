const doc = document;

let url = window.location.href;
let url_id = url.slice(url.lastIndexOf('=') + 1);
// один товар
axios.get(`https://backend.ikromdecor.uz/catalog?id=${url_id}`) // подставить нужно буднт сюда
    .then((e => {
        const t = e.data;
        get_card(t)
        links(t)
    }))
    .catch((e => console.log(e)));
// динамические ссылки
let links = (arr) => {
    let dinamic_link = doc.querySelector(".dinamic_link");
    let dinamic_name = doc.querySelector(".dinamic_name");
    dinamic_link.href = `/card.html?id=${arr[0].category.slice(-2)}`
    dinamic_link.innerHTML = `${arr[0].subcategory} <img src="images/Right.svg" alt="">`
    dinamic_name.innerHTML = `${arr[0].subcategory} ${arr[0].modele}`

}
// все товары 
axios.get(`https://backend.ikromdecor.uz/catalog`)
    .then((e => {
        const data = e.data;
        get_slides(data)
        next_prev(data)
    }))
    .catch((e => console.log(e)));

// динамические кнопки вперед и назад
let next_prev = (arr) => {
    let service_panel_left = doc.querySelector(".service-panel-right").children[0]
    let service_panel_right = doc.querySelector(".service-panel-right").children[2]
    let index = arr.findIndex(item => item.id === +url_id);
    let prev_id;
    if (typeof arr[index - 1] === 'undefined') {
        prev_id = arr[arr.length - 1].id
    } else {
        prev_id = arr[index - 1].id
    }
    let next_id;
    if (typeof arr[index + 1] === 'undefined') {
        next_id = arr[0].id
    } else {
        next_id = arr[index + 1].id
    }
    service_panel_left.href = `/services.html?id=${prev_id}`
    service_panel_right.href = `/services.html?id=${next_id}`
}



let disTxt1 = doc.querySelector(".dis-txt1"),
    disTxt2 = doc.querySelector(".dis-txt2"),
    serviceInfoLeft = doc.querySelector(".service-info-left"),
    serviceInfoRight = doc.querySelector(".service-info-right");
disTxt1.addEventListener("click", (function () {
    serviceInfoRight.classList.add("service-not-active"),
        serviceInfoLeft.classList.remove("service-not-active"),
        disTxt2.classList.remove("active"), disTxt1.classList.add("active")
})),
    disTxt2.addEventListener("click", (function () {
        serviceInfoRight.classList.remove("service-not-active"),
            serviceInfoLeft.classList.add("service-not-active"),
            disTxt1.classList.remove("active"), disTxt2.classList.add("active")
    })),
    new Swiper(".swiper", {
        slidesPerView: 4, spaceBetween: 30,
        breakpoints: {
            320: { slidesPerView: 1 },
            691: { slidesPerView: 2 },
            1281: { slidesPerView: 3 },
            1548: { slidesPerView: 4 }
        }
    });



let get_card = (arr) => {
    for (let item of arr) {

        let service_type = doc.querySelector(".service-type")
        let service_name = doc.querySelector(".service-name")
        let service_price = doc.querySelector(".service-price")
        let service_tovar_description = doc.querySelector(".service-tovar-description")
        let discription_txt = doc.querySelector(".discription_txt")
        let about_product = doc.querySelector(".about_product")
        let service_tovar_imgs = doc.querySelector(".service-tovar-imgs")
        let service_center_img = doc.querySelector(".service-center-img")
        let link3d = doc.querySelector(".service-btn-play")


        service_center_img.src = item.item_img[0]
        for (let elem of item.item_img) {
            let service_img_bg = doc.createElement("div")
            let service_small_player = doc.createElement("div")

            let img = doc.createElement("img")


            service_img_bg.classList.add("service-img-bg")
            service_small_player.classList.add("service-small-player")
            img.src = elem
            service_tovar_imgs.append(service_img_bg)
            service_img_bg.append(service_small_player)
            service_small_player.append(img)

            service_img_bg.addEventListener("click", () => {

                service_center_img.src = elem
            })

        }
        for (let elem of item.about_product) {
            let li = doc.createElement("li")
            li.textContent = elem
            about_product.append(li)
        }

        let service_img_bg = doc.querySelectorAll(".service-img-bg")
        service_img_bg[0].classList.add("yotube");
        service_img_bg[0].classList.add("service-active")

        for (let i = 0; i < service_img_bg.length; i++) {
            service_img_bg[i].addEventListener('click', function () {
                for (let j = 0; j < service_img_bg.length; j++) {
                    service_img_bg[j].classList.remove('service-active')
                }
                service_img_bg[i].classList.add('service-active')
            })
        }

        service_type.textContent = item.name
        service_name.textContent = item.full_name
        service_price.textContent = `${item.price}сум`
        service_tovar_description.textContent = item.description
        discription_txt.textContent = item.description
        link3d.addEventListener("click", () => {
            window.location.href = item.link_3D
        })
        // let iframe = doc.querySelector("iframe")
        // let you_tube = item.you_tube_url
        // you_tube = you_tube.replace("watch?v=", "embed/")
        // iframe.setAttribute("src", you_tube)
        // console.log(iframe);


    }
}

let swiper_wrapper = doc.querySelector(".swiper-wrapper")
let get_slides = (arr) => {
    for (let item of arr) {
        let swiper_slide = doc.createElement("div")
        let card = doc.createElement("div")
        let sw_bg = doc.createElement("div")
        let swtxt = doc.createElement("div")
        let service_sale = doc.createElement("div")
        let serv_sw_name = doc.createElement("p")
        let serv_sw_price = doc.createElement("p")


        serv_sw_price.classList.add("serv-sw-price")
        serv_sw_price.textContent = `${item.price}сум`
        serv_sw_name.classList.add("serv-sw-name")
        serv_sw_name.textContent = item.name
        service_sale.classList.add('service-sale')
        service_sale.textContent = item.status
        if (service_sale.textContent == 'sale') {
            service_sale.classList.add('red-sale')
        } else if (service_sale.textContent == 'popular') {
            service_sale.classList.add('popular-sale')
        }
        swiper_slide.addEventListener("click", () => {
            window.location.href = `/services.html?id=${item.id}`
        })
        // http://localhost:3000/services.html?id=10
        // http://localhost:3000/service.html?id=8

        swtxt.classList.add("swtxt")
        sw_bg.classList.add("sw-bg")
        sw_bg.style.backgroundImage = `url(${item.item_img[0]})`
        swiper_slide.classList.add("swiper-slide")
        card.classList.add("service-sw")


        swiper_wrapper.append(swiper_slide)
        swiper_slide.append(card)
        card.append(sw_bg)
        card.append(swtxt)
        sw_bg.append(service_sale)
        swtxt.append(serv_sw_name)
        swtxt.append(serv_sw_price)
        if (+item.discount != 0) {
            let akc = doc.createElement("span")
            let skid_price = doc.createElement('span')
            skid_price.classList.add("skid-price")
            akc.classList.add("akc")
            skid_price.textContent = `${item.discount}%`
            akc.textContent = `${item.price}сум`
            serv_sw_price.append(akc)
            serv_sw_price.append(skid_price)
        }
    }
}


let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
    window.location.href = "/search.html"
})
let service_img_bg = doc.querySelectorAll(".service-img-bg");

let form = doc.querySelector('.services-form');
if (form) {
    let work_form = (event) => {
        event.preventDefault();

        let service_id = url.slice(url.lastIndexOf('-') + 1);
        let inps = form.querySelectorAll('input');
        let values = {
            id: service_id,
            name: inps[0].value,
            phone: inps[1].value,
            date: new Date().toLocaleDateString()
        };
        console.log(values);
        inps[0].value = '';
        inps[1].value = '';
    };
    form.addEventListener('submit', work_form);
} else {
    console.log('Форма не найдена');
}

// yotub

