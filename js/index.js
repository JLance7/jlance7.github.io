//Mobile Nav
const header = document.querySelector('.header-container')
const btnNav = document.querySelector('.btn-mobile-nav')

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})

const navLinks = document.querySelectorAll('.nav-li')
let clicked = false

navLinks.forEach( link => {
  link.addEventListener('click', () => {
    header.classList.toggle('nav-open')
  })
})


