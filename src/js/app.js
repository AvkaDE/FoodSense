const sliderLine = document.querySelector('.slider-line'),
prevButton = document.querySelector('.button-prev'),
nextButton = document.querySelector('.button-next'),
dots = document.querySelectorAll('.dot')

let position = 0,
dotIndex = 0,
per = document.querySelector('.slider-wrapper').offsetWidth;

const nextSlide = () => {
    per = document.querySelector('.slider-wrapper').offsetWidth;
    if (position < (dots.length - 1) * per) {
        dotIndex++
        position = per * dotIndex
    }
    else {
        position = 0
        dotIndex = 0
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const prevSlide = () => {
    per = document.querySelector('.slider-wrapper').offsetWidth;
    if (position > 0) {
        dotIndex--
        position = per * dotIndex
    }
    else {
        position = (dots.length - 1) * per
        dotIndex = (dots.length - 1)
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = per * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})

setInterval(() => {
   nextSlide() 
}, 3000)