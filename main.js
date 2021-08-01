const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

const links = document.querySelectorAll('nav ul li a')

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

const backToTop = document.querySelector('.back-to-top')

const sections = document.querySelectorAll('main .section[id]')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scrll')
  }
}
function backToTopWhen() {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}
function activateMenu() {
  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkPointStart = checkPoint >= sectionTop
    const checkPointEnd = checkPoint <= sectionTop + sectionHeight

    if (checkPointStart && checkPointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
/*scrollreveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
  { interval: 100 }
)
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTopWhen()
  activateMenu()
})
