//В строковом формате получаем каждый из слайдов
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        // console.log(document.getElementById())
    })
}

//Удаляем активные классы сдругих элементов
const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function chBackcolor(color) {
    sleep(100)
    document.body.style.background = color;
}

function sleep(milliseconds) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < milliseconds) {
        i++;
    }
}