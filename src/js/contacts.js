let doc = document;
let form = doc.querySelector('.form');
if (form) {
    let work_form = (event) => {
        event.preventDefault();
        let inps = form.querySelectorAll('input');
        let textareas = form.querySelectorAll('textarea');
        let values = {
            name: inps[0].value,
            phone: inps[1].value,
            date: new Date().toLocaleDateString(),
            message: textareas[0].value
        };
        inps[0].value = '';
        inps[1].value = '';
        textareas[0].value = '';
        console.log(values);
    };
    form.addEventListener('submit', work_form);
} else {
    console.log('Форма не найдена');
}