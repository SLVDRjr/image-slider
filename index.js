const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const slider = document.getElementById('slider')
const dotsDiv = document.getElementById('dotsDiv')
const sights = document.getElementById('sights')
const images = [
  {
    src: 'img/img-1.jpg',
    sights: 'Burnham Park'
  },
  {
    src: 'img/img-2.jpg',
    sights: 'Our Lady of the Atonement Cathedral'
  },
  {
    src: 'img/img-3.jpg',
    sights: 'Mines View Observation Deck'
  },
  {
    src: 'img/img-4.jpg',
    sights: 'Tam-awan Village'
  },
  {
    src: 'img/img-5.jpg',
    sights: 'Wright Park'
  },
  {
    src: 'img/img-6.jpg',
    sights: 'Botanical Garden'
  },
  {
    src: 'img/img-7.jpg',
    sights: 'Heritage Hill and Nature Park Garden'
  },
  {
    src: 'img/img-8.jpg',
    sights: 'Our Lady of Lourdes Grotto'
  },
  {
    src: 'img/img-9.jpg',
    sights: 'Bell Church'
  },
  {
    src: 'img/img-10.jpg',
    sights: 'BenCab Museum'
  },
  {
    src: 'img/img-11.jpg',
    sights: "Lion's Head"
  },
  {
    src: 'img/img-12.jpg',
    sights: 'The Mansion'
  },
  {
    src: 'img/img-13.jpg',
    sights: 'Strawberry Farm'
  },
  {
    src: 'img/img-14.jpg',
    sights: 'Sky Ranch Baguio'
  }
]
let imageCount = 0

createSlides()
const slides = document.querySelectorAll('.slide')

window.addEventListener('load', function(){
  slides[0].style.backgroundImage = `url(${images[imageCount].src})`
  sights.innerHTML = `${images[imageCount].sights}`
})

createDots()
const dots = document.querySelectorAll('.dot')

dots.forEach(dot => {
  dot.addEventListener('click', function(){
    const current = document.querySelector('.current')
    current.classList.remove('current')

    const active = document.querySelector('.active')
    active.classList.remove('active')

    const dotCount = dot.dataset.id
    slides[dotCount].classList.add('current')
    slides[dotCount].style.backgroundImage = `url(${images[dotCount].src})`
    sights.innerHTML = `${images[dotCount].sights}`
    dots[dotCount].classList.add('active')
    imageCount = dotCount
  })
})

nextBtn.addEventListener('click', function(){
  const current = document.querySelector('.current')
  current.classList.remove('current')
  imageCount++

  if(current.nextElementSibling) {
      current.nextElementSibling.classList.add('current')
      current.nextElementSibling.style.backgroundImage = `url(${images[imageCount].src})`
      sights.innerHTML = `${images[imageCount].sights}`
  } else {
      slides[0].classList.add('current')
      slides[0].style.backgroundImage = `url(${images[0].src})`
      sights.innerHTML = `${images[0].sights}`
  }

  const dots = document.querySelectorAll('.dot')
  const active = document.querySelector('.active')
  active.classList.remove('active')

  if(active.nextElementSibling) {
      active.nextElementSibling.classList.add('active')
  } else {
      dots[0].classList.add('active')
      imageCount = 0
  }
})

prevBtn.addEventListener('click', function(){
  const current = document.querySelector('.current')
  current.classList.remove('current')
  imageCount--
  
  if(current.previousElementSibling) {
      current.previousElementSibling.classList.add('current')
      current.previousElementSibling.style.backgroundImage = `url(${images[imageCount].src})`
      sights.innerHTML = `${images[imageCount].sights}`
  } else {
    slides[slides.length - 1].classList.add('current')
    slides[slides.length - 1].style.backgroundImage = `url(${images[slides.length - 1].src})`
    imageCount = slides.length - 1
    sights.innerHTML = `${images[imageCount].sights}`
  }

  const dots = document.querySelectorAll('.dot')
  const active = document.querySelector('.active')
  active.classList.remove('active')

  if(active.previousElementSibling) {
      active.previousElementSibling.classList.add('active')
  } else {
      dots[dots.length - 1].classList.add('active')
  }
})

function createSlides(){
  for(let i = 0; i < images.length; i++){
    let slide = document.createElement('div')
    slide.classList.add('slide')
    slider.appendChild(slide)
  }
  const slides = document.querySelectorAll('.slide')
  slides[0].classList.add('current')
}

function createDots(){
  for(let i = 0; i < images.length; i++){
    let dot = document.createElement('span')
    dot.classList.add('dot')
    dot.dataset.id = i
    dotsDiv.appendChild(dot)
  }
  const dots = document.querySelectorAll('.dot')
  dots[0].classList.add('active')
}




