// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.menu__list').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
}))

// табы
/* ------------Табы----------- */
const tabHeaders = document.querySelectorAll('[data-tab]')
console.log(tabHeaders);
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
        tabHeaders.forEach(function(item) {
            item.classList.remove('active')
        })   // добавил для кажддого tab при клике убирать и добовлять класс active
        item.classList.add('active')

    const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBoxes.forEach(function(item) {
            item.classList.add('hidden')
        })
        contentBox.classList.remove('hidden')
        
    })
})