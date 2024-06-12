axios.get('https://backend.ikromdecor.uz/catalog')
  .then(res => {
    globalData = res.data;
    let data = res.data;
    console.log(res.data, data) // рабочая область
    create_category(data, 1, 8, 10)
    crate_slodes(data, 'new');

  })
  .catch(err => console.log(err))



// отрисовка категорий (с названиями)
const create_category = (arr, id1, id2, id3) => {
  let doc = document;
  let category_container = doc.querySelector('.category_container')
  let categegory_id1 = id1
  let categegory_id2 = id2
  let categegory_id3 = id3

  for (let item of arr) {
    if (item.id == categegory_id1 || item.id == categegory_id2 || item.id == categegory_id3) {
      let category_items = doc.createElement('div');
      let left_dicription = doc.createElement('div');
      let h4 = doc.createElement('h4');
      let a = doc.createElement('a');
      let line = doc.createElement('div');
      let img = doc.createElement('img');
      category_items.classList.add('category_items');
      left_dicription.classList.add('left_dicription');
      line.classList.add('line');
      h4.textContent = item.subcategory;
      a.textContent = "Больше"
      a.href = `catalog.html?id=${item.id}` //почему не локал хост потому что надо на другую страницу
      img.src = item.item_img[1];
      category_container.append(category_items);
      category_items.append(left_dicription);
      left_dicription.append(h4);
      left_dicription.append(a);
      left_dicription.append(line);
      category_items.append(img);
    }
  }
}
// слайдер с карточками товаров
let crate_slodes = (arr) => {
  for (let item of arr) {
    let swiper_container = doc.querySelector('.catalog_cards');
    let swiper_slide = doc.createElement('div');
    let items = doc.createElement('div');
    let images = doc.createElement('div');
    let img = doc.createElement('img');
    let status = doc.createElement('div');
    let bottom = doc.createElement('div');
    let discription = document.createElement('div');
    let prices = doc.createElement('div');
    let summa = doc.createElement('div')
    let sum = doc.createElement('span');
    let sale_price = doc.createElement('div');
    let price_discount = doc.createElement('div');
    let persent = doc.createElement('span');


    swiper_slide.classList.add('swiper-slide');
    swiper_slide.addEventListener("click", () => {
      window.location.href = `/services.html?id=${item.id}`
    })
    items.classList.add('items');
    images.classList.add('images');
    img.classList.add('item');
    img.src = item.item_img[0];
    status.textContent = item.status;
    status.classList.add('status');
    status.classList.add(item.status);
    bottom.classList.add('item_text')
    discription.classList.add('discription');
    discription.textContent = item.name;
    prices.classList.add('price');
    summa.classList.add('item_price');
    summa.textContent = item.sale_price;
    sum.textContent = 'сум';
    sale_price.classList.add('sale_price');
    price_discount.classList.add('price_discount');
    sale_price.textContent = item.price;
    price_discount.textContent = item.discount;
    persent.textContent = '%';

    swiper_container.append(swiper_slide);
    swiper_slide.append(items);
    images.append(img);
    images.append(status);
    items.append(images);
    items.append(bottom);
    bottom.append(discription);
    bottom.append(prices);
    prices.append(summa);
    summa.append(sum);
    prices.append(sale_price);
    prices.append(price_discount);
    sale_price.append(sum)
    price_discount.append(persent);

    let btn1 = doc.querySelectorAll(".btn_not_active")[0];
    let btn2 = doc.querySelector(".btn_active");
    let btn3 = doc.querySelectorAll(".btn_not_active")[1];

    btn1.addEventListener("click", function () {
      btn1.classList.add("btn_active");
      btn2.classList.remove("btn_active");
      btn2.classList.add("btn_not_active");
      btn3.classList.remove("btn_active");
      btn3.classList.add("btn_not_active");

      if (btn1.classList.contains("btn_active")) {
        if (item.status !== 'popular') {
          items.classList.add('not_active')
        }
        if (item.status == 'popular') {
          items.classList.remove('not_active')
        }
      }
    })
    btn2.addEventListener("click", function () {
      btn2.classList.add("btn_active");
      btn1.classList.remove("btn_active");
      btn1.classList.add("btn_not_active");
      btn3.classList.remove("btn_active");
      btn3.classList.add("btn_not_active");
      if (btn2.classList.contains("btn_active")) {
        if (btn3.classList.contains("btn_active")) {
          if (item.status !== 'sales') {
            items.classList.add('not_active')
          }
          if (item.status == 'sales') {
            items.classList.remove('not_active')
          }
        }
      }


    })
    btn3.addEventListener("click", function () {
      btn3.classList.add("btn_active");
      btn1.classList.remove("btn_active");
      btn1.classList.add("btn_not_active");
      btn2.classList.remove("btn_active");
      btn2.classList.add("btn_not_active");


      if (btn3.classList.contains("btn_active")) {
        if (item.status !== 'new') {
          items.classList.add('not_active')
        }
        if (item.status == 'new') {
          items.classList.remove('not_active')
        }
      }
    })





  }
}


let slide_button = doc.querySelector('.slide_button'),
    button_design = doc.querySelector('.button_design')

button_design.addEventListener("click", () => {
  window.location.href = "/contacts.html"
})

slide_button.addEventListener("click", () => {
  window.location.href = "/contacts.html"
})


let search = doc.querySelector(".main-menu__search")
search.addEventListener("click", (e) => {
  window.location.href = "/search.html"
})










