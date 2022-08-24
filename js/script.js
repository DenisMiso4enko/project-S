// burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
const barBurger = document.querySelectorAll('.bar')
const body = document.body

function colorBurger() {
    barBurger.forEach((el) => {
        if (burger.classList.contains('active')) {
            el.style.background = 'white'
        } else {
            el.style.background = '#1D2736'
        }
    })
}
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('stopscroll')
    colorBurger()
})
document.querySelectorAll('.nav__menu').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('stopscroll')
    colorBurger()
}))

// dropDown
const langBtn = document.querySelector('.btn-lg')
const dropDown = document.querySelector('.dropdown__list')
const langList = document.querySelectorAll('.dropdown__list-item')

langBtn.addEventListener('click', function() {
    dropDown.classList.toggle('active')
    langBtn.classList.toggle('active')
})
langList.forEach((el) => {
    el.addEventListener('click', function(e) {
       console.log(e.target.textContent);
       langBtn.textContent = e.target.textContent
       dropDown.classList.toggle('active')
       langBtn.classList.toggle('active')
    })
})

// tabs
const tabHeaders = document.querySelectorAll('[data-tab]')
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

// slider 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.next__btn',
      prevEl: '.prev__btn',
    },
  });


// prising



// modal sign up 
const buttonsSign = document.querySelectorAll('.modal-btn') 
const fadeBlock = document.querySelector('#modal')
const fade = document.querySelector('.fade-block')
buttonsSign.forEach((btn) => {
    btn.addEventListener('click', () => {
        fadeBlock.classList.remove('hidden')
        body.classList.toggle('stopscroll')
        fade.addEventListener('click', function() {
        fade.classList.add('hidden')
        body.classList.remove('stopscroll')
    })
    })
})


fade.querySelector('.modal-window').addEventListener('click', function(event) {
    event.stopPropagation()
})