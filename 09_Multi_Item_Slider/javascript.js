const galleryItems = document.querySelector(".galleryItems")
const items = galleryItems.children

// buttons
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

// counter and size
let count = 0
let size = items[0].clientWidth
let totalWidth = size * items.length
prevBtn.style.display = "none"

// size modify on resizing
window.addEventListener("resize", () => {
    size = items[0].clientWidth
    totalWidth = size * items.length
})

// next button function
nextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (count < items.length) {
        count++
        changePosition()
    }

})

// prev button function
prevBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (count > 0) {
        count--
        changePosition()
    }

})

// change position function
const changePosition = () => {
    galleryItems.style.transition = "all 0.3s"
    galleryItems.style.transform = `translateX(${-size * count}px)`

    // next buttons hide and show
    let currentWidth = totalWidth + (-size * count)
    if(currentWidth <= galleryItems.offsetWidth){
        nextBtn.style.display = "none"
    }else{
        nextBtn.style.display = "block"
    }

    // prev buttons hide and show
    if(count < 1){
        prevBtn.style.display = "none"
    }else{
        prevBtn.style.display = "block"
    }
}

