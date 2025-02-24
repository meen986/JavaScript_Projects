const sliderItems = document.querySelector(".slider-items")
const items = document.querySelector(".slider-items img")

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
