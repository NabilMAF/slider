let sliders = document.querySelectorAll('.slider')
let dostContainer = document.querySelector('.dots-container')
let nextBtn = document.querySelector('.nav.next')
let prevBtn = document.querySelector('.nav.prev')

let currentIndex = 0
let autoPlayInteval

function showSlider(index) {
    // Menghapus class active di komponen slider dan dots-container
    sliders.forEach((slider, i) => {
        slider.classList.remove('active')
        if (dostContainer.children[i]) {
            dostContainer.children[i].classList.remove('active')
        }
    })

    //Tampilkan slider
    sliders[index].classList.add('active')
    if (dostContainer.children[index]) {
        dostContainer.children[index].classList.add('active')

    }
}

function nextSlider() {
    currentIndex = (currentIndex + 1) % sliders.length
    showSlider(currentIndex)
    resetAutoPlay()
}

function prevSlider() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length
    showSlider(currentIndex)
    resetAutoPlay()
}

nextBtn.addEventListener('click', () => {
    nextSlider()
})

prevBtn.addEventListener('click', () => {
    prevSlider()
})

function startAutoPlay() {
    autoPlayInteval = setInterval(nextSlider, 5000)
}

function resetAutoPlay() {
    clearInterval(autoPlayInteval)
    startAutoPlay()
}

function createDots() {
    sliders.forEach((_, i) => {
        let dot = document.createElement('span')
        dot.classList.add('dots')
        dot.addEventListener('click', () => {
            currentIndex = i
            showSlider(currentIndex)
            resetAutoPlay()
        })
        dostContainer.appendChild(dot)
    })
    showSlider(currentIndex)
}
createDots()
startAutoPlay()