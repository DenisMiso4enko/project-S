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
