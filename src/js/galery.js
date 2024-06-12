let doc = document
let globalData = [];
axios.get('https://backend.ikromdecor.uz/gallery')
    .then(res => {
        let data = res.data;
        for (let item of data) {
            globalData.push(item)
        }
        craete_grid(data)
        let titles = create_categories(data, 'title')
        categories(titles)
    })
    .catch(err => console.log(err))
let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
    window.location.href = "/search.html"
})


let create_categories = (arr, key) => {
    let seen = new Set();
    return arr.filter(item => {
        const isDuplicate = seen.has(item[key]);
        seen.add(item[key]);
        return !isDuplicate;
    })


}
let categories = (arr) => {
    let gallery_categories = doc.querySelector(".gallery_categories")
    for (let item of arr) {
        let li = doc.createElement("li")
        li.textContent = item.title
        li.classList.add("cat_link")
        gallery_categories.append(li)



        let cat_link = doc.querySelectorAll(".cat_link")

        for (let i = 0; i < cat_link.length; i++) {
            cat_link[i].addEventListener('click', function () {
                for (let j = 0; j < cat_link.length; j++) {
                    cat_link[j].classList.remove('active')
                }
                cat_link[i].classList.add('active')
            })
        }

    }
}



// отображение фотографий
let photos_container = doc.querySelector(".photos_container")
let craete_grid = (data) => {
    for (let i = 0; i < data.length; i += 4) {
        let grid = doc.createElement("div")
        photos_container.append(grid)
        if (grid.previousElementSibling.className == "grid2") {
            grid.className = "grid1"
        } else {
            grid.className = "grid2"
        }
        for (let j = i; j < i + 4 && j < data.length; j++) {
            let photos_galery = doc.createElement("div")
            photos_galery.classList.add("photos_galery")
            let img = doc.createElement("img")
            img.src = data[j].img
            photos_galery.append(img)
            grid.append(photos_galery)
        }
    }


}




// ссылки и работа пунктира



