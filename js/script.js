const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slide = mainSlide.querySelectorAll('div')

const container = document.querySelector('.container')

let slideCount = slide.length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    CnahgeSlide('up')
})

downBtn.addEventListener('click', () => {
    CnahgeSlide('down')
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        CnahgeSlide('up')
    } else if (e.key === 'ArrowDown') {
        CnahgeSlide('down')
    }
} )



function CnahgeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    } else if (direction = 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
