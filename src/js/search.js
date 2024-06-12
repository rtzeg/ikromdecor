let doc = document;
let search = doc.querySelector(".search")
let card_names = [];
axios.get('https://backend.ikromdecor.uz/catalog')
    .then(res => {
        let data = res.data;
        for (let item of data) {
            card_names.push(item.full_name)
        }
        // inp.addEventListener('input', () => {
        //     let sr_data = search_func(data)
        //     // const filteredData = data.filter(item => sr_data.some(name => name === item.name));
        //     console.log(sr_data);
        // })

        get_slides(data);
        console.log(data) // рабочая область
    })
    .catch(err => console.log(err))
let get_slides = (arr) => {

    for (let item of arr) {
        let card = doc.createElement("div")
        let sw_bg = doc.createElement("div")
        let swtxt = doc.createElement("div")
        let service_sale = doc.createElement("div")
        let serv_sw_name = doc.createElement("p")
        let serv_sw_price = doc.createElement("p")




        serv_sw_price.classList.add("serv-sw-price")
        serv_sw_price.textContent = `${item.price}сум`
        serv_sw_name.classList.add("serv-sw-name")
        serv_sw_name.textContent = item.name.toLowerCase()
        service_sale.classList.add('service-sale')
        service_sale.textContent = item.status
        if (service_sale.textContent == 'sale') {
            service_sale.classList.add('red-sale')
        } else if (service_sale.textContent == 'popular') {
            service_sale.classList.add('popular-sale')
        }
        card.addEventListener("click", () => {
            window.location.href = `/services.html?id=${item.id}`
        })
        // http://localhost:3000/services.html?id=10
        // http://localhost:3000/service.html?id=8

        swtxt.classList.add("swtxt")
        sw_bg.classList.add("sw-bg")
        sw_bg.style.backgroundImage = `url(${item.item_img[0]})`
        card.classList.add("service-sw")


        search.append(card)
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

let input = doc.querySelector("#text")

input.oninput = () => {
    let inp = doc.querySelector("#text").value.trim().toLowerCase();
    let names = doc.querySelectorAll(".serv-sw-name");
        if (inp != "") {
            for (let name of names) {
                if (name.innerText.search(inp) == -1) {
                    name.parentElement.parentElement.classList.add("not_active")
                } else {
                    name.parentElement.parentElement.classList.remove("not_active")
                }
            }
        } else {
            for (let name of names) {
                name.parentElement.parentElement.classList.remove("not_active")
            }
        }
}
        
    
// let get_words = (card_names, word) => {
//     let reg = new RegExp(word, 'gi')
//     return card_names.filter(item => {
//         return item.match(reg)
//     })
// }

// let search_func = () => {
//     let opt = get_words(card_names, inp.value)
//     console.log(opt);
// }

// inp.addEventListener('input', () => {
//     search_func()
// })


