const sliderItems = document.querySelector(".slider-items")
const items = document.querySelectorAll(".slider-items img")

// buttons
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

// clone items
const firstItem = sliderItems.firstElementChild
const lastItem = sliderItems.lastElementChild

const firstItemClone = firstItem.cloneNode(true)
const lastItemClone = lastItem.cloneNode(true)

sliderItems.appendChild(firstItemClone)
sliderItems.insertBefore(lastItemClone, sliderItems.firstChild)

// counter
let count = 1
const size = items[0].clientWidth
sliderItems.style.translate = `${-size * count}px`

// next btn function
nextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    count++
    sliderItems.style.transition = `0.3s all`
    sliderItems.style.translate = `${-size * count}px`
    nextBtn.setAttribute("disabled", true)
    setTimeout(() => {
        nextBtn.removeAttribute("disabled")
    }, 300);
})

// prev btn function
prevBtn.addEventListener("click", (e) => {
    e.preventDefault()
    count--
    sliderItems.style.transition = `0.3s all`
    sliderItems.style.translate = `${-size * count}px`
    prevBtn.setAttribute("disabled", true)
    setTimeout(() => {
        prevBtn.removeAttribute("disabled")
    }, 300);
})

// carousel loop
sliderItems.addEventListener("transitionend", () => {
    if (count > items.length) {
        count = 1
        sliderItems.style.transition = `none`
        sliderItems.style.translate = `${-size * count}px`
    } else if (count < 1) {
        count = items.length
        sliderItems.style.transition = `none`
        sliderItems.style.translate = `${-size * count}px`
    }
})